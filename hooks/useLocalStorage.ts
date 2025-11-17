import { useEffect, useState } from "react";

type JsonObject = {
  [key: string]: string | number | boolean | JsonObject | JsonArray;
};
type JsonArray = Array<string | number | boolean | JsonObject | JsonArray>;
type Value = string | number | JsonObject;

export function useLocalStorage(key: string, initialValue: Value) {
  const [value, setValue] = useState(() => {
    const item = localStorage.getItem(key);

    return item ? JSON.parse(item) : initialValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value, key]);

  return [value, setValue];
}
