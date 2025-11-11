import { ComponentPropsWithoutRef } from "react";
import { backgroundImages } from "@/constants/card-bento";
import Card from "@/ui/card";
import Link from "next/link";

interface CardBentoProps extends ComponentPropsWithoutRef<"div"> {
  imageName: keyof typeof backgroundImages;
  href: string;
  title: string;
  description: string;
  variant?: "small" | "large";
}

export default function CardBento({
  imageName,
  href,
  title,
  description,
  variant = "large",
  ...rest
}: CardBentoProps) {
  return (
    <Link
      href={href}
      className="transition-all outline-none focus-visible:scale-[1.08] cursor-pointer focus-visible:brightness-130 hover:brightness-130"
    >
      <Card
        {...rest}
        className={`h-57 ${variant === "small" ? "w-60" : "w-93"} 
      ${backgroundImages[imageName]} bg-cover cursor-pointer ${rest.className}`}
      >
        <h4 className="inline mr-1">{title}</h4>
        <p className="inline text-xs text-[#5A5A5A]">{description}</p>
      </Card>
    </Link>
  );
}
