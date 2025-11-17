export const THRESHOLD = "threshold" as const;
export const LANGUAGE = "language" as const;
export const TIMEOUT = "timeout" as const;
export const LOGS = "logs" as const;

export const initialValueThreshold = {
  low: { min: 0, max: 33 },
  medium: { min: 34, max: 67 },
  high: { min: 68, max: 100 },
};

export { initialValueThreshold as const };
