import GlowText from "@/ui/glow-text";
import Button, { ButtonCTA } from "@/ui/button";
import CardBento from "@/ui/card-bento";
import Input from "@/ui/input";
import Log from "@/components/log/log";
import Card from "@/ui/card";

export default function Page() {
  return (
    <div>
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
      <div className={"max-w-230 grid grid-cols-11 grid-rows-3 gap-1"}>
        <CardBento
          imageName="account"
          title="Account."
          description="Personal information, details and statistics."
          variant="small"
          className="col-span-3"
        />
        <CardBento
          imageName="logs"
          title="Logs."
          description="See actions taken in current session."
          variant="small"
          className="col-span-3"
        />
        <CardBento
          imageName="settings"
          title="Settings."
          description="Change threshold intervals, language and logout time."
          variant="small"
          className="col-span-3"
        />
        <CardBento
          imageName="recognize"
          title="Recognize."
          description="Identify fingerprint across database with AI."
          className="col-span-5"
        />
        <CardBento
          imageName="analyze"
          title="Analyze."
          description="Compare fingerprints with FLANN and minutiae."
          className="col-span-5"
        />
        <CardBento
          imageName="utilities"
          title="Utilities."
          description="Different methods for fingerprint enhancment."
          variant="small"
          className="col-span-3"
        />
        <CardBento
          imageName="database"
          title="Database."
          description="Display, delete or add new fingerprints."
          variant="small"
          className="col-span-3"
        />
        <CardBento
          imageName="history"
          title="History."
          description="See your matching, compares and results."
          className="col-span-5"
        />
      </div>
    </div>
  );
}
