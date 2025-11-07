import { ComponentPropsWithoutRef } from "react";
import { backgroundImages } from "@/constants/card-bento";
import Card from "@/ui/card";

interface CardBentoProps extends ComponentPropsWithoutRef<"div"> {
  imageName: keyof typeof backgroundImages;
  title: string;
  description: string;
  variant?: "small" | "large";
}

export default function CardBento({
  imageName,
  title,
  description,
  variant = "large",
  ...rest
}: CardBentoProps) {
  return (
    <Card
      {...rest}
      className={`h-57 ${variant === "small" ? "w-60" : "w-93"} 
      ${backgroundImages[imageName]} bg-cover cursor-pointer ${rest.className}`}
    >
      <h4 className="inline mr-1">{title}</h4>
      <p className="inline text-xs text-[#5A5A5A]">{description}</p>
    </Card>
  );
}
