import Card from "@/ui/card";
import Image from "next/image";
import MockHistoryImage from "@/public/mock_flann.png";
import GlowText from "@/ui/glow-text";
import { ButtonSmall } from "@/ui/button";
import { Download } from "react-coolicons";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/shadcn/carousel";
import { ImageZoom } from "@/components/ui/shadcn-io/image-zoom";
import HistoryPercent from "@/components/history/history-percent";

export default function History() {
  return (
    <Card>
      <div className="flex gap-4 items-center">
        <Carousel className="w-full max-w-xs h-full relative">
          <CarouselContent className="h-full">
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem key={index} className="h-full">
                <ImageZoom className="text-center">
                  <Image
                    src={MockHistoryImage}
                    alt="history entry"
                    className="rounded-2xl inline-block"
                  />
                </ImageZoom>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="absolute left-0" />
          <CarouselNext className="absolute left-[90%]" />
        </Carousel>
        <div className="space-y-10">
          <div className="flex justify-between">
            <div>
              <h4 className="text-4xl">
                <GlowText>#23178421</GlowText>
              </h4>
              <p className="font-medium text-primary-2 text-start">MINUTIAE</p>
            </div>
            <div>
              <HistoryPercent matchNumber={34} />
            </div>
          </div>

          <div className="flex gap-40 items-end">
            <div className="flex gap-8 items-start text-start flex-wrap">
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
            <div className="flex flex-col flex-wrap gap-3">
              <ButtonSmall>
                <Download className="inline w-5" />
              </ButtonSmall>
              {/*<ButtonSmall>*/}
              {/*  <Info className="inline w-5" />*/}
              {/*</ButtonSmall>*/}
              {/*<ButtonSmall className="text-warn">*/}
              {/*  <RemoveMinus className="inline w-5" />*/}
              {/*</ButtonSmall>*/}
              {/*<ButtonSmall>*/}
              {/*  <Expand className="inline w-5" />*/}
              {/*</ButtonSmall>*/}
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}
