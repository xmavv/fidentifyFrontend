import Header from "@/ui/header";
import IconRecognize from "@/ui/icons/icon-recognize";
import Pipeline from "@/components/pipeline/pipeline";
import { utilsDescriptions } from "@/constants/utilities";

export default function Page() {
  return (
    <div className="h-full relative">
      <Header>
        <IconRecognize /> recognize
      </Header>

      <Pipeline
        description={utilsDescriptions["recognize"]}
        cta={
          <span>
            <IconRecognize className="inline" /> recognize
          </span>
        }
      />
    </div>
  );
}
