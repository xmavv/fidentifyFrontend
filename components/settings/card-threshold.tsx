import Input from "@/ui/input";
import GlowText from "@/ui/glow-text";
import { RemoveMinus } from "react-coolicons";

export default function CardThreshold() {
  return (
    <div className="flex justify-between">
      <div>
        <h4 className="inline mr-1">Threshold.</h4>
        <p className="inline text-xs text-[#5A5A5A]">
          Change percentage intervals.
        </p>
      </div>

      <div className="space-y-4">
        <div>
          <Input className="w-15" label="%" defaultValue={0} />
          <span className="text-accent">
            <RemoveMinus className="inline mx-1" />
          </span>
          <Input className="w-15" label="%" />
          <GlowText className="text-warn ml-4">34%</GlowText>
        </div>

        <div>
          <Input className="w-15" label="%" />
          <span className="text-accent">
            <RemoveMinus className="inline mx-1" />
          </span>
          <Input className="w-15" label="%" />
          {/*weird behaviour with text-info*/}
          {/*this is caused because "info" is before "inherit" alphabetical*/}
          {/*and then when tailwind compute classes my created class "text-info"*/}
          {/*is before "text-inherit", thats why "text-inherit" is used instead*/}
          {/*and of course this is happening because we are setting two classes*/}
          {/*on GlowText component instance, then one declared lower is used*/}
          <GlowText className="text-instruction ml-4">57%</GlowText>
        </div>

        <div>
          <Input className="w-15" label="%" />
          <span className="text-accent">
            <RemoveMinus className="inline mx-1" />
          </span>
          <Input className="w-15" label="%" defaultValue={100} />
          <GlowText className="text-success ml-4">97%</GlowText>
        </div>
      </div>
    </div>
  );
}
