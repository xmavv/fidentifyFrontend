import { ComponentPropsWithoutRef, ReactNode } from "react";

interface CardProps extends ComponentPropsWithoutRef<"div"> {
  children: ReactNode;
}

export default function Card({ children, ...rest }: CardProps) {
  return (
    <div
      {...rest}
      className={`py-3 px-4 inline-block rounded-xl bg-linear-to-r
      shadow-base inset-shadow-base border-1 from-gradient-dark to-gradient-bright
      border-[#444444] relative ${rest.className}`}
    >
      {children}
    </div>
  );
}
