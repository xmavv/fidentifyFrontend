"use client";

import Input from "@/ui/input";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { TIMEOUT } from "@/constants/local-storage";

export default function CardTimeout() {
  const [timeout, setTimeout] = useLocalStorage(TIMEOUT, 30);

  return (
    <div className="flex justify-between">
      <div>
        <h4 className="inline mr-1">Timeout.</h4>
        <p className="inline text-xs text-[#5A5A5A]">
          Change time to log out within no activity.
        </p>
      </div>

      <Input
        className="w-25"
        label="Time (min)"
        type="number"
        maxLength={2}
        value={timeout}
        onBlur={(e) => setTimeout(e.target.value)}
      />
    </div>
  );
}
