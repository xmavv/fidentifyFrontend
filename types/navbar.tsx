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
import IconRecognize from "@/ui/icons/icon-recognize";

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
    icon: <IconRecognize />,
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
