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

const mockLogs = [
  {
    label: "login",
    entity: "authenticated",
    time: "15:44",
    date: "05-12-2025",
  },
  {
    label: "new match",
    entity: "#574",
    time: "15:47",
    date: "05-12-2025",
  },
  {
    label: "utility use",
    entity: "MINUTIAE",
    time: "15:50",
    date: "05-12-2025",
  },
];

export default function Logs() {
  const storage = localStorage.getItem(LOGS);
  // const logs = storage ? JSON.parse(storage) : [];
  const logs = [mockLog];

  if (logs.length < 1) return <div>THERE IS NO LOGS TO DISPLAY</div>;

  return (
    <ul className="space-y-4">
      {mockLogs.map((log) => (
        <li key={log.date}>
          <Log log={log} />
        </li>
      ))}
    </ul>
  );
}
