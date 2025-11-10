import GlowText from "@/ui/glow-text";
import { ComponentPropsWithoutRef, ReactNode } from "react";

interface ButtonProps extends ComponentPropsWithoutRef<"button"> {
  children: ReactNode;
}

export default function Button({ children, ...rest }: ButtonProps) {
  return (
    <button
      {...rest}
      className={`min-w-60 p-3 bg-linear-to-r cursor-pointer 
      from-gradient-bright to-gradient-dark shadow-base inset-shadow-base ${rest.className}`}
    >
      <GlowText>{children}</GlowText>
    </button>
  );
}

export function ButtonCTA({ children, ...rest }: ButtonProps) {
  return (
    <button
      {...rest}
      className={`min-w-60 p-3 bg-linear-to-r cursor-pointer text-white
      from-primary-2 to-primary-3 shadow-base ${rest.className}`}
    >
      {children}
    </button>
  );
}
