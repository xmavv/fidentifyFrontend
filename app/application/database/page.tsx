import Fingerprint from "@/components/database/fingerprint";
import { Data } from "react-coolicons";
import Header from "@/ui/header";

export default function Page() {
  return (
    <div>
      <Header>
        <Data /> database
      </Header>

      <ul className="flex flex-wrap gap-6 justify-center">
        {Array.from({ length: 100 }, (_, i) => (
          <li key={i}>
            <Fingerprint />
          </li>
        ))}
      </ul>
    </div>
  );
}
