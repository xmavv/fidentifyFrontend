import { ComponentPropsWithoutRef } from "react";

const backgroundImages = {
  analyze: "bg-[url('@/public/analyze.png')]",
  account: "bg-[url('@/public/account.png')]",
  database: "bg-[url('@/public/database.png')]",
  history: "bg-[url('@/public/history.png')]",
  logs: "bg-[url('@/public/logs.png')]",
  recognize: "bg-[url('@/public/recognize.png')]",
  settings: "bg-[url('@/public/settings.png')]",
  utilities: "bg-[url('@/public/utilities.png')]",
} as const;

interface CardProps extends ComponentPropsWithoutRef<"div"> {
  imageName: keyof typeof backgroundImages;
  title: string;
  description: string;
  variant?: "small" | "large";
}

export default function Card({
  imageName,
  title,
  description,
  variant = "large",
  ...rest
}: CardProps) {
  return (
    <div
      {...rest}
      className={`h-57 ${variant === "small" ? "w-60" : "w-93"} py-3 px-4 rounded-xl
       shadow-base ${backgroundImages[imageName]}
      inset-shadow-base border-1 border-[#444444] 
      bg-cover relative cursor-pointer ${rest.className}`}
    >
      <h5 className="inline mr-1">{title}</h5>
      <p className="inline text-xs text-[#5A5A5A]">{description}</p>
    </div>
  );
}
