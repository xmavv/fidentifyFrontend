"use client";

import IconRecognize from "@/ui/icons/icon-recognize";
import InputOutputCard from "@/ui/input-output-card";
import {
  Dropzone as DropzoneShadcn,
  DropzoneContent,
  DropzoneEmptyState,
} from "@/components/ui/shadcn-io/dropzone";
import { ArrowRightLg } from "react-coolicons";
import Image from "next/image";
import Button from "@/ui/button";
import OutputFingerprintImage from "@/public/fingerprint_output.png";
import { useState } from "react";
const recognizeDescription =
  "Siamese AI model for fingerprint matching. The Siamese model is trained in a way that the dot product of two such vectors will return the similarity of the corresponding fingerprints. The trained model managed to match 8188 test fingerprints (never been seen while training) to 1000 unique test fingerprints with roughly 98% accuracy.";

export default function RecognizePipeline() {
  const [file, setFile] = useState<string | undefined>();

  const handleDrop = (inputFiles: File[]) => {
    console.log(inputFiles);

    const file = inputFiles[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setFile(imageUrl);
    }
  };

  return (
    <>
      <div className="flex justify-evenly">
        <InputOutputCard className="box-border p-1">
          {file ? (
            <div
              className="group relative w-full h-full animate-in fade-in duration-500"
              onClick={() => setFile("")}
            >
              <Image
                src={file}
                alt="input fingerprint"
                fill
                style={{ objectFit: "cover" }}
              />
              <div className="absolute transition-opacity opacity-0 group-hover:opacity-80 inset-0 bg-black grid place-items-center">
                <span>Click to reset input image</span>
              </div>
            </div>
          ) : (
            <DropzoneShadcn
              accept={{ image: ["jpg", "jpeg", "png", "tiff", "tif", "bmp"] }}
              maxFiles={1}
              onDrop={handleDrop}
              onError={console.error}
              className="h-full rounded-none border-none"
            >
              <DropzoneEmptyState />
              <DropzoneContent />
            </DropzoneShadcn>
          )}
        </InputOutputCard>

        <ArrowRightLg className="text-accent self-center -translate-y-8" />

        <div>
          <InputOutputCard className="relative overflow-hidden">
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
                <IconRecognize className="inline" /> recognize
              </Button>
            </div>
            <p>00:32</p>
          </div>
        </div>
      </div>

      <p className="text-xs text-accent text-justify absolute bottom-10">
        {recognizeDescription}
      </p>
    </>
  );
}
