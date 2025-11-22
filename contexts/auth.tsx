"use client"; //because using useState, but we will pass children so we can render
//server compoennts with no worrries

import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useState,
} from "react";

interface User {
  uuid: string;
  os: string;
  browser: string;
  ip: string;
  localization: string;
  lat: number;
  long: number;
}

const defaultUser = {
  uuid: "23578971234589",
  os: "Windows 11 Pro",
  browser: "Chrome 55.2",
  ip: "187.24.242.2",
  localization: "Poland, Wroclaw",
  lat: 23.321321,
  long: 52.2242,
};

interface AuthContext {
  user: User;
  setUser: Dispatch<SetStateAction<User>>;
}

const AuthContext = createContext<AuthContext | null>(null);

function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User>(defaultUser);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const auth = useContext(AuthContext);

  if (!auth) throw new Error("Context is used outside its scope!");
  return auth;
}

export { AuthProvider, useAuth };
