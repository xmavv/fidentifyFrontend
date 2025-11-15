import InputOutputCard from "@/ui/input-output-card";
import Dropzone from "@/ui/dropzone";
import { ArrowRightLg } from "react-coolicons";
import Image from "next/image";
import OutputFingerprintImage from "@/public/fingerprint_output.png";
import Button from "@/ui/button";
import { ReactNode } from "react";
import PipelineSelect from "@/components/pipeline/pipeline-select";

interface PipelineProps {
  wide?: boolean;
  method?: { name: string; items: string[] };
  value?: string;
  description?: string;
  cta: ReactNode;
}

export default function Pipeline({
  wide = false,
  method = { name: "", items: [] },
  value = "",
  description = "",
  cta,
}: PipelineProps) {
  return (
    <>
      <div className="flex justify-evenly">
        <div className="flex gap-2">
          <InputOutputCard
            className={`box-border p-1 ${wide ? "!w-60 !h-80" : ""}`}
          >
            <Dropzone />
          </InputOutputCard>
          {wide && (
            <InputOutputCard
              className={`box-border p-1 ${wide ? "!w-60 !h-80" : ""}`}
            >
              <Dropzone />
            </InputOutputCard>
          )}
        </div>
        <ArrowRightLg className="text-accent self-center -translate-y-8" />

        <div>
          <InputOutputCard
            className={`py-8 px-4 pointer-events-none overflow-hidden ${wide ? "!w-120 !h-80" : ""}`}
          >
            <div className="flex gap-2 justify-center items-center h-full w-4/5 mx-auto">
              <Image
                src={OutputFingerprintImage}
                alt=""
                className="h-3/5 w-4/5 inline-block opacity-20"
              />
              {wide && (
                <Image
                  src={OutputFingerprintImage}
                  alt=""
                  className="h-3/5 w-4/5 inline-block opacity-20"
                />
              )}
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
