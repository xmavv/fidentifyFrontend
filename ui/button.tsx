import GlowText from "@/ui/glow-text";
import { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";

interface ButtonProps extends ComponentPropsWithoutRef<"button"> {
  children: ReactNode;
}

export default function Button({ children, ...rest }: ButtonProps) {
  return (
    <button
      {...rest}
      className={`p-3 bg-linear-to-r cursor-pointer outline-none transition-all duration-300 
      focus-visible:shadow-[0_2px_3px_currentColor] hover:shadow-[0_2px_3px_currentColor]
      focus-visible:brightness-110 hover:brightness-110
      from-gradient-bright to-gradient-dark shadow-base inset-shadow-base ${rest.className} 
      disabled:text-gray-500 disabled:box-shadow-none disabled:cursor-not-allowed`}
    >
      <GlowText>{children}</GlowText>
    </button>
  );
}

interface ButtonSmallProps extends ButtonProps {
  as?: ElementType;
}

export function ButtonSmall({
  children,
  as: Tag = "button",
  ...rest
}: ButtonSmallProps) {
  return (
    <Tag
      {...rest}
      className={`px-1 py-0.5 bg-linear-to-r cursor-pointer 
      from-gradient-bright to-gradient-dark shadow-base inset-shadow-base ${rest.className}
      disabled:text-gray-500 disabled:box-shadow-none disabled:cursor-not-allowed`}
    >
      <GlowText>{children}</GlowText>
    </Tag>
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
