import { ComponentPropsWithoutRef } from "react";

interface InputProps extends ComponentPropsWithoutRef<"input"> {
  label: string;
}

export default function Input({ label, ...rest }: InputProps) {
  return (
    <div className="relative">
      <input
        {...rest}
        id={label}
        className="peer p-3 border border-accent"
        placeholder=""
      />
      <label
        htmlFor={label}
        className="text-accent absolute left-3 top-3 translate-y-[1px] translate-x-[1px] transition-all
        peer-[&:not(:placeholder-shown)]:-translate-y-3 peer-[&:not(:placeholder-shown)]:text-xs
        peer-[&:not(:placeholder-shown)]:-translate-x-2 peer-[&:not(:placeholder-shown)]:text-[#444444]"
      >
        {label}
      </label>
    </div>
  );
}
