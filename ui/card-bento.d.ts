import { ComponentPropsWithoutRef, ReactNode } from "react";

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

declare global {
  export interface CardProps extends ComponentPropsWithoutRef<"div"> {
    imageName: keyof typeof backgroundImages;
    title: string;
    description: string;
    variant?: "small" | "large";
  }
}

export {};
