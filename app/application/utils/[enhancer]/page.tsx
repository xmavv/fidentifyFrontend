import Header from "@/ui/header";
import { Ruler } from "react-coolicons";
import Pipeline from "@/components/pipeline/pipeline";
import { utilsDescriptions } from "@/constants/utilities";

const feature = {
  name: "utils",
  items: ["orientation", "gabor", "skeletonize", "minutiae", "singularity"],
};

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

      <Pipeline
        method={feature}
        value={enhancer}
        description={utilsDescriptions[enhancer]}
        cta={
          <span>
            <Ruler className="inline" /> enhance
          </span>
        }
      />
    </div>
  );
}
