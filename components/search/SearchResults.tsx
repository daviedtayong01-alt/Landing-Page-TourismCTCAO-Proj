"use client";

import Link from "next/link";
import { MapPin } from "lucide-react";
import { useSyncExternalStore } from "react";

import { FavoriteButton } from "@/components/home/FavoriteButton";

import {
  getFavoritesSnapshot,
  getServerFavoritesSnapshot,
  subscribeToFavorites,
} from "@/lib/favorites";

import type { Locale } from "@/lib/i18n/config";
import type {
  SearchKind,
  SearchResult,
} from "@/lib/tourism-search";

interface SearchResultsProps {
  results: SearchResult[];
  favoritesOnly: boolean;
  locale: Locale;
}

const kindLabels: Record<
  SearchKind,
  Record<Locale, string>
> = {
  destinations: {
    en: "Destinations",
    fil: "Mga Destinasyon",
  },

  establishments: {
    en: "Establishments",
    fil: "Mga Establisimyento",
  },

  events: {
    en: "Events and updates",
    fil: "Mga Kaganapan at Update",
  },

  mice: {
    en: "MICE venues",
    fil: "Mga MICE Venue",
  },

  transport: {
    en: "Transport",
    fil: "Transportasyon",
  },
};

export function SearchResults({
  results,
  favoritesOnly,
  locale,
}: SearchResultsProps) {
  const favorites = useSyncExternalStore(
    subscribeToFavorites,
    getFavoritesSnapshot,
    getServerFavoritesSnapshot,
  );

  const visibleResults = favoritesOnly
    ? results.filter((result) =>
        favorites.includes(result.favoriteId),
      )
    : results;

  if (visibleResults.length === 0) {
    return (
      <div className="rounded-2xl border border-dashed border-tourism-border bg-white p-10 text-center">
        <h3 className="text-lg font-extrabold text-tourism-navy">
          {favoritesOnly
            ? locale === "fil"
              ? "Wala pang naka-save na listahan"
              : "No saved listings yet"
            : locale === "fil"
              ? "Walang nahanap na resulta"
              : "No results found"}
        </h3>

        <p className="mt-2 text-sm text-tourism-muted">
          {favoritesOnly
            ? locale === "fil"
              ? "Gamitin ang heart control sa isang listahan upang i-save ito rito."
              : "Use the heart control on a listing to save it here."
            : locale === "fil"
              ? "Subukan ang mas malawak na paghahanap o pumili ng ibang kategorya ng nilalaman."
              : "Try a broader search or choose another content category."}
        </p>
      </div>
    );
  }

  return (
    <div>
      {favoritesOnly && (
        <p
          aria-live="polite"
          className="mb-5 text-sm text-tourism-muted"
        >
          {visibleResults.length}{" "}
          {locale === "fil"
            ? visibleResults.length === 1
              ? "naka-save na listahan"
              : "mga naka-save na listahan"
            : visibleResults.length === 1
              ? "saved listing"
              : "saved listings"}
        </p>
      )}

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {visibleResults.map((result) => (
          <article
            key={`${result.kind}:${result.id}`}
            className="relative flex min-h-[220px] flex-col rounded-2xl border border-tourism-border bg-white p-5 shadow-sm"
          >
            <FavoriteButton
              itemId={result.favoriteId}
              label={result.title}
              className="absolute right-4 top-4 flex size-9 items-center justify-center rounded-full bg-tourism-surface text-tourism-pink transition hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-tourism-pink focus-visible:ring-offset-2 motion-reduce:transition-none motion-reduce:hover:scale-100"
            />

            <p className="pr-10 text-[9px] font-extrabold uppercase tracking-wide text-tourism-pink">
              {kindLabels[result.kind][locale]}
            </p>

            <p className="mt-1 pr-10 text-[10px] font-bold uppercase tracking-wide text-tourism-muted">
              {result.label}
            </p>

            <h3 className="mt-3 text-lg font-extrabold leading-5 text-tourism-navy">
              {result.title}
            </h3>

            <p className="mt-2 flex items-start gap-1.5 text-xs text-tourism-muted">
              <MapPin
                aria-hidden="true"
                className="mt-0.5 size-3 shrink-0"
              />

              <span>{result.location}</span>
            </p>

            <p className="mt-4 line-clamp-3 text-sm leading-5 text-tourism-muted">
              {result.description}
            </p>

            <Link
              href={result.href}
              className="mt-auto inline-flex w-fit rounded-sm pt-5 text-xs font-extrabold text-tourism-navy transition hover:text-tourism-pink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-tourism-pink focus-visible:ring-offset-2 motion-reduce:transition-none"
            >
              {locale === "fil"
                ? "Tingnan ang listahan"
                : "View listing"}{" "}
              →
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}