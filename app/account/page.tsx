import Header from "@/ui/header";
import { User02 } from "react-coolicons";
import Image from "next/image";
import LogoBig from "@/public/logo_big.png";
import Statistics from "@/components/statistics/statistics";

export default function Page() {
  return (
    <div>
      <Header>
        <User02 /> account
      </Header>

      <article className="mb-15">
        <Image src={LogoBig} alt="" width={30} height={30} className="inline" />
        <span className="text-4xl align-middle text-white">IDENTYFIKATOR</span>
      </article>

      <div className="space-y-15">
        <section>
          <p className="text-xl text-white">Statistics</p>
          {Array.from({ length: 4 }, (_, i) => (
            <Statistics label="created" value={5} />
          ))}
        </section>

        <section>
          <p className="text-xl text-white">Information</p>
          {Array.from({ length: 5 }, (_, i) => (
            <Statistics label="new match" value="#42718" />
          ))}
        </section>
      </div>
    </div>
  );
}
