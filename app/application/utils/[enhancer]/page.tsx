import Header from "@/ui/header";
import { Ruler } from "react-coolicons";
import Pipeline from "@/components/pipeline/pipeline";
import { utilsDescriptions } from "@/constants/utilities";
import UtilsPipeline from "@/components/utils/utils-pipeline";

export default async function Page({
  params,
}: {
  params: Promise<{ enhancer: keyof typeof utilsDescriptions }>;
}) {
  const { enhancer } = await params;

  if (!Object.keys(utilsDescriptions).includes(enhancer))
    return (
      <div>
        <h3>This method does not exist</h3>
      </div>
    );

  return (
    <div className="relative h-full">
      <Header>
        <Ruler /> utilities
      </Header>

      <UtilsPipeline enhancer={enhancer} />
    </div>
  );
}
