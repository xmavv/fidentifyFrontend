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
import { recognize } from "@/services/actions";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/shadcn/carousel";
import { ImageZoom } from "@/components/ui/shadcn-io/image-zoom";
import MockHistoryImage from "@/public/mock_flann.png";
const recognizeDescription =
  "Siamese AI model for fingerprint matching. The Siamese model is trained in a way that the dot product of two such vectors will return the similarity of the corresponding fingerprints. The trained model managed to match 8188 test fingerprints (never been seen while training) to 1000 unique test fingerprints with roughly 98% accuracy.";

export default function RecognizePipeline() {
  const [inputFiles, setInputFiles] = useState<File[] | undefined>();
  //TODO: MOVE THIS INTERFACE TO ITS OWN TYPE TO USE IT IN THE ACTION ALSO
  const [outputFiles, setOutputFiles] = useState<
    { match: number; name: string }[]
  >([
    {
      match: 0.9770797491073608,
      name: "static\\fingerprints\\19f13c39-4b1e-489d-9fa9-adf2b06c93c4_571__F_Left_ring_finger.BMP",
    },
    {
      match: 0.9753514528274536,
      name: "static\\fingerprints\\9499bf02-5800-4d0e-bb05-d908acb44e80_571__F_Left_thumb_finger.BMP",
    },
    {
      match: 0.9746785759925842,
      name: "static\\fingerprints\\db3cc7ec-9b50-4caa-92da-08c05328173b_406__M_Left_index_finger.BMP",
    },
  ]);
  const filePath = inputFiles ? URL.createObjectURL(inputFiles[0]) : "";

  const handleDrop = (inputFiles: File[]) => {
    setInputFiles(inputFiles);
  };

  async function handleSubmit() {
    if (!inputFiles || inputFiles.length < 1) return;
    const matchedFingerprints = await recognize(inputFiles[0]);
    setOutputFiles(matchedFingerprints);
  }

  return (
    <>
      <div className="flex justify-evenly">
        <InputOutputCard className="box-border p-1">
          {filePath ? (
            <div
              className="group relative w-full h-full animate-in fade-in duration-500"
              onClick={() => setInputFiles(undefined)}
            >
              <Image
                src={filePath}
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
            {outputFiles.length > 0 ? (
              <Carousel className="w-full max-w-xs h-full relative">
                <CarouselContent className="h-full w-full">
                  {outputFiles.map((file, i) => (
                    <CarouselItem key={file.name} className="h-full w-full">
                      <ImageZoom className="text-center w-full h-full">
                        <div className="relative w-30 h-50">
                          <Image
                            src={`${process.env.NEXT_PUBLIC_API_BASE_URL}/${file.name}`}
                            alt={`output fingerprint image number ${i}`}
                            className="inline-block"
                            fill
                            style={{ objectFit: "cover" }}
                            unoptimized
                          />
                        </div>
                      </ImageZoom>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="absolute left-0" />
                <CarouselNext className="absolute left-[90%]" />
              </Carousel>
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
          </InputOutputCard>

          <div className="mt-4 flex justify-between gap-8">
            <div className="w-full space-y-2">
              <Button className="text-primary w-full" onClick={handleSubmit}>
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
