"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/shadcn/select";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { LANGUAGE } from "@/constants/local-storage";

const defualtLanguage = "english";

export default function CardLanguage() {
  const [language, setLanguage] = useLocalStorage(LANGUAGE, defualtLanguage);

  return (
    <div className="flex justify-between">
      <div>
        <h4 className="inline mr-1">Language.</h4>
        <p className="inline text-xs text-[#5A5A5A]">Change app’s language.</p>
      </div>

      <Select value={language} onValueChange={setLanguage}>
        <SelectTrigger>
          <SelectValue placeholder="Language" />
        </SelectTrigger>
        <SelectContent align="end">
          <SelectItem value="polish">Polish</SelectItem>
          <SelectItem value={defualtLanguage} className="capitalize">
            {defualtLanguage}
          </SelectItem>
        </SelectContent>
      </Select>
      {/*<Input className="w-25" label="language" />*/}
    </div>
  );
}
