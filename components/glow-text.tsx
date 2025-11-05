import { ComponentPropsWithoutRef, ReactNode } from "react";

interface GlowTextProps extends ComponentPropsWithoutRef<"p"> {
  children: ReactNode;
}

export default function GlowText({ children, ...rest }: GlowTextProps) {
  return (
    <p {...rest} className={`relative inline ${rest.className}`}>
      <span className="">{children}</span>
      <span className="left-0 pointer-events-none absolute blur-xs">
        {children}
      </span>
      <span className="left-0 pointer-events-none absolute blur-sm">
        {children}
      </span>
    </p>
  );
}
