"use client"; //for setting user context and fetching information like os, ip
//for the /application protected route

import { ReactNode } from "react";

export default function ProtectedRoutes({ children }: { children: ReactNode }) {
  return children;
}
