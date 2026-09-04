import { cookies } from "next/headers";

import {
  defaultLocale,
  isLocale,
  LOCALE_COOKIE,
  type Locale,
} from "./config";

/**
 * Reads the user's selected locale from the request cookie.
 *
 * Server-only.
 */
export async function getLocale(): Promise<Locale> {
  const cookieStore = await cookies();
  const value = cookieStore.get(LOCALE_COOKIE)?.value;

  if (value && isLocale(value)) {
    return value;
  }

  return defaultLocale;
}