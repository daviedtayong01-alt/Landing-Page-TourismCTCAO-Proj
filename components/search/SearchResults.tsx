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
import type { SearchResult } from "@/lib/tourism-search";

interface SearchResultsProps {
  results: SearchResult[];
  favoritesOnly: boolean;
}

export function SearchResults({ results, favoritesOnly }: SearchResultsProps) {
  const favorites = useSyncExternalStore(
    subscribeToFavorites,
    getFavoritesSnapshot,
    getServerFavoritesSnapshot,
  );
  const visibleResults = favoritesOnly
    ? results.filter((result) => favorites.includes(result.favoriteId))
    : results;

  if (visibleResults.length === 0) {
    return (
      <div className="rounded-2xl border border-dashed border-tourism-border bg-white p-10 text-center">
        <h2 className="text-lg font-extrabold text-tourism-navy">
          {favoritesOnly ? "No saved listings yet" : "No results found"}
        </h2>
        <p className="mt-2 text-sm text-tourism-muted">
          {favoritesOnly
            ? "Use the heart control on a listing to save it here."
            : "Try a broader search or choose another content category."}
        </p>
      </div>
    );
  }

  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
      {visibleResults.map((result) => (
        <article key={`${result.kind}:${result.id}`} className="relative flex min-h-[220px] flex-col rounded-2xl border border-tourism-border bg-white p-5 shadow-sm">
          <FavoriteButton
            itemId={result.favoriteId}
            label={result.title}
            className="absolute right-4 top-4 flex size-9 items-center justify-center rounded-full bg-tourism-surface text-tourism-pink transition hover:scale-105"
          />
          <p className="pr-10 text-[9px] font-extrabold uppercase tracking-wide text-tourism-pink">{result.kind}</p>
          <p className="mt-1 pr-10 text-[10px] font-bold uppercase tracking-wide text-tourism-muted">{result.label}</p>
          <h2 className="mt-3 text-lg font-extrabold leading-5 text-tourism-navy">{result.title}</h2>
          <p className="mt-2 flex items-start gap-1.5 text-xs text-tourism-muted"><MapPin className="mt-0.5 size-3 shrink-0" />{result.location}</p>
          <p className="mt-4 line-clamp-3 text-sm leading-5 text-tourism-muted">{result.description}</p>
          <Link href={result.href} className="mt-auto pt-5 text-xs font-extrabold text-tourism-navy hover:text-tourism-pink">View listing →</Link>
        </article>
      ))}
    </div>
  );
}
