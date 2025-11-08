import CardBento from "@/ui/card-bento";

export default function BentoGrid() {
  return (
    <div
      className={
        "grid grid-rows-[min-content_min-content_min-content] gap-5 justify-center"
      }
    >
      <div className="flex items-center gap-5">
        <CardBento
          imageName="account"
          title="Account."
          description="Personal information, details and statistics."
          variant="small"
        />
        <CardBento
          imageName="logs"
          title="Logs."
          description="See actions taken in current session."
          variant="small"
        />
        <CardBento
          imageName="settings"
          title="Settings."
          description="Change threshold intervals, language and logout time."
          variant="small"
        />
      </div>
      <div className="flex items-center gap-5">
        <CardBento
          imageName="recognize"
          title="Recognize."
          description="Identify fingerprint across database with AI."
        />
        <CardBento
          imageName="analyze"
          title="Analyze."
          description="Compare fingerprints with FLANN and minutiae."
        />
      </div>
      <div className="flex items-center gap-5">
        <CardBento
          imageName="utilities"
          title="Utilities."
          description="Different methods for fingerprint enhancment."
          variant="small"
        />
        <CardBento
          imageName="database"
          title="Database."
          description="Display, delete or add new fingerprints."
          variant="small"
        />
        <CardBento
          imageName="history"
          title="History."
          description="See your matching, compares and results."
        />
      </div>
    </div>
  );
}
