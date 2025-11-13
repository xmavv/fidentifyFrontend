import InputOutputCard from "@/ui/input-output-card";
import Dropzone from "@/ui/dropzone";
import { ArrowRightLg } from "react-coolicons";
import Image from "next/image";
import OutputFingerprintImage from "@/public/fingerprint_output.png";
import Button from "@/ui/button";
import { ReactNode } from "react";

interface PipelineProps {
  inputClass?: string;
  outputClass?: string;
  selectable?: boolean;
  description?: string;
  cta: ReactNode;
}

export default function Pipeline({
  inputClass = "",
  outputClass = "",
  selectable = false,
  description = "",
  cta,
}: PipelineProps) {
  return (
    <>
      <div className="flex justify-evenly">
        <InputOutputCard className={`box-border p-1 ${inputClass}`}>
          <Dropzone />
        </InputOutputCard>

        <ArrowRightLg className="text-accent self-center -translate-y-8" />

        <div>
          <InputOutputCard
            className={`py-8 px-4 pointer-events-none ${outputClass}`}
          >
            <Image
              src={OutputFingerprintImage}
              alt=""
              className="inline-block text-center opacity-20 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            />
            <p className="text-[#4E4E4E] absolute bottom-4 left-1/2 -translate-x-1/2 text-nowrap">
              Matched image will popup there
            </p>
          </InputOutputCard>

          <div className="mt-4 flex justify-between items-center gap-8">
            <Button className="text-primary w-full">{cta}</Button>
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
