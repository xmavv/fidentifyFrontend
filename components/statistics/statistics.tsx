import Statistic from "@/components/statistics/statistic";
import { History as IHistory } from "@/types/history";
import { authRequest } from "@/services/auth";

export default async function Statistics() {
  const historyList: IHistory[] = await authRequest("history");
  const numHistories = historyList.length;

  const matchHistories = historyList.filter(
    (history) => history.history?.success_percent,
  );
  const numMatchHistories = matchHistories.length;
  const sumMatch = matchHistories.reduce((acc, curr) => {
    const matchPercent = curr.history.success_percent || 0;
    return matchPercent + acc;
  }, 0);
  const averageMatch =
    numMatchHistories === 0
      ? 0
      : Number((sumMatch / numMatchHistories).toFixed(2)) * 100;

  const methodsUsage: Record<string, number> = {};
  historyList.forEach((history) => {
    if (!methodsUsage[history.history.method])
      methodsUsage[history.history.method] = 0;
    methodsUsage[history.history.method]++;
  });
  const mostUsedMethod =
    historyList.length < 1
      ? "NONE"
      : Object.entries(methodsUsage).sort((a, b) => a[1] - b[1])[0][0];

  return (
    <ul>
      <li>
        <Statistic label="Historical pipelines" value={numHistories} />
      </li>
      <li>
        <Statistic label="Average match %" value={`${averageMatch}%`} />
      </li>
      <li>
        <Statistic label="Most used method" value={mostUsedMethod} />
      </li>
      {/*<li>*/}
      {/*  <Statistic label="Localization" value={"xd"} />*/}
      {/*</li>*/}
    </ul>
  );
}
