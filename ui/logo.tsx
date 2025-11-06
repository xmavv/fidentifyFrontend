import Image from "next/image";
import logo from "@/public/logo.png";

export default function Logo() {
  return (
    <Image
      className="pointer-events-none"
      src={logo}
      alt="fidentify logo"
    ></Image>
  );
}
