"use client"; //for uuid from useAuth, timer, and localStorage read

import Logo from "@/ui/logo";
import Image from "next/image";
import { TimerClose } from "react-coolicons";
import LogoSmall from "@/public/logo_small.png";
import { useAuth } from "@/contexts/auth";

export default function HeaderNav() {
  const { user } = useAuth();

  return (
    <div>
      <Logo />
      <div className="flex justify-between font-extralight leading-4 mt-1">
        <p>
          <Image
            src={LogoSmall}
            alt=""
            width={15}
            height={15}
            className="inline -mr-1 -translate-y-[1px]"
          />{" "}
          {user.uuid}
        </p>
        <div className="text-right">
          <p>55:55</p>
          <p className="text-warn font-light">
            <TimerClose className="stroke-4 size-4 inline -translate-y-[2px]" />{" "}
            00:00
          </p>
        </div>
      </div>
    </div>
  );
}
