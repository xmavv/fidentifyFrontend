import { ComponentPropsWithoutRef, ReactNode } from "react";

interface HeaderProps extends ComponentPropsWithoutRef<"header"> {
  children: ReactNode;
}

export default function Header({ children }: HeaderProps) {
  return (
    <header className="text-white pb-10">
      <h2 className="flex items-center gap-1">{children}</h2>
      <hr className="h-px bg-white" />
    </header>
  );
}
