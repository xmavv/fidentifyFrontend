import Card from "@/ui/card";
import Image from "next/image";
import MockHistoryImage from "@/public/mock_flann.png";
import GlowText from "@/ui/glow-text";
import { ButtonSmall } from "@/ui/button";
import { Download, Expand, Info, RemoveMinus } from "react-coolicons";

export default function History() {
  return (
    <Card>
      <div className="flex gap-4">
        <Image
          src={MockHistoryImage}
          alt="history entry"
          width={350}
          height={170}
          className="rounded-2xl"
        />
        <div className="space-y-10">
          <div className="flex justify-between">
            <div>
              <h4 className="text-4xl">
                <GlowText>#23178421</GlowText>
              </h4>
              <p className="font-medium text-primary-2">MINUTIAE</p>
            </div>
            <div>
              <GlowText className="text-warn">34%</GlowText>
            </div>
          </div>

          <div className="flex gap-20 items-end">
            <div className="flex gap-8 items-start">
              <div>
                <p className="mb-2">05-05-2025</p>
                <p>Polska, Wroclaw</p>
                <p className="text-accent">52.5215125, 21.45214521</p>
              </div>
              <div className="border-l border-[#333333] pl-3">
                <p className="mb-2">Windows 11 Pro</p>
                <p>Mozilla Firefox</p>
                <p className="text-accent">147.271.55.7</p>
              </div>
              <div className="border-l border-[#333333] pl-3">
                <p className="mb-2">6500KB</p>
                <p>38s</p>
              </div>
            </div>
            <div className="space-x-3 ">
              <ButtonSmall>
                <Download className="inline w-5" />
              </ButtonSmall>
              <ButtonSmall>
                <Info className="inline w-5" />
              </ButtonSmall>
              <ButtonSmall className="text-warn">
                <RemoveMinus className="inline w-5" />
              </ButtonSmall>
              <ButtonSmall>
                <Expand className="inline w-5" />
              </ButtonSmall>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}
