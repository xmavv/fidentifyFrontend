import { Info } from "react-coolicons";
import { ILog, logsDescription } from "@/types/log";

interface LogProps {
  log: ILog;
}

export default function Log({ log }: LogProps) {
  const { label, entity, time, date } = log;

  return (
    <div
      className="p-3 bg-linear-to-r from-gradient-bright to-gradient-dark shadow-base inset-shadow-base
    flex justify-between items-center"
    >
      <div className="flex items-center gap-2">
        <Info />
        <h5>{label.replace("-", " ")}</h5>
        <span>|</span>
        <span className="text-accent">{logsDescription[label]}</span>
        <span className="text-accent">{entity}</span>
      </div>
      <div className="text-accent">
        <span>{time}</span>
        <span className="ml-3">{date}</span>
      </div>
    </div>
  );
}
