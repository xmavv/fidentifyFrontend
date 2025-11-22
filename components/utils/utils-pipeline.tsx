"use client";

import InputOutputCard from "@/ui/input-output-card";
import { Ruler } from "react-coolicons";
import {
  Comparison,
  ComparisonHandle,
  ComparisonItem,
} from "@/components/ui/shadcn-io/comparison";
import Image from "next/image";
import Button from "@/ui/button";
import PipelineSelect from "@/components/pipeline/pipeline-select";
import { utilsDescriptions } from "@/constants/utilities";
import { useState, useTransition } from "react";
import OutputFingerprintImage from "@/public/fingerprint_output.png";
import { convertTiff } from "@/services/utils";
import { enhance } from "@/services/actions";
import IndicatorArrow from "@/components/pipeline/indicator-arrow";
import PipelineInput from "@/components/pipeline/pipeline-input";
import FingerprintAnimation from "@/public/fingerprint_animation.gif";
import { displayDuration } from "@/lib/utils";
import Alert from "@/ui/alert";
import { ImageZoom } from "@/components/ui/shadcn-io/image-zoom";

const feature = {
  name: "utils",
  items: ["orientation", "gabor", "skeletonize", "minutiae", "singularity"],
};

export default function UtilsPipeline({
  enhancer,
}: {
  enhancer: keyof typeof utilsDescriptions;
}) {
  //these states and functions are common, they can be moved to its own compoentn togethe with alert compoennt
  //and then just pipeline per method, also all of the state can be in the reducer
  //for even more convenience

  //reusable component with children but animation and placehodler statys the same
  const [isPending, startTransition] = useTransition();
  const [inputFile, setInputFile] = useState<{ file: File; url: string }>();
  const [outputFile, setOutputFile] = useState<{ path: string }>();
  const [error, setError] = useState("");
  const [duration, setDuration] = useState(0);

  async function handleDrop(files: File[]) {
    if (!files) return;

    const file = files[0];
    const name = file.name.toLowerCase() || "";
    const isTiff = name.endsWith(".tif") || name.endsWith(".tiff");
    let imageUrl: string;
    if (isTiff) imageUrl = await convertTiff(file);
    else imageUrl = URL.createObjectURL(file);

    setInputFile({ file, url: imageUrl });
  }

  async function handleSubmit() {
    if (!inputFile || !inputFile.file) return;

    const interval = setInterval(() => {
      setDuration((duration) => duration + 1);
    }, 1000);

    startTransition(async () => {
      const enhancedFingerprint = await enhance(inputFile?.file, enhancer);
      if (enhancedFingerprint.detail) {
        setError(enhancedFingerprint.detail);
        clearInterval(interval);
        return;
      }

      setOutputFile(enhancedFingerprint);
      clearInterval(interval);
    });
  }

  console.log(outputFile);

  function resetInputFile() {
    setInputFile(undefined);
    setOutputFile(undefined);
    setDuration(0);
  }

  return (
    <>
      <Alert open={!!error}>
        <Alert.Header>
          <Alert.Title>{error}</Alert.Title>
          <Alert.Description>
            <span className="block">
              An error occurred and pipeline did not run properly.
            </span>
            <span>
              Please read error information and try again with different
              image.{" "}
            </span>
          </Alert.Description>
        </Alert.Header>
        <Alert.Action>
          <Button
            className="text-instruction py-2 px-8"
            onClick={() => setError("")}
          >
            Continue
          </Button>
        </Alert.Action>
      </Alert>

      <div className="flex justify-evenly">
        <PipelineInput
          inputFile={inputFile}
          onReset={resetInputFile}
          onDrop={handleDrop}
        />

        <IndicatorArrow isLoading={isPending} finished={!!outputFile} />

        <div>
          <InputOutputCard className={`relative overflow-hidden`}>
            {outputFile && inputFile ? (
              <Comparison className="w-full h-full">
                <ComparisonItem position="left">
                  <ImageZoom className="w-full h-full">
                    <Image
                      alt="input image"
                      src={inputFile.url}
                      unoptimized
                      fill
                      style={{ objectFit: "cover" }}
                    />
                  </ImageZoom>
                </ComparisonItem>
                <ComparisonItem position="right">
                  <ImageZoom className="w-full h-full">
                    <Image
                      alt="output image"
                      src={`${process.env.NEXT_PUBLIC_API_BASE_URL}/${outputFile.path}`}
                      unoptimized
                      fill
                      style={{ objectFit: "cover" }}
                    />
                  </ImageZoom>
                </ComparisonItem>
                <ComparisonHandle />
              </Comparison>
            ) : (
              <div className="pointer-events-none grid place-items-center">
                {isPending ? (
                  <Image
                    src={FingerprintAnimation}
                    alt=""
                    className="absolute top-1/5 left 1/2
                    animate-in fade-in duration-700"
                  />
                ) : (
                  <>
                    <Image
                      src={OutputFingerprintImage}
                      alt=""
                      className="absolute inline-block opacity-20 left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2"
                    />
                    <p className="text-[#4E4E4E] absolute bottom-4 left-1/2 -translate-x-1/2 text-nowrap">
                      Matched image will popup there
                    </p>
                  </>
                )}
              </div>
            )}
          </InputOutputCard>

          <div className="mt-4 flex justify-between gap-8">
            <div className="w-full space-y-2">
              <Button
                className="text-primary w-full"
                onClick={handleSubmit}
                disabled={!!outputFile || !inputFile || isPending}
              >
                <Ruler className="inline" /> enhance
              </Button>
              <PipelineSelect
                name={feature.name}
                items={feature.items}
                value={enhancer}
              />
            </div>
            <p>{displayDuration(duration)}</p>
          </div>
        </div>
      </div>

      <p className="text-xs text-accent text-justify absolute bottom-10">
        {utilsDescriptions[enhancer]}
      </p>
    </>
  );
}
