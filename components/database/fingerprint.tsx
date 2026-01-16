import Card from "@/ui/card";
import Image from "next/image";
import MockFingerprint from "@/public/mock_fingerprint.png";
import { ButtonSmall } from "@/ui/button";
import { Expand, Info, RemoveMinus } from "react-coolicons";
import GlowText from "@/ui/glow-text";
import { ImageZoom } from "@/components/ui/shadcn-io/image-zoom";
import { Fingerprint as IFinerprint } from "@/types/fingerprint";
import { display3DigitsId } from "@/lib/utils";
import { Tooltip, TooltipTrigger, TooltipContent } from "@/shadcn/tooltip";

export default function Fingerprint({
  fingerprint,
}: {
  fingerprint: IFinerprint;
}) {
  return (
    <Card>
      <div className="flex gap-2">
        <div className="flex flex-col justify-between">
          <h5>
            <GlowText>{display3DigitsId(fingerprint.id)}</GlowText>
          </h5>
          <div className="space-y-1">
            {/*<ButtonSmall className="block text-warn">*/}
            {/*  <RemoveMinus className="inline w-5" />*/}
            {/*</ButtonSmall>*/}
            <Tooltip>
              <TooltipTrigger>
                <ButtonSmall className="block" as="div">
                  <Info className="inline w-5" />
                </ButtonSmall>
              </TooltipTrigger>
              <TooltipContent>
                <p>
                  {fingerprint.created_at.split("T").join(" ").split(".")[0]}
                </p>
              </TooltipContent>
            </Tooltip>
          </div>
        </div>
        <ImageZoom className="w-30 h-30">
          <div className="w-30 h-30">
            <Image
              src={`${process.env.NEXT_PUBLIC_API_BASE_URL}/images/${fingerprint.photo_uri.slice(2)}`}
              alt="fingerprint"
              width={150}
              height={700}
              unoptimized
              className="rounded-2xl"
            />
          </div>
        </ImageZoom>
      </div>
    </Card>
  );
}
