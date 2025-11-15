"use client";

import InputOutputCard from "@/ui/input-output-card";
import { ArrowRightLg } from "react-coolicons";
import Image from "next/image";
import OutputFingerprintImage from "@/public/fingerprint_output.png";
import Button from "@/ui/button";
import { ReactNode, useState } from "react";
import PipelineSelect from "@/components/pipeline/pipeline-select";
import {
  Comparison,
  ComparisonHandle,
  ComparisonItem,
} from "@/components/ui/shadcn-io/comparison";
import {
  Dropzone as DropzoneShadcn,
  DropzoneContent,
  DropzoneEmptyState,
} from "@/components/ui/shadcn-io/dropzone";

interface PipelineProps {
  wide?: boolean;
  method?: { name: string; items: string[] };
  isComparable?: boolean;
  value?: string;
  description?: string;
  cta: ReactNode;
}

export default function Pipeline({
  wide = false,
  method = { name: "", items: [] },
  isComparable = false,
  value = "",
  description = "",
  cta,
}: PipelineProps) {
  const [files, setFiles] = useState<File[] | undefined>();

  const handleDrop = (inputFiles: File[]) => {
    console.log(inputFiles);
  };

  return (
    <>
      <div className="flex justify-evenly">
        <div className="flex gap-2">
          <InputOutputCard
            className={`box-border p-1 ${wide ? "!w-60 !h-80" : ""}`}
          >
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
          {wide && (
            <InputOutputCard
              className={`box-border p-1 ${wide ? "!w-60 !h-80" : ""}`}
            >
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
          )}
        </div>
        <ArrowRightLg className="text-accent self-center -translate-y-8" />

        <div>
          {/*  py-8 px-4  pointer-events-none*/}
          <InputOutputCard
            className={`overflow-hidden ${wide ? "!w-120 !h-80" : ""}`}
          >
            <div className="flex gap-2 justify-center items-center h-full mx-auto">
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

              {/*<Image*/}
              {/*  src={OutputFingerprintImage}*/}
              {/*  alt=""*/}
              {/*  className="h-3/5 w-4/5 inline-block opacity-20"*/}
              {/*/>*/}
              {/*{wide && (*/}
              {/*  <Image*/}
              {/*    src={OutputFingerprintImage}*/}
              {/*    alt=""*/}
              {/*    className="h-3/5 w-4/5 inline-block opacity-20"*/}
              {/*  />*/}
              {/*)}*/}
            </div>
            <p className="text-[#4E4E4E] absolute bottom-4 left-1/2 -translate-x-1/2 text-nowrap">
              Matched image will popup there
            </p>
          </InputOutputCard>

          <div className="mt-4 flex justify-between gap-8">
            <div className="w-full space-y-2">
              <Button className="text-primary w-full">{cta}</Button>
              {method.items.length !== 0 && (
                <PipelineSelect
                  name={method.name}
                  items={method.items}
                  value={value}
                />
              )}
            </div>
            <p>00:32</p>
          </div>
        </div>
      </div>

      <p className="text-xs text-accent text-justify absolute bottom-10">
        {description}
      </p>
    </>
  );
}
