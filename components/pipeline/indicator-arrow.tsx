import { ArrowRightLg } from "react-coolicons";

export default function IndicatorArrow({
  isLoading,
  finished,
}: {
  isLoading: boolean;
  finished: boolean;
}) {
  return (
    <ArrowRightLg
      className={`text-accent self-center -translate-y-8 drop-shadow-none
        ${finished || isLoading ? `drop-shadow-[-4px_0_5px_var(--primary)] text-primary ${!isLoading ? "" : "animate-left-right"}` : ""}
        transition-all duration-2000`}
    />
  );
}
