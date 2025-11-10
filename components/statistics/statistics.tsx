interface SettingProps {
  label: string;
  value: string | number;
}

export default function Statistics({ label, value }: SettingProps) {
  return (
    <div className="flex justify-between border-t border-white py-4">
      <span className="text-foreground">{label}</span>
      <span className="text-foreground">{value}</span>
    </div>
  );
}
