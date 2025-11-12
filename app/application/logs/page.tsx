import Log from "@/components/logs/log";
import { ILog } from "@/types/log";
import { Info } from "react-coolicons";
import Header from "@/ui/header";

export default function Page() {
  const mockLog: ILog = {
    label: "new-match",
    entity: "xd",
    time: "15:44",
    date: "27-01-2022",
  };

  return (
    <div>
      <Header>
        <Info /> logs
      </Header>

      <ul className="space-y-4">
        {Array.from({ length: 50 }, (_, i) => (
          <li key={i}>
            <Log log={mockLog} />
          </li>
        ))}
      </ul>
    </div>
  );
}
