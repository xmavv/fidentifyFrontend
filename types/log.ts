export const logsDescription = {
  "new-match": "",
  "new-enhancement": "",
  "new-compare": "",
  "log-in": "authenticated",
  "log-out": "system closed",
  "add-fingerprint": "new fingerprint",
  "delete-fingerprint": "remove fingerprint",
} as const;

//przy zapisywaniu dajemy pusty string do entity
export interface ILog {
  label: keyof typeof logsDescription;
  entity: string;
  time: string;
  date: string;
}
