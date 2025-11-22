import Fingerprint from "@/components/database/fingerprint";
import { Data } from "react-coolicons";
import Header from "@/ui/header";
import { Fingerprint as IFingerprint } from "@/types/fingerprint";
import { authRequest } from "@/services/auth";

//TODO: GET STATIC PROPS
//SUSPENSE

export default async function Page() {
  const fingerprints: IFingerprint[] = await authRequest("fingerprints");

  //LADNY FINGERPRINT TEN Z INPUTOUTPUTCARD DODAC I PLACEHOLDER

  return (
    <div>
      <Header>
        <Data /> database
      </Header>

      {fingerprints.length < 1 && (
        <div>THERE IS NO FINGERPRINTS IN THE DATABASE</div>
      )}

      <ul className="flex flex-wrap gap-6 justify-center">
        {fingerprints.map((fingerprint) => (
          <li key={fingerprint.id}>
            <Fingerprint fingerprint={fingerprint} />
          </li>
        ))}
      </ul>
    </div>
  );
}
