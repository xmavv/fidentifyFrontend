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
      className={`relative h-120 w-90 bg-gradient-dark py-8 px-4 ${rest.className}`}
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
