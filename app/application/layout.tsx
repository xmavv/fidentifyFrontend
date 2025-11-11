import NavBar from "@/components/navbar/navbar";
import { ReactNode } from "react";

export default function Layout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <main className="grid grid-cols-[1fr_17vw] h-screen">
      {/*HEADER component could be rendered right there even with params coming from url*/}
      {/*then layout would be a client component, BUT its rendering children*/}
      {/*soooo, it can render server components and whole application won't be client rendered*/}

      {/*w ogole mozna brac chyba paramsy od razu w layoucie i zostawic to jako*/}
      {/*server component*/}
      <div className="px-50 overflow-auto overflow-x-hidden">{children}</div>
      <NavBar />
    </main>
  );
}
