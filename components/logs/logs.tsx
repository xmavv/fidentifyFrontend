"use client"; //needs to be here to access localstorage

import Log from "@/components/logs/log";
import { ILog } from "@/types/log";
import { LOGS } from "@/constants/local-storage";

const mockLog: ILog = {
  label: "new-match",
  entity: "xd",
  time: "15:44",
  date: "27-01-2022",
};

export default function Logs() {
  const storage = localStorage.getItem(LOGS);
  const logs = storage ? JSON.parse(storage) : [];

  if (logs.length < 1) return <div>THERE IS NO LOGS TO DISPLAY</div>;

  return (
    <ul className="space-y-4">
      {Array.from({ length: 50 }, (_, i) => (
        <li key={i}>
          <Log log={mockLog} />
        </li>
      ))}
    </ul>
  );
}
