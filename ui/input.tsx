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
        className={`peer px-2 py-3 border border-accent outline-none
        focus-visible:shadow-[0_0_3px_currentColor] ${rest.className}`}
        placeholder=""
      />
      <label
        htmlFor={label}
        className="text-accent absolute left-3 top-3 px-0.5 translate-y-[1px] translate-x-[1px] transition-all
        peer-[&:not(:placeholder-shown)]:-translate-y-3 peer-[&:not(:placeholder-shown)]:text-xs pointer-events-none
        peer-[&:not(:placeholder-shown)]:-translate-x-2  peer-[&:not(:placeholder-shown)]:text-foreground text-nowrap"
      >
        {label}
      </label>
    </div>
  );
}
