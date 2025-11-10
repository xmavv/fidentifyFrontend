interface SettingProps {
  label: string;
  value: string | number;
}

export default function Setting({ label, value }: SettingProps) {
  return (
    <div className="flex justify-between border-t border-white py-3">
      <span className="text-foreground">{label}</span>
      <span className="text-foreground">{value}</span>
    </div>
  );
}
