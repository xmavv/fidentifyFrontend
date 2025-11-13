"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import GlowText from "@/ui/glow-text";
import { ComponentPropsWithoutRef, useState } from "react";
import { CaretDownMd } from "react-coolicons";
import { INavLink } from "@/types/navbar";

interface NavLinkProps
  extends Omit<INavLink, "href" | "name">,
    Omit<ComponentPropsWithoutRef<"a">, "href"> {
  href: string;
  isChild?: boolean;
}

export default function NavLink({
  icon,
  iconActive,
  href,
  children,
  isChild = false,
  childLinks,
  ...rest
}: NavLinkProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const pathname = usePathname();
  const isActive = pathname === href || isExpanded;

  function handleNavigate(e: { preventDefault: () => void }): void {
    if (!!childLinks) {
      e.preventDefault();
      setIsExpanded((isExpanded) => !isExpanded);
    }
  }

  // to jest mega tutaj, bo to ma zawsze taki kolor jak element - default bialy
  // a jezeli zmieniam color to zawsze ustawiam wlasnie color prop czyli to wtedy tez sie zmienia
  return (
    <>
      <Link
        {...rest}
        href={href}
        className={`inline-block relative min-w-60 p-3 bg-linear-to-r cursor-pointer 
        shadow-none focus-visible:shadow-[0_0_5px_currentColor] focus-visible:scale-[1.05]
        outline-none
        ${
          isActive ? `${!!childLinks ? "" : "text-primary"}` : ""
        } hover:text-primary transition-all duration-300 
        from-gradient-bright to-gradient-dark shadow-base inset-shadow-base ${
          rest.className
        } ${isChild ? "text-accent" : ""}`}
        onNavigate={handleNavigate}
      >
        <div
          className={`flex
          ${isChild ? "justify-center" : "justify-between"} items-center`}
        >
          <div className="flex items-center gap-2">
            <GlowText isGlowing={isActive}>{icon}</GlowText>
            <GlowText isGlowing={isActive}>{children}</GlowText>
          </div>

          {!!childLinks &&
            (isActive ? (
              <GlowText>
                <CaretDownMd />
              </GlowText>
            ) : (
              <CaretDownMd className="rotate-90" />
            ))}
        </div>
      </Link>
      {isExpanded &&
        !!childLinks &&
        childLinks.map((link) => (
          <NavLink
            key={link.name}
            href={`${href}${link.href}`}
            isChild={true}
            {...rest}
            className={`${rest.className} mt-[2px]`}
          >
            {link.name}
          </NavLink>
        ))}
    </>
  );
}
