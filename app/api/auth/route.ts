import { NextResponse } from "next/server";
import { AUTH_COOKIE, checkPassword } from "@/lib/auth";

export async function POST(req: Request) {
  const { password } = await req.json().catch(() => ({ password: "" }));
  if (typeof password !== "string" || !password) {
    return NextResponse.json({ error: "missing password" }, { status: 400 });
  }
  const level = checkPassword(password);
  if (level === null) {
    return NextResponse.json({ error: "invalid" }, { status: 401 });
  }
  const res = NextResponse.json({ level });
  res.cookies.set(AUTH_COOKIE, String(level), {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 60 * 60 * 12
  });
  return res;
}

export async function DELETE() {
  const res = NextResponse.json({ ok: true });
  res.cookies.delete(AUTH_COOKIE);
  return res;
}
