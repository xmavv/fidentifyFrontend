import NavLink from "@/ui/nav-link";
import Button from "@/ui/button";
import Image from "next/image";
import HeaderNav from "@/components/navbar/header-nav";
import { navLinks } from "@/types/navbar";

export default function NavBar() {
  return (
    <nav className="p-4 overflow-auto overflow-x-hidden border-l border-foreground">
      <HeaderNav />

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

      <Button className="text-warn mt-20 w-full">
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
