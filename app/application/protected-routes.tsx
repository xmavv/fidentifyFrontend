"use client"; //for setting user context and fetching information like os, ip
//for the /application protected route

import { ReactNode, useEffect } from "react";
import { useAuth } from "@/contexts/auth";
import { getUser } from "@/services/auth";
import { UAParser } from "ua-parser-js";

export default function ProtectedRoutes({ children }: { children: ReactNode }) {
  const { setUser } = useAuth();

  useEffect(() => {
    async function fetchUserInfo() {
      const { uuid } = await getUser();
      if (!uuid) return;

      const res = await fetch("https://api.ipify.org?format=json");
      const { ip } = await res.json();
      const response = await fetch(`https://ipapi.co/${ip}/json/`);
      const { city, country_name, latitude, longitude } = await response.json();
      const localization = `${country_name}, ${city}`;

      const parser = new UAParser(navigator.userAgent);
      const ua = parser.getResult();
      const browser = ua?.browser?.name
        ? `${ua.browser.name} ${ua.browser.major}`
        : "";
      const os = ua.os.name ? `${ua.os.name} ${ua.os.version}` : "";

      const userInfo = {
        uuid,
        os,
        browser,
        ip,
        localization,
        lat: latitude,
        long: longitude,
      };
      setUser(userInfo);
    }

    fetchUserInfo();
  }, [setUser]);

  return children;
}
