"use client"; //for getting info about user from useAuth

import Statistic from "@/components/statistics/statistic";
import { useAuth } from "@/contexts/auth";

export default function Informations() {
  const { user, isLoadingUserInfo } = useAuth();
  const { os, browser, ip, localization, lat, long } = user;

  if (isLoadingUserInfo) return <div>FETCHING USER INFORMATION...</div>;

  return (
    <ul>
      <li>
        <Statistic label="OS" value={os} />
      </li>
      <li>
        <Statistic label="Browser" value={browser} />
      </li>
      <li>
        <Statistic label="IP" value={ip} />
      </li>
      <li>
        <Statistic label="Localization" value={localization} />
      </li>
      <li>
        <Statistic label="Geolocalization" value={`${lat}, ${long}`} />
      </li>
    </ul>
  );
}
