import { ComponentPropsWithoutRef, ReactNode } from "react";

interface CardProps extends ComponentPropsWithoutRef<"div"> {
  children: ReactNode;
}

export default function Card({ children, ...rest }: CardProps) {
  return (
    <div
      {...rest}
      className={`py-3 px-4 inline-block rounded-xl 
      shadow-base inset-shadow-base border-1 
      border-[#444444] relative ${rest.className}`}
    >
      {children}
    </div>
  );
}
