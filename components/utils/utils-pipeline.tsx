"use client";

import InputOutputCard from "@/ui/input-output-card";
import {
  Dropzone as DropzoneShadcn,
  DropzoneContent,
  DropzoneEmptyState,
} from "@/components/ui/shadcn-io/dropzone";
import { ArrowRightLg, Ruler } from "react-coolicons";
import {
  Comparison,
  ComparisonHandle,
  ComparisonItem,
} from "@/components/ui/shadcn-io/comparison";
import Image from "next/image";
import Button from "@/ui/button";
import PipelineSelect from "@/components/pipeline/pipeline-select";
import { utilsDescriptions } from "@/constants/utilities";
import { useState } from "react";
import OutputFingerprintImage from "@/public/fingerprint_output.png";

const feature = {
  name: "utils",
  items: ["orientation", "gabor", "skeletonize", "minutiae", "singularity"],
};

export default function UtilsPipeline({
  enhancer,
}: {
  enhancer: keyof typeof utilsDescriptions;
}) {
  const [files, setFiles] = useState<File[] | undefined>();

  const handleDrop = (inputFiles: File[]) => {
    console.log(inputFiles);
    setFiles(inputFiles);
  };

  return (
    <>
      <div className="flex justify-evenly">
        <InputOutputCard className="box-border p-1">
          <DropzoneShadcn
            accept={{ image: ["jpg", "jpeg", "png", "tiff", "tif", "bmp"] }}
            maxFiles={1}
            onDrop={handleDrop}
            onError={console.error}
            src={files}
            className="h-full rounded-none border-none"
          >
            <DropzoneEmptyState />
            <DropzoneContent />
          </DropzoneShadcn>
        </InputOutputCard>
        <ArrowRightLg className="text-accent self-center -translate-y-8" />

        <div>
          <InputOutputCard className="relative overflow-hidden">
            {files ? (
              <Comparison className="w-full h-full">
                <ComparisonItem className="bg-red-500" position="left">
                  <Image
                    alt="Placeholder 1"
                    className="opacity-50"
                    height={1080}
                    src="https://placehold.co/1920x1080?random=1"
                    unoptimized
                    width={1920}
                  />
                </ComparisonItem>
                <ComparisonItem className="bg-blue-500" position="right">
                  <Image
                    alt="Placeholder 2"
                    className="opacity-50"
                    height={1440}
                    src="https://placehold.co/2560x1440?random=2"
                    unoptimized
                    width={2560}
                  />
                </ComparisonItem>
                <ComparisonHandle />
              </Comparison>
            ) : (
              <Image
                src={OutputFingerprintImage}
                alt=""
                className="absolute inline-block opacity-20 left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2"
              />
            )}
            <p className="text-[#4E4E4E] absolute bottom-4 left-1/2 -translate-x-1/2 text-nowrap">
              Matched image will popup there
            </p>
          </InputOutputCard>

          <div className="mt-4 flex justify-between gap-8">
            <div className="w-full space-y-2">
              <Button className="text-primary w-full">
                <Ruler className="inline" /> enhance
              </Button>
              <PipelineSelect
                name={feature.name}
                items={feature.items}
                value={enhancer}
              />
            </div>
            <p>00:32</p>
          </div>
        </div>
      </div>

      <p className="text-xs text-accent text-justify absolute bottom-10">
        {utilsDescriptions[enhancer]}
      </p>
    </>
  );
}
