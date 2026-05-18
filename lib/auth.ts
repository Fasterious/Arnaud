import { cookies } from "next/headers";
import type { AuthLevel } from "./manifest";

export const AUTH_COOKIE = "arnaud_auth";

export function levelFromCookieValue(value: string | undefined): AuthLevel {
  if (value === "2") return 2;
  if (value === "1") return 1;
  return 0;
}

export async function getAuthLevel(): Promise<AuthLevel> {
  const store = await cookies();
  return levelFromCookieValue(store.get(AUTH_COOKIE)?.value);
}

export function checkPassword(password: string): AuthLevel | null {
  const extended = process.env.EXTENDED_PASSWORD || "";
  const editor = process.env.EDITOR_PASSWORD || "";
  if (editor && password === editor) return 2;
  if (extended && password === extended) return 1;
  return null;
}
