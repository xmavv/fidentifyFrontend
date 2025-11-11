import Card from "@/ui/card";
import Image from "next/image";
import MockFingerprint from "@/public/mock_fingerprint.png";
import { ButtonSmall } from "@/ui/button";
import { Expand, Info, RemoveMinus } from "react-coolicons";
import GlowText from "@/ui/glow-text";

export default function Fingerprint() {
  return (
    <Card>
      <div className="flex gap-2">
        <div className="flex flex-col justify-between">
          <h5>
            <GlowText>#000</GlowText>
          </h5>
          <div>
            <ButtonSmall className="block text-warn">
              <RemoveMinus className="inline w-5" />
            </ButtonSmall>
            <ButtonSmall className="block">
              <Info className="inline w-5" />
            </ButtonSmall>
            <ButtonSmall className="block">
              <Expand className="inline w-5" />
            </ButtonSmall>
          </div>
        </div>
        <Image
          src={MockFingerprint}
          alt="fingerprint"
          height={200}
          width={130}
        />
      </div>
    </Card>
  );
}
