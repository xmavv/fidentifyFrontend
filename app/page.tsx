import GlowText from "@/ui/glow-text";
import Button, { ButtonCTA } from "@/ui/button";
import Input from "@/ui/input";
import Log from "@/components/logs/log";
import Card from "@/ui/card";
import Setting from "@/components/settings/setting";

export default function Page() {
  return (
    <div>
      <Setting label="database creations" value="4" />
      <Setting label="database creations" value="4" />
      <Setting label="database creations" value="4" />
      <Log
        log={{
          label: "new-match",
          entity: "#574",
          time: "15:46",
          date: "27-05-2025",
        }}
      />
      <ButtonCTA>xd</ButtonCTA>
      <Input label="email" type="email" />
      <GlowText className="text-primary">siemka</GlowText>
      <Button className="text-warn">xd</Button>
      <Card>
        <p>siema</p>
      </Card>
    </div>
  );
}
