"use client";

import InputOutputCard from "@/ui/input-output-card";
import {
  Dropzone as DropzoneShadcn,
  DropzoneContent,
  DropzoneEmptyState,
} from "@/components/ui/shadcn-io/dropzone";
import { ArrowRightLg, NoteSearch } from "react-coolicons";
import OutputFingerprintImage from "@/public/fingerprint_output.png";
import Image from "next/image";
import Button from "@/ui/button";
import PipelineSelect from "@/components/pipeline/pipeline-select";
import { analyzeDescriptions } from "@/constants/analyze";
import { useState } from "react";

const feature = { name: "analyze", items: ["flann"] };

export default function AnalyzePipeline({
  method,
}: {
  method: keyof typeof analyzeDescriptions;
}) {
  const [files, setFiles] = useState<File[] | undefined>();

  const handleDrop = (inputFiles: File[]) => {
    console.log(inputFiles);
    setFiles(inputFiles);
  };

  return (
    <>
      <div className="flex justify-evenly">
        <div className="flex gap-2">
          <InputOutputCard className="box-border p-1 !w-60 !h-80">
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
          <InputOutputCard className="box-border p-1 !w-60 !h-80">
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
        </div>
        <ArrowRightLg className="text-accent self-center -translate-y-8" />

        <div>
          <InputOutputCard className="relative overflow-hidden !w-120 !h-80">
            <Image
              src={OutputFingerprintImage}
              alt=""
              className="absolute inline-block opacity-20 left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2"
            />
            <p className="text-[#4E4E4E] absolute bottom-4 left-1/2 -translate-x-1/2 text-nowrap">
              Matched image will popup there
            </p>
          </InputOutputCard>

          <div className="mt-4 flex justify-between gap-8">
            <div className="w-full space-y-2">
              <Button className="text-primary w-full">
                <NoteSearch className="inline" /> analyze
              </Button>
              <PipelineSelect
                name={feature.name}
                items={feature.items}
                value={method}
              />
            </div>
            <p>00:32</p>
          </div>
        </div>
      </div>

      <p className="text-xs text-accent text-justify absolute bottom-10">
        {analyzeDescriptions[method]}
      </p>
    </>
  );
}
