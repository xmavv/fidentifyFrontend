import Header from "@/ui/header";
import { Ruler } from "react-coolicons";
import Pipeline from "@/components/pipeline/pipeline";
import { utilsDescriptions } from "@/constants/utilities";

export default async function Page({
  params,
}: {
  params: Promise<{ enhancer: keyof typeof utilsDescriptions }>;
}) {
  const { enhancer } = await params;

  return (
    <div>
      <Header>
        <Ruler /> utilities
      </Header>

      {Object.keys(utilsDescriptions).includes(enhancer) ? (
        <Pipeline
          description={utilsDescriptions[enhancer]}
          cta={
            <span>
              <Ruler className="inline" /> enhance
            </span>
          }
          selectable={true}
        />
      ) : (
        <div>
          <h3>This method does not exist</h3>
        </div>
      )}
    </div>
  );
}
