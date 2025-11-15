import Header from "@/ui/header";
import IconRecognize from "@/ui/icons/icon-recognize";
import RecognizePipeline from "@/components/recognize/recognize-pipeline";

export default function Page() {
  return (
    <div className="relative h-full">
      <Header>
        <IconRecognize /> recognize
      </Header>

      <RecognizePipeline />
    </div>
  );
}
