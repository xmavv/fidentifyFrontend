import Header from "@/ui/header";
import { User02 } from "react-coolicons";
import Image from "next/image";
import LogoBig from "@/public/logo_big.png";
import Informations from "@/components/statistics/informations";
import Statistics from "@/components/statistics/statistics";
import Id from "@/components/statistics/id";

export default function Page() {
  return (
    <div>
      <Header>
        <User02 /> account
      </Header>

      <article className="mb-15">
        <Image src={LogoBig} alt="" width={30} height={30} className="inline" />
        <Id />
      </article>

      <div className="space-y-15">
        <section>
          <p className="text-xl text-white">Statistics</p>
          <Statistics />
        </section>

        <section>
          <p className="text-xl text-white">Information</p>
          <Informations />
        </section>
      </div>
    </div>
  );
}
