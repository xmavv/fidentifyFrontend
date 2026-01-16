"use client";

import IconRecognize from "@/ui/icons/icon-recognize";
import InputOutputCard from "@/ui/input-output-card";
import {
  Dropzone as DropzoneShadcn,
  DropzoneContent,
  DropzoneEmptyState,
} from "@/components/ui/shadcn-io/dropzone";
import Image from "next/image";
import Button from "@/ui/button";
import FingerprintAnimation from "@/public/fingerprint_animation.gif";
import OutputFingerprintImage from "@/public/fingerprint_output.png";
import { useState, useTransition } from "react";
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
import Alert from "@/ui/alert";
import IndicatorArrow from "@/components/pipeline/indicator-arrow";
import PipelineInput, { InputFile } from "@/components/pipeline/pipeline-input";
import { useAuth } from "@/contexts/auth";
import GlowText from "@/ui/glow-text";
const recognizeDescription =
  "Siamese AI model for fingerprint matching. The Siamese model is trained in a way that the dot product of two such vectors will return the similarity of the corresponding fingerprints. The trained model managed to match 8188 test fingerprints (never been seen while training) to 1000 unique test fingerprints with roughly 98% accuracy.";

function renderGlowPercentMatch(match: number) {
  const fixedNumber = Number(match.toFixed(2)) * 100;

  let colorClassName = "";
  if (fixedNumber < 34) colorClassName = "text-warn";
  else if (fixedNumber < 67) colorClassName = "text-instruction";
  else colorClassName = "text-success";

  return <GlowText className={colorClassName}>{fixedNumber}%</GlowText>;
}

export default function RecognizePipeline() {
  const { user, isLoadingUserInfo } = useAuth();
  const [isPending, startTransition] = useTransition();
  const [inputFile, setInputFile] = useState<InputFile>();
  const [outputFiles, setOutputFiles] = useState<
    { match: number; name: string }[]
  >([]);
  const [error, setError] = useState("");

  //TEN TIMER TO NA PEWNO DO INNEGO COMPONENTU BO ON POWODUJE ZE CALY TEN COMPOENNT SIE RE-RENDERUJE CALY CZAS
  //WIEC ALBO TO, ALBO ROBIMY TUTAJ MEMO

  //FAJNY BYL BY TU REDUCER...
  //DUZO STATEOW KTORE OD SIEBIE ZALEZA
  //POROBIC MNIEJSZE COMPONENTY BO TO JUZ ZA DUZO TUTAJ
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
      const matchedFingerprints = await recognize(inputFile?.file, user);
      if (matchedFingerprints.detail) {
        if (Array.isArray(matchedFingerprints.detail))
          setError(matchedFingerprints.detail[0].msg);
        else setError(matchedFingerprints.detail);

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

        <IndicatorArrow
          isLoading={isPending}
          finished={outputFiles.length > 0}
        />

        <div>
          <InputOutputCard className={`relative overflow-hidden`}>
            {outputFiles.length > 0 ? (
              <Carousel className="w-full h-full relative animate-in fade-in duration-500">
                <CarouselContent className="h-full w-full">
                  {outputFiles.map((file, i) => (
                    <CarouselItem key={file.name} className="h-full w-full">
                      <ImageZoom className="text-center w-full h-full">
                        <div className="relative group w-[110%] h-full">
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
                          <div className="pointer-events-none absolute transition-opacity opacity-0 group-hover:opacity-80 inset-0 bg-black grid place-items-center">
                            <span className="absolute grid place-items-center text-5xl text-accent text-nowrap">
                              {/*{file.name.split("fingerprints")[1].slice(1, 12)}*/}
                              {file.name.slice(file.name.length - 15)}
                            </span>
                            <span className="absolute grid place-items-center text-lg">
                              {renderGlowPercentMatch(file.match)}
                            </span>
                            <span className="absolute bottom-5 text-accent">
                              {file.name.split("\\").pop()}
                            </span>
                          </div>
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
                disabled={
                  outputFiles.length > 0 ||
                  !inputFile ||
                  isPending ||
                  isLoadingUserInfo
                }
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
