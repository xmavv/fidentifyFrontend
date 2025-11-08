import { House01 } from "react-coolicons";
import Header from "@/ui/header";
import BentoGrid from "@/components/bento-grid/bento-grid";

export default function Page() {
  return (
    <div>
      <Header>
        <House01 /> dashboard
      </Header>

      <BentoGrid />
    </div>
  );
}
