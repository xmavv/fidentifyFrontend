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
import FingerprintAnimation from "@/public/fingerprint_animation.gif";
import OutputFingerprintImage from "@/public/fingerprint_output.png";
import { useEffect, useState, useTransition } from "react";
import { recognize } from "@/services/actions";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/shadcn/carousel";
import { ImageZoom } from "@/components/ui/shadcn-io/image-zoom";
import { convertTiff } from "@/services/utils";
import { displayDuration } from "@/lib/utils";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/shadcn/alert-dialog";
import Card from "@/ui/card";
const recognizeDescription =
  "Siamese AI model for fingerprint matching. The Siamese model is trained in a way that the dot product of two such vectors will return the similarity of the corresponding fingerprints. The trained model managed to match 8188 test fingerprints (never been seen while training) to 1000 unique test fingerprints with roughly 98% accuracy.";

export default function RecognizePipeline() {
  const [isPending, startTransition] = useTransition();
  const [inputFile, setInputFile] = useState<{ file: File; url: string }>();
  //TODO: MOVE THIS INTERFACE TO ITS OWN TYPE TO USE IT IN THE ACTION ALSO
  const [outputFiles, setOutputFiles] = useState<
    { match: number; name: string }[]
  >([]);
  const [error, setError] = useState("HALO DZIALA TO");

  //TEN TIMER TO NA PEWNO DO INNEGO COMPONENTU BO ON POWODUJE ZE CALY TEN COMPOENNT SIE RE-RENDERUJE CALY CZAS
  //WIEC ALBO TO, ALBO ROBIMY TUTAJ MEMO

  //FAJNY BYL BY TU REDUCER...
  //DUZO STATEOW KTORE OD SIEBIE ZALEZA
  //POROBIC MNIEJSZE COMPONENTY BO TO JUZ ZA DUZO TUTAJ
  //w sumie mozna uzyc tutaj tego patterny compound compoentn
  //no bo np ten arrow to pasuje tylko jakby do tego pipelinu
  //i mozna w ogole wtedy context zrobic na gorze i te componenty beda sie ladnie renderowac
  //na bazie tego co jest w contexcie
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

    // startTransition(async () => {
    //   async function mock() {
    //     return new Promise((res, rej) => {
    //       setTimeout(() => {
    //         res("");
    //       }, 7000);
    //     });
    //   }
    //
    //   const matchedFingerprints = await mock();
    //
    //   setOutputFiles([
    //     {
    //       match: 0.9770797491073608,
    //       name: "static\\fingerprints\\19f13c39-4b1e-489d-9fa9-adf2b06c93c4_571__F_Left_ring_finger.BMP",
    //     },
    //     {
    //       match: 0.9753514528274536,
    //       name: "static\\fingerprints\\9499bf02-5800-4d0e-bb05-d908acb44e80_571__F_Left_thumb_finger.BMP",
    //     },
    //     {
    //       match: 0.9746785759925842,
    //       name: "static\\fingerprints\\db3cc7ec-9b50-4caa-92da-08c05328173b_406__M_Left_index_finger.BMP",
    //     },
    //   ]);
    // });

    const interval = setInterval(() => {
      setDuration((duration) => duration + 1);
    }, 1000);

    startTransition(async () => {
      const matchedFingerprints = await recognize(inputFile?.file);
      if (matchedFingerprints.detail) {
        setError(matchedFingerprints.detail);
        clearInterval(interval);
        return;
      }

      setOutputFiles(matchedFingerprints);
      clearInterval(interval);
    });
  }

  function resetInputFile() {
    setInputFile(undefined);
    setOutputFiles([]);
    setDuration(0);
  }

  return (
    <>
      <AlertDialog open={!!error}>
        <AlertDialogContent
          style={{
            border: "none",
            padding: 0,
          }}
        >
          <Card>
            <AlertDialogHeader>
              <AlertDialogTitle>{error}</AlertDialogTitle>
              <AlertDialogDescription className="text-accent">
                <p>An error occurred and pipeline did not run properly.</p>
                <p>
                  Please read error information and try again with different
                  image.{" "}
                </p>
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <Button
                className="text-instruction py-2 px-8"
                onClick={() => setError("")}
              >
                Continue
              </Button>
            </AlertDialogFooter>
          </Card>
        </AlertDialogContent>
      </AlertDialog>

      <div className="flex justify-evenly">
        <InputOutputCard className="box-border p-1">
          {inputFile?.url ? (
            <div
              className="group relative w-full h-full animate-in fade-in duration-500"
              onClick={resetInputFile}
            >
              <Image
                src={inputFile.url}
                alt="input fingerprint"
                fill
                style={{ objectFit: "cover" }}
              />
              <div className="pointer-events-none absolute transition-opacity opacity-0 group-hover:opacity-80 inset-0 bg-black grid place-items-center">
                <span>Click to reset input image</span>
              </div>
            </div>
          ) : (
            <DropzoneShadcn
              accept={{
                "image/jpeg": [".jpg", ".jpeg"],
                "image/png": [".png"],
                "image/tiff": [".tiff", ".tif"],
                "image/bmp": [".bmp"],
              }}
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

        <ArrowRightLg
          className={`text-accent self-center -translate-y-8 drop-shadow-none
        ${outputFiles.length > 0 || isPending ? `drop-shadow-[-4px_0_5px_var(--primary)] text-primary ${!isPending ? "" : "animate-left-right"}` : ""}
        transition-all duration-2000`}
        />

        <div>
          <InputOutputCard className={`relative overflow-hidden`}>
            {outputFiles.length > 0 ? (
              <Carousel className="w-full h-full relative animate-in fade-in duration-500">
                <CarouselContent className="h-full w-full">
                  {outputFiles.map((file, i) => (
                    <CarouselItem key={file.name} className="h-full w-full">
                      <ImageZoom className="text-center w-full h-full">
                        <div className="relative w-93 h-124">
                          <Image
                            src={`${process.env.NEXT_PUBLIC_API_BASE_URL}/images/${file.name}`}
                            alt={`output fingerprint image number ${i}`}
                            className="inline-block"
                            fill
                            style={{
                              objectFit: "fill",
                            }}
                            unoptimized
                          />
                          {/*<a*/}
                          {/*  href={`${process.env.NEXT_PUBLIC_API_BASE_URL}/${file.name}`}*/}
                          {/*  download*/}
                          {/*  className="absolute bottom-8 left-2 text-red-500"*/}
                          {/*>*/}
                          {/*  POBIERZ*/}
                          {/*</a>*/}
                        </div>
                      </ImageZoom>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious
                  className="absolute left-0"
                  style={{ backgroundColor: "black" }}
                />
                <CarouselNext
                  className="absolute left-[90%]"
                  style={{ backgroundColor: "black" }}
                />
              </Carousel>
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
                disabled={outputFiles.length > 0 || !inputFile || isPending}
              >
                <IconRecognize className="inline" /> recognize
              </Button>
            </div>
            <p>{displayDuration(duration)}</p>
          </div>
        </div>
      </div>

      <p className="text-xs text-accent text-justify absolute bottom-10">
        {recognizeDescription}
      </p>
    </>
  );
}
