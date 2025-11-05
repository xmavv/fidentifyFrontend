import GlowText from "@/components/glow-text";
import { ComponentPropsWithoutRef, ReactNode } from "react";

interface ButtonProps extends ComponentPropsWithoutRef<"button"> {
  children: ReactNode;
}

export default function Button({ children, ...rest }: ButtonProps) {
  return (
    <button
      {...rest}
      className={`min-w-60 p-3 grid place-items-center bg-linear-to-r cursor-pointer 
      from-gradient-L to-gradient-R shadow-base inset-shadow-base ${rest.className}`}
    >
      <GlowText>{children}</GlowText>
    </button>
  );
}
