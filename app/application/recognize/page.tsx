import Header from "@/ui/header";
import IconRecognize from "@/ui/icons/icon-recognize";
import Pipeline from "@/components/pipeline/pipeline";
const recognizeDescription =
  "Siamese AI model for fingerprint matching. The Siamese model is trained in a way that the dot product of two such vectors will return the similarity of the corresponding fingerprints. The trained model managed to match 8188 test fingerprints (never been seen while training) to 1000 unique test fingerprints with roughly 98% accuracy.";

export default function Page() {
  return (
    <div className="h-full relative">
      <Header>
        <IconRecognize /> recognize
      </Header>

      <Pipeline
        description={recognizeDescription}
        cta={
          <span>
            <IconRecognize className="inline" /> recognize
          </span>
        }
      />
    </div>
  );
}
