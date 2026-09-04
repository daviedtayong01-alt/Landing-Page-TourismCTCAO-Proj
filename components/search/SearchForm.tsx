"use client";

import { Search } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

import type { Locale } from "@/lib/i18n/config";

import {
  searchKinds,
  type SearchKind,
} from "@/lib/tourism-search";

interface SearchFormProps {
  initialQuery: string;
  initialKind?: SearchKind;
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

function isSearchKind(
  value: string,
): value is SearchKind {
  return searchKinds.includes(
    value as SearchKind,
  );
}

export function SearchForm({
  initialQuery,
  initialKind,
  favoritesOnly,
  locale,
}: SearchFormProps) {
  const router = useRouter();

  const [query, setQuery] =
    useState(initialQuery);

  const [kind, setKind] = useState<
    SearchKind | "all"
  >(initialKind ?? "all");

  function navigate(
    nextFavoritesOnly = favoritesOnly,
  ) {
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

    const search =
      params.size > 0
        ? `?${params.toString()}`
        : "";

    router.push(`/search${search}`);
  }

  function handleKindChange(value: string) {
    if (value === "all") {
      setKind("all");
      return;
    }

    if (isSearchKind(value)) {
      setKind(value);
    }
  }

  function clearSearch() {
    setQuery("");
    setKind("all");
    router.push("/search");
  }

  const hasActiveSearch =
    query.trim() !== "" ||
    kind !== "all" ||
    favoritesOnly;

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        navigate();
      }}
      className="grid gap-3 rounded-2xl border border-tourism-border bg-white p-4 shadow-sm sm:grid-cols-[minmax(0,1fr)_200px_auto] sm:p-5"
    >
      <label className="flex min-h-11 items-center gap-3 rounded-xl border border-transparent bg-tourism-surface px-4 transition focus-within:border-tourism-pink focus-within:ring-2 focus-within:ring-tourism-pink/30 motion-reduce:transition-none">
        <Search
          aria-hidden="true"
          className="size-4 shrink-0 text-tourism-muted"
        />

        <span className="sr-only">
          {locale === "fil"
            ? "Maghanap ng nilalaman sa turismo"
            : "Search tourism content"}
        </span>

        <input
          type="search"
          value={query}
          onChange={(event) =>
            setQuery(event.target.value)
          }
          placeholder={
            locale === "fil"
              ? "Maghanap ng destinasyon, establisimyento, kaganapan, venue, o transportasyon"
              : "Search destinations, establishments, events, venues, or transport"
          }
          className="min-w-0 flex-1 bg-transparent text-sm text-tourism-navy outline-none placeholder:text-tourism-soft"
        />
      </label>

      <select
        aria-label={
          locale === "fil"
            ? "I-filter ayon sa uri ng nilalaman"
            : "Filter by content type"
        }
        value={kind}
        onChange={(event) =>
          handleKindChange(
            event.target.value,
          )
        }
        className="min-h-11 rounded-xl border border-tourism-border bg-white px-3 text-sm font-semibold text-tourism-navy focus:border-tourism-pink focus:outline-none focus:ring-2 focus:ring-tourism-pink/30"
      >
        <option value="all">
          {locale === "fil"
            ? "Lahat ng nilalaman"
            : "All content"}
        </option>

        {searchKinds.map((item) => (
          <option
            key={item}
            value={item}
          >
            {kindLabels[item][locale]}
          </option>
        ))}
      </select>

      <button
        type="submit"
        className="min-h-11 rounded-xl bg-tourism-pink px-6 text-sm font-extrabold text-white transition hover:bg-tourism-pink-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-tourism-pink focus-visible:ring-offset-2 motion-reduce:transition-none"
      >
        {locale === "fil"
          ? "Maghanap"
          : "Search"}
      </button>

      <div className="flex flex-wrap items-center gap-3 pt-1 sm:col-span-3">
        <button
          type="button"
          aria-pressed={favoritesOnly}
          onClick={() =>
            navigate(!favoritesOnly)
          }
          className={[
            "rounded-sm text-xs font-bold transition",
            "focus-visible:outline-none",
            "focus-visible:ring-2",
            "focus-visible:ring-tourism-pink",
            "focus-visible:ring-offset-2",
            "motion-reduce:transition-none",
            favoritesOnly
              ? "text-tourism-pink"
              : "text-tourism-muted hover:text-tourism-pink",
          ].join(" ")}
        >
          {favoritesOnly
            ? locale === "fil"
              ? "Ipinapakita ang mga naka-save"
              : "Showing saved listings"
            : locale === "fil"
              ? "Ipakita ang mga naka-save"
              : "Show saved listings"}
        </button>

        {hasActiveSearch && (
          <button
            type="button"
            onClick={clearSearch}
            className="rounded-sm text-xs font-bold text-tourism-muted transition hover:text-tourism-pink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-tourism-pink focus-visible:ring-offset-2 motion-reduce:transition-none"
          >
            {locale === "fil"
              ? "I-clear ang paghahanap"
              : "Clear search"}
          </button>
        )}
      </div>
    </form>
  );
}