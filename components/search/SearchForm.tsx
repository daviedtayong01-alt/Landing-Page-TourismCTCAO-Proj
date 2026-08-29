"use client";

import { Search } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

import {
  searchKinds,
  type SearchKind,
} from "@/lib/tourism-search";

interface SearchFormProps {
  initialQuery: string;
  initialKind?: SearchKind;
  favoritesOnly: boolean;
}

const kindLabels: Record<SearchKind, string> = {
  destinations: "Destinations",
  establishments: "Establishments",
  events: "Events and updates",
  mice: "MICE venues",
  transport: "Transport",
};

export function SearchForm({
  initialQuery,
  initialKind,
  favoritesOnly,
}: SearchFormProps) {
  const router = useRouter();
  const [query, setQuery] = useState(initialQuery);
  const [kind, setKind] = useState<SearchKind | "all">(initialKind ?? "all");

  function navigate(nextFavoritesOnly = favoritesOnly) {
    const params = new URLSearchParams();
    const trimmedQuery = query.trim();

    if (trimmedQuery) {
      params.set("q", trimmedQuery);
    }

    if (kind !== "all") {
      params.set("category", kind);
    }

    if (nextFavoritesOnly) {
      params.set("favorites", "true");
    }

    router.push(`/search${params.size > 0 ? `?${params.toString()}` : ""}`);
  }

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        navigate();
      }}
      className="grid gap-3 rounded-2xl border border-tourism-border bg-white p-4 shadow-sm sm:grid-cols-[minmax(0,1fr)_200px_auto] sm:p-5"
    >
      <label className="flex min-h-11 items-center gap-3 rounded-xl bg-tourism-surface px-4">
        <Search aria-hidden="true" className="size-4 shrink-0 text-tourism-muted" />
        <span className="sr-only">Search tourism content</span>
        <input
          type="search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Search destinations, establishments, events, venues, or transport"
          className="min-w-0 flex-1 bg-transparent text-sm text-tourism-navy outline-none placeholder:text-tourism-soft"
        />
      </label>

      <select
        aria-label="Filter by content type"
        value={kind}
        onChange={(event) => setKind(event.target.value as SearchKind | "all")}
        className="min-h-11 rounded-xl border border-tourism-border bg-white px-3 text-sm font-semibold text-tourism-navy"
      >
        <option value="all">All content</option>
        {searchKinds.map((item) => <option key={item} value={item}>{kindLabels[item]}</option>)}
      </select>

      <button type="submit" className="min-h-11 rounded-xl bg-tourism-pink px-6 text-sm font-extrabold text-white transition hover:bg-tourism-pink-dark">Search</button>

      <div className="flex flex-wrap items-center gap-3 pt-1 sm:col-span-3">
        <button
          type="button"
          aria-pressed={favoritesOnly}
          onClick={() => navigate(!favoritesOnly)}
          className={`text-xs font-bold transition ${favoritesOnly ? "text-tourism-pink" : "text-tourism-muted hover:text-tourism-pink"}`}
        >
          {favoritesOnly ? "Showing saved listings" : "Show saved listings"}
        </button>
        {(initialQuery || initialKind || favoritesOnly) && <button type="button" onClick={() => router.push("/search")} className="text-xs font-bold text-tourism-muted hover:text-tourism-pink">Clear search</button>}
      </div>
    </form>
  );
}
