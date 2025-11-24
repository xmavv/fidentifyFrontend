"use client";

import InputOutputCard from "@/ui/input-output-card";
import { NoteSearch } from "react-coolicons";
import OutputFingerprintImage from "@/public/fingerprint_output.png";
import Image from "next/image";
import Button from "@/ui/button";
import PipelineSelect from "@/components/pipeline/pipeline-select";
import { analyzeDescriptions } from "@/constants/analyze";
import { useState, useTransition } from "react";
import { convertTiff } from "@/services/utils";
import { analyze } from "@/services/actions";
import { displayDuration } from "@/lib/utils";
import IndicatorArrow from "@/components/pipeline/indicator-arrow";
import PipelineInput from "@/components/pipeline/pipeline-input";
import { ImageZoom } from "@/components/ui/shadcn-io/image-zoom";
import FingerprintAnimation from "@/public/fingerprint_animation.gif";
import Alert from "@/ui/alert";
import { useAuth } from "@/contexts/auth";

const feature = { name: "analyze", items: ["flann"] };

export default function AnalyzePipeline({
  method,
}: {
  method: keyof typeof analyzeDescriptions;
}) {
  const { user, isLoadingUserInfo } = useAuth();
  const [isPending, startTransition] = useTransition();
  const [inputFiles, setInputFiles] = useState<{ file: File; url: string }[]>(
    [],
  );
  const [outputFile, setOutputFile] = useState<{
    good_matches: number;
    match_img_path: string;
  }>();
  const [error, setError] = useState("");
  const [duration, setDuration] = useState(0);

  async function handleDrop(files: File[], index: number) {
    if (!files) return;

    const file = files[0];
    const name = file.name.toLowerCase() || "";
    const isTiff = name.endsWith(".tif") || name.endsWith(".tiff");
    let imageUrl: string;
    if (isTiff) imageUrl = await convertTiff(file);
    else imageUrl = URL.createObjectURL(file);

    if (index === 0)
      setInputFiles((files) => [{ file, url: imageUrl }, files[1]]);
    else setInputFiles((files) => [files[0], { file, url: imageUrl }]);
  }

  async function handleSubmit() {
    if (inputFiles.length < 1 || !inputFiles[0].file || !inputFiles[1].file)
      return;

    const interval = setInterval(() => {
      setDuration((duration) => duration + 1);
    }, 1000);

    startTransition(async () => {
      const analyzedFingerprints = await analyze(
        inputFiles[0].file,
        inputFiles[1].file,
        method,
        user,
      );
      if (analyzedFingerprints.detail) {
        if (Array.isArray(analyzedFingerprints.detail))
          setError(analyzedFingerprints.detail[0].msg);
        else setError(analyzedFingerprints.detail);

        clearInterval(interval);
        return;
      }

      setOutputFile(analyzedFingerprints);
      clearInterval(interval);
    });
  }

  function resetInputFile() {
    setInputFiles([]);
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
        <div className="flex gap-2">
          <PipelineInput
            inputFile={inputFiles[0]}
            onReset={resetInputFile}
            onDrop={(files) => handleDrop(files, 0)}
            className="!w-60 !h-80"
          />
          <PipelineInput
            inputFile={inputFiles[1]}
            onReset={resetInputFile}
            onDrop={(files) => handleDrop(files, 1)}
            className="!w-60 !h-80"
          />
        </div>

        <IndicatorArrow isLoading={isPending} finished={!!outputFile} />

        <div>
          <InputOutputCard className={`relative overflow-hidden !w-120 !h-80`}>
            {outputFile && inputFiles.length > 1 ? (
              <ImageZoom className="w-full h-full">
                <Image
                  alt="output image"
                  src={`${process.env.NEXT_PUBLIC_API_BASE_URL}/${outputFile.match_img_path}`}
                  unoptimized
                  fill
                  style={{ objectFit: "cover" }}
                />
              </ImageZoom>
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
                disabled={
                  !!outputFile ||
                  inputFiles.filter((file) => file).length < 2 ||
                  isPending ||
                  isLoadingUserInfo
                }
              >
                <NoteSearch className="inline" /> analyze
              </Button>
              <PipelineSelect
                name={feature.name}
                items={feature.items}
                value={method}
              />
            </div>
            <p>{displayDuration(duration)}</p>
          </div>
        </div>
      </div>

      <p className="text-xs text-accent text-justify absolute bottom-10">
        {analyzeDescriptions[method]}
      </p>
    </>
  );
}
