"use client";

import { useRouter } from "next/navigation";
import { useCallback, useTransition } from "react";

import {
  createLocaleCookie,
  type Locale,
} from "@/lib/i18n/config";

interface LanguageSwitcherProps {
  locale: Locale;
  className?: string;
}

export function LanguageSwitcher({
  locale,
  className = "",
}: LanguageSwitcherProps) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const changeLocale = useCallback(
    (nextLocale: Locale) => {
      if (nextLocale === locale || isPending) {
        return;
      }

      document.cookie = createLocaleCookie(nextLocale);

      startTransition(() => {
        router.refresh();
      });
    },
    [isPending, locale, router],
  );

  return (
    <div
      aria-label="Language"
      className={`inline-flex items-center rounded-full border border-white/15 bg-white/5 p-0.5 ${className}`}
    >
      <button
        type="button"
        aria-pressed={locale === "en"}
        aria-label="Switch to English"
        disabled={isPending}
        onClick={() => changeLocale("en")}
        className={[
          "min-h-8 rounded-full px-3",
          "text-[10px] font-extrabold uppercase tracking-[0.08em]",
          "transition motion-reduce:transition-none",
          "focus-visible:outline-none",
          "focus-visible:ring-2 focus-visible:ring-tourism-pink",
          "focus-visible:ring-offset-2",
          "focus-visible:ring-offset-tourism-navy",
          locale === "en"
            ? "bg-white text-tourism-navy"
            : "text-white/65 hover:text-white",
          "disabled:pointer-events-none disabled:opacity-50",
        ].join(" ")}
      >
        EN
      </button>

      <button
        type="button"
        aria-pressed={locale === "fil"}
        aria-label="Switch to Filipino"
        disabled={isPending}
        onClick={() => changeLocale("fil")}
        className={[
          "min-h-8 rounded-full px-3",
          "text-[10px] font-extrabold uppercase tracking-[0.08em]",
          "transition motion-reduce:transition-none",
          "focus-visible:outline-none",
          "focus-visible:ring-2 focus-visible:ring-tourism-pink",
          "focus-visible:ring-offset-2",
          "focus-visible:ring-offset-tourism-navy",
          locale === "fil"
            ? "bg-white text-tourism-navy"
            : "text-white/65 hover:text-white",
          "disabled:pointer-events-none disabled:opacity-50",
        ].join(" ")}
      >
        FIL
      </button>

      <span className="sr-only">
        Current language: {locale === "en" ? "English" : "Filipino"}
      </span>
    </div>
  );
}