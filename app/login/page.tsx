import ImageHero from "@/public/hero.png";
import ImageHeroActive from "@/public/hero_active.png";
import Image from "next/image";
import Logo from "@/ui/logo";
import Input from "@/ui/input";
import { ButtonCTA } from "@/ui/button";
import { login } from "@/services/auth";
import { redirect } from "next/navigation";

export default async function Page() {
  return (
    <div className="grid grid-cols-[1fr_20vw] h-screen bg-black">
      <div className="relative">
        <Image
          src={ImageHero}
          alt="hero background image"
          fill
          className="object-cover"
        />
        <Image
          src={ImageHeroActive}
          alt=""
          fill
          className="object-cover animate-pulse-blue"
        />
      </div>
      <aside className="mt-[40%]">
        <div className="text-center space-y-8">
          <Logo />
          {/*TODO: move this form to its own component*/}
          <form action={login} className="w-7/10 mx-auto space-y-18">
            <div className="space-y-6">
              <Input name="username" label="id" className="w-67" />
              <Input name="password" label="password" className="w-67" />
            </div>
            <div className="space-y-4">
              <ButtonCTA className="w-full">
                <Image
                  src="/logo_small.png"
                  alt=""
                  width={15}
                  height={15}
                  className="inline"
                />
                log in
              </ButtonCTA>
              <p className="text-xs text-left">
                this web app is only available for{" "}
                <span className="italic text-accent">certain authorities</span>,
                protected by{" "}
                <span className="italic text-accent">reCAPTCHA</span>
              </p>
            </div>
          </form>
        </div>
      </aside>
    </div>
  );
}
