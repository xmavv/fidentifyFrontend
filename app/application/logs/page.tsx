import { Info } from "react-coolicons";
import Header from "@/ui/header";
import Logs from "@/components/logs/logs";

export default function Page() {
  return (
    <div>
      <Header>
        <Info /> logs
      </Header>

      <Logs />
    </div>
  );
}
