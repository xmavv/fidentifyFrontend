import Header from "@/ui/header";
import { Settings } from "react-coolicons";
import Card from "@/ui/card";
import CardThreshold from "@/components/settings/card-threshold";
import CardLanguage from "@/components/settings/card-language";
import CardTimeout from "@/components/settings/card-timeout";

export default function Page() {
  return (
    <div>
      <Header>
        <Settings /> settings
      </Header>

      <div className="space-y-6">
        <Card className="w-full">
          <CardThreshold />
        </Card>
        <Card className="w-full">
          <CardLanguage />
        </Card>
        <Card className="w-full">
          <CardTimeout />
        </Card>
      </div>
    </div>
  );
}
