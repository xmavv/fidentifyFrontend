import { ComponentPropsWithoutRef, ReactNode } from "react";

interface GlowTextProps extends ComponentPropsWithoutRef<"p"> {
  isGlowing?: boolean;
  children: ReactNode;
}

export default function GlowText({
  isGlowing = true,
  children,
  ...rest
}: GlowTextProps) {
  return (
    <p {...rest} className={`relative inline text-inherit ${rest.className}`}>
      <span>{children}</span>
      <span
        className={`transition-[filter] duration-500 left-0 top-1/2 -translate-y-1/2 pointer-events-none absolute ${isGlowing ? "blur-xs" : ""}`}
      >
        {children}
      </span>
      <span
        className={`transition-[filter] duration-500 left-0 top-1/2 -translate-y-1/2 pointer-events-none absolute ${isGlowing ? "blur-xs" : ""}`}
      >
        {children}
      </span>
    </p>
  );
}
