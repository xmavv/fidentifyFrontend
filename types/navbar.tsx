import { ReactNode } from "react";
import {
  Alarm,
  Data,
  House01,
  Info,
  NoteSearch,
  Ruler,
  Settings,
  User02,
} from "react-coolicons";
import Image from "next/image";
import recognize from "@/public/icon_recognize.png";
import recognizeActive from "@/public/icon_recognize_active.png";

export interface INavLink {
  name: string;
  href: string;
  icon?: ReactNode;
  iconActive?: ReactNode;
  childLinks?: null | { name: string; href: string }[];
}

export const navLinks: INavLink[] = [
  {
    icon: <House01 />,
    name: "dashboard",
    href: "/dashboard",
    childLinks: null,
  },
  {
    icon: (
      <Image
        src={recognize}
        alt=""
        width={22}
        height={22}
        className="translate-x-[2px]"
      />
    ),
    iconActive: (
      <Image
        src={recognizeActive}
        alt=""
        width={22}
        height={22}
        className="translate-x-[2px]"
      />
    ),
    name: "recognize",
    href: "/recognize",
    childLinks: null,
  },
  {
    icon: <NoteSearch />,
    name: "analyze",
    href: "/analyze",
    childLinks: [{ name: "FLANN", href: "/FLANN" }],
  },
  {
    icon: <Ruler />,
    name: "utils",
    href: "/utils",
    childLinks: [
      { name: "ORIENTATION", href: "/ORIENTATION" },
      { name: "GABOR", href: "/GABOR" },
      { name: "SKELETONIZE", href: "/SKELETONIZE" },
      { name: "MINUTIAE", href: "/MINUTIAE" },
      { name: "SINGULARITY", href: "/SINGULARITY" },
    ],
  },
  {
    icon: <Alarm />,
    name: "history",
    href: "/history",
    childLinks: null,
  },
  {
    icon: <Data />,
    name: "database",
    href: "/database",
    childLinks: null,
  },
  {
    icon: <User02 />,
    name: "account",
    href: "/account",
    childLinks: null,
  },
  {
    icon: <Info />,
    name: "logs",
    href: "/logs",
    childLinks: null,
  },
  {
    icon: <Settings />,
    name: "settings",
    href: "/settings",
    childLinks: null,
  },
] as const;
