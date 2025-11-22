import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function displayDuration(duration: number) {
  const mins = Math.floor(duration / 60);
  const secs = duration % 60;
  const stringMins = mins > 9 ? `${mins}` : `0${mins}`;
  const stringSecs = secs > 9 ? `${secs}` : `0${secs}`;

  return `${stringMins}:${stringSecs}`;
}

export function display3DigitsId(id: number) {
  if (id < 10) return `#00${id}`;
  if (id < 100) return `#0${id}`;
  return `#${id}`;
}
