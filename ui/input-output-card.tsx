import { ComponentPropsWithoutRef, ReactNode } from "react";

interface InputOutputCardProps extends ComponentPropsWithoutRef<"div"> {
  children: ReactNode;
}
export default function InputOutputCard({
  children,
  ...rest
}: InputOutputCardProps) {
  return (
    <div
      {...rest}
      className={`relative w-90 h-120 bg-gradient-dark ${rest.className}`}
    >
      <svg
        className="absolute inset-0 w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="1"
          y="1"
          width="calc(100% - 3px)"
          height="calc(100% - 3px)"
          fill="none"
          strokeWidth="2"
          strokeDasharray="10 15"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="stroke-accent"
        />
      </svg>
      {children}
    </div>
  );
}
