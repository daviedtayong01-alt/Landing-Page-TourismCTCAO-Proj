export const locales = ["en", "fil"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

export const LOCALE_COOKIE = "koronadal-locale";

export const LOCALE_COOKIE_MAX_AGE = 60 * 60 * 24 * 365;

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

/**
 * Creates a browser-safe locale cookie string.
 *
 * This module intentionally contains no `next/headers`
 * dependency so it can be imported by client components.
 */
export function createLocaleCookie(locale: Locale): string {
  return [
    `${LOCALE_COOKIE}=${encodeURIComponent(locale)}`,
    "Path=/",
    `Max-Age=${LOCALE_COOKIE_MAX_AGE}`,
    "SameSite=Lax",
  ].join("; ");
}