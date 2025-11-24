import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { AUTH_COOKIE } from "@/constants/auth";

export async function proxy(req: NextRequest) {
  const token = req.cookies.get(AUTH_COOKIE)?.value;
  const url = req.nextUrl.clone();
  const pathname = req.nextUrl.pathname;

  let valid = false;

  if (token) {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/users/me`,
      {
        headers: { Authorization: `Bearer ${token}` },
      },
    );
    valid = res.ok;
  }

  if (valid) {
    if (pathname.startsWith("/login")) {
      url.pathname = "/application/dashboard";
      return NextResponse.redirect(url);
    }

    if (pathname === "/") {
      url.pathname = "/application/dashboard";
      return NextResponse.redirect(url);
    }

    return NextResponse.next();
  }

  if (!pathname.startsWith("/login")) {
    url.pathname = "/login";
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
