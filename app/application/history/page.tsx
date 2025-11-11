import Header from "@/ui/header";
import { Alarm } from "react-coolicons";
import History from "@/components/history/history";

export default function Page() {
  return (
    <div>
      <Header>
        <Alarm /> history
      </Header>

      <ul className="space-y-8">
        {Array.from({ length: 10 }, (_, i) => (
          <li key={i} className="text-center">
            <History />
          </li>
        ))}
      </ul>
    </div>
  );
}
