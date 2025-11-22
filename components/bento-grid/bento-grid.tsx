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
          href="/application/account"
          title="Account."
          description="Personal information, details and statistics."
          variant="small"
        />
        <CardBento
          imageName="logs"
          href="/application/logs"
          title="Logs."
          description="See actions taken in current session."
          variant="small"
        />
        <CardBento
          imageName="settings"
          href="/application/settings"
          title="Settings."
          description="Change threshold intervals, language and logout time."
          variant="small"
        />
      </div>
      <div className="flex items-center gap-5">
        <CardBento
          imageName="recognize"
          href="/application/recognize"
          title="Recognize."
          description="Identify fingerprint across database with AI."
        />
        <CardBento
          imageName="analyze"
          href="/application/analyze/flann"
          title="Analyze."
          description="Compare fingerprints with FLANN and minutiae."
        />
      </div>
      <div className="flex items-center gap-5">
        <CardBento
          imageName="utilities"
          href="/application/utils/minutiae"
          title="Utilities."
          description="Different methods for fingerprint enhancment."
          variant="small"
        />
        <CardBento
          imageName="database"
          href="/application/database"
          title="Database."
          description="Display, delete or add new fingerprints."
          variant="small"
        />
        <CardBento
          imageName="history"
          href="/application/history"
          title="History."
          description="See your matching, compares and results."
        />
      </div>
    </div>
  );
}
