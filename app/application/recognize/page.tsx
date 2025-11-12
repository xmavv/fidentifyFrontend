import Header from "@/ui/header";
import IconRecognize from "@/ui/icons/icon-recognize";
import InputOutputCard from "@/ui/input-output-card";
import Image from "next/image";
import OutputFingerprintImage from "@/public/fingerprint_output.png";
import { ArrowRightLg } from "react-coolicons";
import Button from "@/ui/button";
import Dropzone from "@/ui/dropzone";

export default function Page() {
  return (
    <div className="h-full relative">
      <Header>
        <IconRecognize /> recognize
      </Header>

      <div className="flex justify-evenly">
        <InputOutputCard className="box-border p-1">
          <Dropzone />
        </InputOutputCard>

        <ArrowRightLg className="text-accent self-center -translate-y-8" />

        <div>
          <InputOutputCard className="py-8 px-4">
            <Image
              src={OutputFingerprintImage}
              alt=""
              className="inline-block text-center opacity-20 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            />
            <p className="text-[#4E4E4E] absolute bottom-4 left-1/2 -translate-x-1/2 text-nowrap">
              Matched image will popup there
            </p>
          </InputOutputCard>

          <div className="mt-4 flex justify-between items-center gap-8">
            <Button className="text-primary w-full">
              <IconRecognize className="inline" /> recognize
            </Button>
            <p>00:32</p>
          </div>
        </div>
      </div>

      <p className="text-xs text-accent text-justify absolute bottom-10">
        Siamese AI model for fingerprint matching. The Siamese model is trained
        in a way that the dot product of two such vectors will return the
        similarity of the corresponding fingerprints. The trained model managed
        to match 8188 test fingerprints (never been seen while training) to 1000
        unique test fingerprints with roughly 98% accuracy.
      </p>
    </div>
  );
}
