import {
  Dropzone as DropzoneShadcn,
  DropzoneContent,
  DropzoneEmptyState,
} from "@/components/ui/shadcn-io/dropzone";

export default function Dropzone() {
  return (
    <DropzoneShadcn className="h-full rounded-none border-none">
      <DropzoneEmptyState />
      <DropzoneContent />
    </DropzoneShadcn>
  );
}
