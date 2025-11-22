"use client"; //because using useState, but we will pass children so we can render
//server compoennts with no worrries

import { createContext, useContext, useState } from "react";

interface User {
  uuid: string;
  os: string;
  browser: string;
  ip: string;
  localization: string;
  lat: number;
  long: number;
}

const AuthContext = createContext<User | null>(null);

function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);

  return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>;
}

function useAuth() {
  const auth = useContext(AuthContext);

  if (!auth) throw new Error("Context is used outside its scope!");
  return auth;
}

export { AuthProvider, useAuth };
