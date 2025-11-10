import Select from "@/ui/select";

export default function CardLanguage() {
  return (
    <div className="flex justify-between">
      <div>
        <h4 className="inline mr-1">Language.</h4>
        <p className="inline text-xs text-[#5A5A5A]">Change app’s language.</p>
      </div>

      <Select />
      {/*<Input className="w-25" label="language" />*/}
    </div>
  );
}
