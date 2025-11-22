"use client"; //for useAuth uuid

import { useAuth } from "@/contexts/auth";

export default function Id() {
  const { user } = useAuth();

  return <span className="text-4xl align-middle text-white">{user.uuid}</span>;
}
