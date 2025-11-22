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
    href: "/application/dashboard",
    childLinks: null,
  },
  {
    icon: <IconRecognize />,
    name: "recognize",
    href: "/application/recognize",
    childLinks: null,
  },
  {
    icon: <NoteSearch />,
    name: "analyze",
    href: "/application/analyze",
    childLinks: [{ name: "FLANN", href: "/flann" }],
  },
  {
    icon: <Ruler />,
    name: "utils",
    href: "/application/utils",
    childLinks: [
      { name: "ORIENTATION", href: "/orientation" },
      { name: "GABOR", href: "/gabor" },
      { name: "SKELETONIZE", href: "/skeletonize" },
      { name: "MINUTIAE", href: "/minutiae" },
      { name: "SINGULARITY", href: "/singularity" },
    ],
  },
  {
    icon: <Alarm />,
    name: "history",
    href: "/application/history",
    childLinks: null,
  },
  {
    icon: <Data />,
    name: "database",
    href: "/application/database",
    childLinks: null,
  },
  {
    icon: <User02 />,
    name: "account",
    href: "/application/account",
    childLinks: null,
  },
  {
    icon: <Info />,
    name: "logs",
    href: "/application/logs",
    childLinks: null,
  },
  {
    icon: <Settings />,
    name: "settings",
    href: "/application/settings",
    childLinks: null,
  },
] as const;
