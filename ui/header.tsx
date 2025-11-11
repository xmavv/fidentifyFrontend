import { ComponentPropsWithoutRef, ReactNode } from "react";

interface HeaderProps extends ComponentPropsWithoutRef<"header"> {
  children: ReactNode;
}

export default function Header({ children }: HeaderProps) {
  return (
    <header className="mb-10 sticky pt-20 top-0 bg-background z-10">
      <h2 className="flex items-center gap-1">{children}</h2>
      <hr className="h-px bg-white" />
    </header>
  );
}
