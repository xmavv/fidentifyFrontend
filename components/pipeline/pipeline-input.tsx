import Image from "next/image";
import {
  Dropzone as DropzoneShadcn,
  DropzoneContent,
  DropzoneEmptyState,
} from "@/components/ui/shadcn-io/dropzone";
import InputOutputCard from "@/ui/input-output-card";

export interface InputFile {
  file: File;
  url: string;
}

interface PipelineInputProps {
  inputFile: InputFile | undefined;
  onReset: () => void;
  onDrop: (files: File[]) => void;
  className?: string;
}

export default function PipelineInput({
  inputFile,
  onReset,
  onDrop,
  className = "",
}: PipelineInputProps) {
  return (
    <InputOutputCard className={`box-border p-1 ${className}`}>
      {inputFile?.url ? (
        <div
          className="group relative w-full h-full animate-in fade-in duration-500"
          onClick={onReset}
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
          onDrop={onDrop}
          onError={console.error}
          className="h-full rounded-none border-none"
        >
          <DropzoneEmptyState />
          <DropzoneContent />
        </DropzoneShadcn>
      )}
    </InputOutputCard>
  );
}
