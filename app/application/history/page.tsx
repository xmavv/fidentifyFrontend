import Header from "@/ui/header";
import { Alarm } from "react-coolicons";
import History from "@/components/history/history";
import { History as IHistory } from "@/types/history";
import { authRequest } from "@/services/auth";

export default async function Page() {
  const historyList: IHistory[] = await authRequest("history");

  return (
    <div>
      <Header>
        <Alarm /> history
      </Header>

      {historyList.length < 1 && <div>THERE IS NO HISTORY TO DISPLAY</div>}

      <ul className="space-y-8">
        {historyList.map((history) => (
          <li key={history.history.id} className="text-center">
            <History history={history} />
          </li>
        ))}
      </ul>
    </div>
  );
}
