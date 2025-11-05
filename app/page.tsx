import GlowText from "@/components/glow-text";
import Button from "@/components/button";
import Card from "@/components/card";

export default function Page() {
  return (
    <div>
      <GlowText className="text-primary">siemka</GlowText>
      <Button className="text-warn">xd</Button>
      <div className={"max-w-230 grid grid-cols-11 grid-rows-3 gap-1"}>
        <Card
          imageName="account"
          title="Account."
          description="Personal information, details and statistics."
          variant="small"
          className="col-span-3"
        />
        <Card
          imageName="logs"
          title="Logs."
          description="See actions taken in current session."
          variant="small"
          className="col-span-3"
        />
        <Card
          imageName="settings"
          title="Settings."
          description="Change threshold intervals, language and logout time."
          variant="small"
          className="col-span-3"
        />
        <Card
          imageName="recognize"
          title="Recognize."
          description="Identify fingerprint across database with AI."
          className="col-span-5"
        />
        <Card
          imageName="analyze"
          title="Analyze."
          description="Compare fingerprints with FLANN and minutiae."
          className="col-span-5"
        />
        <Card
          imageName="utilities"
          title="Utilities."
          description="Different methods for fingerprint enhancment."
          variant="small"
          className="col-span-3"
        />
        <Card
          imageName="database"
          title="Database."
          description="Display, delete or add new fingerprints."
          variant="small"
          className="col-span-3"
        />
        <Card
          imageName="history"
          title="History."
          description="See your matching, compares and results."
          className="col-span-5"
        />
      </div>
    </div>
  );
}
