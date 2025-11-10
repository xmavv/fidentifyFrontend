import { ComponentPropsWithoutRef } from "react";

interface InputProps extends ComponentPropsWithoutRef<"input"> {
  label: string;
}

export default function Input({ label, ...rest }: InputProps) {
  return (
    <div className="relative inline-block">
      <input
        {...rest}
        id={label}
        className={`peer px-2 py-1 border border-accent focus-visible:rounded-sm outline-none
        focus-visible:outline-2 focus-visible:outline-solid outline-accent duration-50 ${rest.className}`}
        placeholder=""
      />
      <label
        htmlFor={label}
        className="text-accent absolute left-3 top-1 translate-y-[1px] translate-x-[1px] transition-all
        peer-[&:not(:placeholder-shown)]:-translate-y-3 peer-[&:not(:placeholder-shown)]:text-xs pointer-events-none
        peer-[&:not(:placeholder-shown)]:-translate-x-2 peer-[&:not(:placeholder-shown)]:text-foreground"
      >
        {label}
      </label>
    </div>
  );
}
