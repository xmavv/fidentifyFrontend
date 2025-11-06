import NavLink from "@/ui/nav-link";
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
import Button from "@/ui/button";
import Image from "next/image";
import { ReactNode } from "react";
import Header from "@/components/navbar/header";

export default function NavBar() {
  return (
    <nav className="col-span-2 p-4">
      <Header />

      <ul className="space-y-2 mt-10">
        {navLinks.map((link) => (
          <li key={link.name}>
            <NavLink
              icon={link.icon}
              href={link.href}
              iconActive={link.iconActive}
              childLinks={link.childLinks}
              className="w-full"
            >
              {link.name}
            </NavLink>
          </li>
        ))}
      </ul>

      <Button className="text-warn mt-20">
        <Image
          src="/logo_small_warn.png"
          alt=""
          width={15}
          height={15}
          className="inline"
        />{" "}
        log out
      </Button>
    </nav>
  );
}

export interface INavLink {
  name: string;
  href: string;
  icon?: ReactNode;
  iconActive?: ReactNode;
  childLinks?: null | { name: string; href: string }[];
}

const navLinks: INavLink[] = [
  {
    icon: <House01 />,
    name: "dashboard",
    href: "/dashboard",
    childLinks: null,
  },
  {
    icon: <Image src="/icon_recognize.png" alt="" width={2} height={2} />,
    iconActive: (
      <Image
        src="/icon_recognize_active.png"
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
