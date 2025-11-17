"use client"; //for localstorage purposes

import GlowText from "@/ui/glow-text";
import { initialValueThreshold, THRESHOLD } from "@/constants/local-storage";

const colors = {
  low: "text-warn",
  medium: "text-instruction",
  high: "text-success",
};

const getColorClassName = (
  threshold: typeof initialValueThreshold,
  matchNumber: number,
) => {
  for (const [match, limit] of Object.entries(threshold)) {
    if (limit.min <= matchNumber && limit.max >= matchNumber)
      return colors[match as keyof typeof initialValueThreshold];
  }
};

export default function HistoryPercent({
  matchNumber,
}: {
  matchNumber: number;
}) {
  const storage = localStorage.getItem(THRESHOLD);
  const threshold = storage ? JSON.parse(storage) : initialValueThreshold;

  const colorClassName = getColorClassName(threshold, matchNumber);
  return <GlowText className={colorClassName}>{matchNumber}%</GlowText>;
}
