"use client";

import type { ReactNode } from "react";
import { createContext, useContext } from "react";
import type { DropEvent, DropzoneOptions, FileRejection } from "react-dropzone";
import { useDropzone } from "react-dropzone";
import { Button } from "@/shadcn/button";
import { cn } from "@/lib/utils";
import { FileUpload } from "react-coolicons";
import GlowText from "@/ui/glow-text";

type DropzoneContextType = {
  src?: File[];
  accept?: DropzoneOptions["accept"];
  maxSize?: DropzoneOptions["maxSize"];
  minSize?: DropzoneOptions["minSize"];
  maxFiles?: DropzoneOptions["maxFiles"];
  isDragActive?: boolean;
};

const renderBytes = (bytes: number) => {
  const units = ["B", "KB", "MB", "GB", "TB", "PB"];
  let size = bytes;
  let unitIndex = 0;

  while (size >= 1024 && unitIndex < units.length - 1) {
    size /= 1024;
    unitIndex++;
  }

  return `${size.toFixed(2)}${units[unitIndex]}`;
};

const DropzoneContext = createContext<DropzoneContextType | undefined>(
  undefined,
);

export type DropzoneProps = Omit<DropzoneOptions, "onDrop"> & {
  src?: File[];
  className?: string;
  onDrop?: (
    acceptedFiles: File[],
    fileRejections: FileRejection[],
    event: DropEvent,
  ) => void;
  children?: ReactNode;
};

export const Dropzone = ({
  accept,
  maxFiles = 1,
  maxSize,
  minSize,
  onDrop,
  onError,
  disabled,
  src,
  className,
  children,
  ...props
}: DropzoneProps) => {
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept,
    maxFiles,
    maxSize,
    minSize,
    onError,
    disabled,
    onDrop: (acceptedFiles, fileRejections, event) => {
      if (fileRejections.length > 0) {
        const message = fileRejections.at(0)?.errors.at(0)?.message;
        onError?.(new Error(message));
        return;
      }

      onDrop?.(acceptedFiles, fileRejections, event);
    },
    ...props,
  });

  return (
    <DropzoneContext.Provider
      key={JSON.stringify(src)}
      value={{ src, accept, maxSize, minSize, maxFiles, isDragActive }}
    >
      <Button
        className={cn(
          "relative h-auto w-full flex-col overflow-hidden p-8 bg-gradient-dark",
          isDragActive && "bg-[#222222]",
          className,
        )}
        disabled={disabled}
        type="button"
        variant="default"
        {...getRootProps()}
      >
        <input {...getInputProps()} disabled={disabled} />
        {children}
      </Button>
    </DropzoneContext.Provider>
  );
};

const useDropzoneContext = () => {
  const context = useContext(DropzoneContext);

  if (!context) {
    throw new Error("useDropzoneContext must be used within a Dropzone");
  }

  return context;
};

export type DropzoneContentProps = {
  children?: ReactNode;
  className?: string;
};

const maxLabelItems = 3;

export const DropzoneContent = ({
  children,
  className,
}: DropzoneContentProps) => {
  const { src } = useDropzoneContext();

  if (!src) {
    return null;
  }

  if (children) {
    return children;
  }

  return (
    <div className={cn("flex flex-col items-center justify-center", className)}>
      <div className="flex size-8 items-center justify-center rounded-md">
        <FileUpload className="w-5" />
      </div>
      <p className="my-2 w-full truncate font-medium">
        {src.length > maxLabelItems
          ? `${new Intl.ListFormat("en").format(
              src.slice(0, maxLabelItems).map((file) => file.name),
            )} and ${src.length - maxLabelItems} more`
          : new Intl.ListFormat("en").format(src.map((file) => file.name))}
      </p>
      <p className="w-full text-wrap">Drag and drop or click to replace</p>
    </div>
  );
};

export type DropzoneEmptyStateProps = {
  children?: ReactNode;
  className?: string;
};

export const DropzoneEmptyState = ({
  children,
  className,
}: DropzoneEmptyStateProps) => {
  const { isDragActive, src, accept, maxSize, minSize, maxFiles } =
    useDropzoneContext();

  if (src) {
    return null;
  }

  if (children) {
    return children;
  }

  let caption = "";

  if (accept) {
    caption += "Accepts";
    caption += new Intl.ListFormat("en").format(Object.keys(accept));
  }

  if (minSize && maxSize) {
    caption += ` between ${renderBytes(minSize)} and ${renderBytes(maxSize)}`;
  } else if (minSize) {
    caption += ` at least ${renderBytes(minSize)}`;
  } else if (maxSize) {
    caption += ` less than ${renderBytes(maxSize)}`;
  }

  return (
    <div className={"flex flex-col items-center justify-center"}>
      <GlowText>
        <FileUpload
          style={{ width: 25, height: 25 }}
          className={`inline w-10 h-10 transition-all ${isDragActive ? "-translate-y-2 scale-110" : ""}`}
          height={15}
          width={15}
        />
      </GlowText>
      <GlowText className="text-base mb-2">Upload file</GlowText>
      <p className="w-full truncate text-wrap text-xs text-accent">
        Drag and drop or click to upload
      </p>
      <p className="w-full truncate text-wrap text-xs text-accent">
        .jpg, .png, .tiff, .bmp
      </p>
      {caption && (
        <p className="text-wrap text-accent text-xs dark:text-gray-400">
          {caption}.
        </p>
      )}
    </div>
  );
};
