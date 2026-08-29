"use client";

import Link from "next/link";
import { Heart, Search } from "lucide-react";
import { useSyncExternalStore } from "react";

import {
  getFavoriteCount,
  subscribeToFavorites,
} from "@/lib/favorites";

import { Container } from "./Container";
import { MobileMenu } from "./MobileMenu";

/**
 * Primary navigation configuration.
 *
 * IMPORTANT:
 * `id` represents the identity of the navigation item.
 * `href` represents where the item navigates.
 *
 * These are intentionally separate because multiple navigation items
 * can currently point to the same route.
 *
 * Example:
 *   DOT Listed -> /business-directory
 *   Stay & Eat  -> /business-directory
 *
 * Using `href` as the React key would therefore create duplicate keys.
 */
const navigation = [
  {
    id: "home",
    label: "Home",
    href: "/",
  },
  {
    id: "destinations",
    label: "Destinations",
    href: "/destinations",
  },
  {
    id: "dot-listed",
    label: "DOT Listed",
    href: "/business-directory",
  },
  {
    id: "stay-eat",
    label: "Stay & Eat",
    href: "/business-directory",
  },
  {
    id: "transport",
    label: "Transport",
    href: "/transport",
  },
  {
    id: "mice",
    label: "MICE",
    href: "/mice",
  },
  {
    id: "events",
    label: "Events",
    href: "/events",
  },
  {
    id: "reports",
    label: "Reports",
    href: "/reports",
  },
];

export function Navbar() {
  const favoriteCount = useSyncExternalStore(
    subscribeToFavorites,
    getFavoriteCount,
    () => 0,
  );

  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <Container>
        <nav
          aria-label="Primary navigation"
          className="flex h-[70px] items-center justify-between gap-4"
        >
          {/* =========================================================
              BRAND
              ========================================================= */}

          <Link
            href="/"
            aria-label="City of Koronadal tourism home"
            className="flex shrink-0 items-center gap-2.5"
          >
            {/* CK = City of Koronadal */}
            <span
              aria-hidden="true"
              className="flex size-9 items-center justify-center rounded-full bg-white text-[10px] font-black text-tourism-navy shadow-sm"
            >
              CK
            </span>

            <span className="hidden leading-none sm:block">
              <span className="block text-[13px] font-black tracking-tight text-white">
                VISIT KORONADAL
              </span>

              <span className="mt-1 block text-[7px] font-bold uppercase tracking-[0.18em] text-white/75">
                CITY GOVERNMENT PORTAL
              </span>
            </span>
          </Link>

          {/* =========================================================
              DESKTOP NAVIGATION

              DEBUG: NAVIGATION_KEYS

              Each item uses its own stable `id` as the React key.
              Do NOT use `item.href` here because DOT Listed and
              Stay & Eat currently share /business-directory.
              ========================================================= */}

          <div className="hidden items-center gap-5 xl:flex">
            {navigation.map((item) => (
              <Link
                key={item.id}
                href={item.href}
                className="text-[10px] font-bold text-white/90 transition hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* =========================================================
              RIGHT ACTIONS
              ========================================================= */}

          <div className="hidden items-center gap-3 lg:flex">
            <Link
              href="/search"
              aria-label="Search tourism listings"
              className="flex size-8 items-center justify-center rounded-full text-white transition hover:bg-white/10"
            >
              <Search className="size-4" />
            </Link>

            <Link
              href="/search?favorites=true"
              aria-label={`Favorites: ${favoriteCount}`}
              className="flex items-center gap-1 rounded-full px-1 text-white transition hover:bg-white/10"
            >
              <Heart className="size-3.5" />

              <span className="flex min-w-4 items-center justify-center rounded-full bg-tourism-pink px-1 py-0.5 text-[7px] font-black text-white">
                {favoriteCount}
              </span>
            </Link>

            <span className="text-[9px] font-bold text-white">
              EN
            </span>

            <span
              aria-hidden="true"
              className="text-[9px] text-white/40"
            >
              /
            </span>

            <span className="text-[9px] font-semibold text-white/65">
              FIL
            </span>

            <Link
              href="/reports"
              className="rounded-full bg-tourism-pink px-4 py-2.5 text-[9px] font-extrabold text-white transition hover:bg-tourism-pink-dark"
            >
              Report an Update
            </Link>
          </div>

          {/* =========================================================
              MOBILE NAVIGATION

              MobileMenu remains responsible for the mobile
              navigation UI. The favorite count is passed through
              exactly as before.
              ========================================================= */}

          <MobileMenu favoriteCount={favoriteCount} />
        </nav>
      </Container>
    </header>
  );
}