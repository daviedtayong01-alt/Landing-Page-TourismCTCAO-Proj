"use client";

import Link from "next/link";
import { Heart, Search } from "lucide-react";
import { useMemo, useSyncExternalStore } from "react";

import {
  getTranslations,
  type Locale,
} from "@/lib/i18n";

import { defaultLocale } from "@/lib/i18n/config";

import {
  getFavoriteCount,
  subscribeToFavorites,
} from "@/lib/favorites";

import { LanguageSwitcher } from "./LanguageSwitcher";
import { MobileMenu } from "./MobileMenu";

interface NavbarProps {
  locale?: Locale;
}

const navigation = [
  {
    id: "home",
    href: "/",
  },
  {
    id: "destinations",
    href: "/destinations",
  },
  {
    id: "dot-listed",
    href: "/business-directory",
  },
  {
    id: "transport",
    href: "/transport",
  },
  {
    id: "mice",
    href: "/mice",
  },
  {
    id: "events",
    href: "/events",
  },
] as const;

export function Navbar({
  locale: serverLocale = defaultLocale,
}: NavbarProps) {
  const locale = serverLocale;

  const favoriteCount = useSyncExternalStore(
    subscribeToFavorites,
    getFavoriteCount,
    () => 0,
  );

  const translations = useMemo(
    () => getTranslations(locale),
    [locale],
  );

  return (
    <nav
      aria-label={translations.accessibility.primaryNavigation}
      className="absolute inset-x-0 top-0 z-50"
    >
      <div className="mx-auto flex h-[70px] w-full max-w-[1440px] items-center justify-between px-5 sm:px-8 lg:px-10 xl:px-12">
        {/* Brand */}
        <Link
          href="/"
          aria-label="Visit Koronadal"
          className="inline-flex min-h-10 items-center gap-2.5 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-tourism-pink focus-visible:ring-offset-2 focus-visible:ring-offset-tourism-navy"
        >
          <span
            aria-hidden="true"
            className="flex size-9 shrink-0 items-center justify-center rounded-full bg-tourism-pink text-sm font-black text-white"
          >
            K
          </span>

          <span className="leading-none">
            <span className="block text-[13px] font-black tracking-tight text-white">
              VISIT KORONADAL
            </span>

            <span className="mt-1 block text-[9px] font-bold uppercase tracking-[0.18em] text-white/55">
              CITY GOVERNMENT PORTAL
            </span>
          </span>
        </Link>

        {/* Desktop */}
        <div className="hidden items-center gap-5 xl:flex">
          <div className="flex items-center gap-6 text-[11px] font-bold text-white/70">
            {navigation.map((item) => (
              <Link
                key={item.id}
                href={item.href}
                className="rounded-sm transition-colors motion-reduce:transition-none hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-tourism-pink focus-visible:ring-offset-2 focus-visible:ring-offset-tourism-navy"
              >
                {
                  translations.nav[
                    item.id === "dot-listed"
                      ? "dotListed"
                      : item.id
                  ]
                }
              </Link>
            ))}
          </div>

          {/* Search */}
          <Link
            href="/search"
            aria-label={`${translations.common.search} Visit Koronadal`}
            className="flex size-9 items-center justify-center rounded-full text-white/70 transition-colors motion-reduce:transition-none hover:bg-white/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-tourism-pink focus-visible:ring-offset-2 focus-visible:ring-offset-tourism-navy"
          >
            <Search
              aria-hidden="true"
              className="size-4"
            />
          </Link>

          {/* Favorites */}
          <Link
            href="/search?favorites=true"
            aria-label={`${translations.nav.favorites}${
              favoriteCount > 0
                ? `, ${favoriteCount}`
                : ""
            }`}
            className="relative flex size-9 items-center justify-center rounded-full text-white/70 transition-colors motion-reduce:transition-none hover:bg-white/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-tourism-pink focus-visible:ring-offset-2 focus-visible:ring-offset-tourism-navy"
          >
            <Heart
              aria-hidden="true"
              className="size-4"
            />

            {favoriteCount > 0 && (
              <span
                aria-hidden="true"
                className="absolute -right-0.5 -top-0.5 flex min-w-4 items-center justify-center rounded-full bg-tourism-pink px-1 text-[8px] font-black leading-4 text-white"
              >
                {favoriteCount > 99
                  ? "99+"
                  : favoriteCount}
              </span>
            )}
          </Link>

          <LanguageSwitcher locale={locale} />
        </div>

        {/* Mobile */}
        <div className="xl:hidden">
          <MobileMenu
            favoriteCount={favoriteCount}
            locale={locale}
          />
        </div>
      </div>
    </nav>
  );
}