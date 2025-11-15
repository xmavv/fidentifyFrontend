"use client";
// BECAUSE CANT PASS PROPS SERVER -> CLIENT WHEN ITS FUNCTION (NOT SERIALIZABLE)

import { useRouter } from "next/navigation";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/shadcn/select";

interface PipelineSelectProps {
  items: string[];
  name: string;
  value: string;
}

export default function PipelineSelect({
  name,
  items,
  value,
}: PipelineSelectProps) {
  const router = useRouter();

  return (
    <Select
      onValueChange={(value) => router.push(`/application/${name}/${value}`)}
      value={value}
    >
      <SelectTrigger>
        <SelectValue placeholder="Method" />
      </SelectTrigger>
      <SelectContent align="start">
        {items.map((item) => (
          <SelectItem key={item} value={item} className="capitalize">
            {item}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
