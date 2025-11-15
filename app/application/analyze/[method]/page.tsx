import { NoteSearch } from "react-coolicons";
import Header from "@/ui/header";
import Pipeline from "@/components/pipeline/pipeline";
import { analyzeDescriptions } from "@/constants/analyze";

const feature = { name: "analyze", items: ["flann"] };

export default async function Page({
  params,
}: {
  params: Promise<{ method: keyof typeof analyzeDescriptions }>;
}) {
  const { method } = await params;

  if (!Object.keys(analyzeDescriptions).includes(method))
    return (
      <div>
        <h3>This method does not exist</h3>
      </div>
    );

  return (
    <div className="relative h-full">
      <Header>
        <NoteSearch /> analyze
      </Header>

      <Pipeline
        method={feature}
        value={method}
        wide
        description={analyzeDescriptions[method]}
        cta={
          <span>
            <NoteSearch className="inline" /> analyze
          </span>
        }
      />
    </div>
  );
}
