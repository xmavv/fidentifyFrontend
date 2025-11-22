"use server";
import { cookies } from "next/headers";
import { AUTH_COOKIE } from "@/constants/auth";
import { redirect } from "next/navigation";

export async function login(formData: FormData) {
  // await authRequest("login", "POST", formData);
  // redirect("/application/dashboard");
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/login`, {
    method: "POST",
    body: formData,
  });
  const data = await res.json();
  if (data.access_token) {
    const cookie = await cookies();
    cookie.set(AUTH_COOKIE, data.access_token);
    redirect("/application/dashboard");
  }

  return data;
}

export async function logout() {
  const cookie = await cookies();
  cookie.delete(AUTH_COOKIE);
  redirect("/login");
}

export async function getUser() {
  const users = await authRequest("users/me");
  return users;
}

//USE THESE FUNCTIONS ONLY FOR SERVER ACTIONS, because we are reading cookies here, which are handled by the server request
async function getJWT() {
  const cookie = await cookies();
  const token = cookie.get(AUTH_COOKIE)?.value;
  return token;
}
export async function authRequest(
  endpoint: string,
  method: string = "GET",
  body: BodyInit | null = null,
) {
  const options: RequestInit = {
    method,
    headers: {
      Authorization: `Bearer ${await getJWT()}`,
    },
  };
  if (body) options.body = body;

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/${endpoint}`,
    options,
  );
  const data = await res.json();
  return data;
}
