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
import { History as IHistory } from "@/types/history";

export default function History({ history }: { history: IHistory }) {
  const { history: historyInfo, photos } = history;

  return (
    <Card>
      <div className="flex gap-4 items-center">
        {photos.length > 1 ? (
          <Carousel className="w-full max-w-xs h-full relative">
            <CarouselContent className="h-full text-center mx-auto">
              {photos.map((photo) => (
                <CarouselItem
                  key={photo.id}
                  className="h-full text-center mx-auto"
                >
                  <ImageZoom className="text-center w-50 h-50 mx-auto">
                    <Image
                      src={`${process.env.NEXT_PUBLIC_API_BASE_URL}/images/${photo.photo_path}`}
                      alt="history entry"
                      className="rounded-2xl inline-block"
                      unoptimized
                      fill
                      style={{ objectFit: "cover" }}
                    />
                  </ImageZoom>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="absolute left-0" />
            <CarouselNext className="absolute left-[90%]" />
          </Carousel>
        ) : (
          <ImageZoom className="text-center w-100 h-50">
            <Image
              src={`${process.env.NEXT_PUBLIC_API_BASE_URL}/${photos[0].photo_path}`}
              alt="history entry"
              className="rounded-2xl inline-block"
              unoptimized
              fill
              style={{ objectFit: "cover" }}
            />
          </ImageZoom>
        )}
        <div className="space-y-10">
          <div className="flex justify-between">
            <div>
              <h4 className="text-4xl">
                <GlowText>{historyInfo.uuid.slice(0, 10)}</GlowText>
              </h4>
              <p className="font-medium text-primary-2 text-start capitalize">
                {historyInfo.method}
              </p>
            </div>
            <div>
              {historyInfo?.success_percent && (
                <HistoryPercent
                  matchNumber={
                    Number(historyInfo.success_percent.toFixed(2)) * 100
                  }
                />
              )}
            </div>
          </div>

          <div className="flex gap-40 items-end">
            <div className="flex gap-8 items-start text-start flex-wrap">
              <div>
                <p className="mb-2">{historyInfo.created_at.split("T")[0]}</p>
                <p>{historyInfo.location}</p>
                <p className="text-accent">
                  {historyInfo.geolocation_lat}, {historyInfo.geolocation_long}
                </p>
              </div>
              <div className="border-l border-[#333333] pl-3">
                <p className="mb-2">{historyInfo.os}</p>
                <p>{historyInfo.browser}</p>
                <p className="text-accent">{historyInfo.ip}</p>
              </div>
              <div className="border-l border-[#333333] pl-3">
                <p className="mb-2">{historyInfo.size} KB</p>
                <p>{historyInfo.duration} s</p>
              </div>
            </div>
            <div className="flex flex-col flex-wrap gap-3">
              {/*<ButtonSmall>*/}
              {/*  <Download className="inline w-5" />*/}
              {/*</ButtonSmall>*/}
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
