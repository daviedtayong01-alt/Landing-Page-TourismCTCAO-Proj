"use client";

import { Search } from "lucide-react";
import { useMemo, useState } from "react";

import { DestinationCard } from "@/components/tourism/DestinationCard";
import { PaginationControls } from "@/components/tourism/PaginationControls";
import type { Locale } from "@/lib/i18n/config";
import type { Destination } from "@/types/tourism";

const PAGE_SIZE = 3;

interface DestinationsDirectoryProps {
  destinations: Destination[];
  locale: Locale;
}

export function DestinationsDirectory({
  destinations,
  locale,
}: DestinationsDirectoryProps) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("all");
  const [page, setPage] = useState(1);

  const categories = useMemo(
    () =>
      Array.from(
        new Set(
          destinations.map(
            (destination) =>
              destination.category[locale],
          ),
        ),
      ).sort((first, second) =>
        first.localeCompare(second, locale),
      ),
    [destinations, locale],
  );

  const filteredDestinations = useMemo(() => {
    const normalizedQuery = query
      .trim()
      .toLocaleLowerCase(locale);

    return destinations.filter((destination) => {
      const localizedCategory =
        destination.category[locale];

      const matchesCategory =
        category === "all" ||
        localizedCategory === category;

      const searchableText = [
        destination.name[locale],
        localizedCategory,
        destination.location[locale],
        destination.description[locale],
        destination.travelGuidance?.[locale] ??
          "",
        ...(destination.visitorGuidelines ?? []).map(
          (guideline) => guideline[locale],
        ),
      ]
        .join(" ")
        .toLocaleLowerCase(locale);

      const matchesQuery =
        !normalizedQuery ||
        searchableText.includes(normalizedQuery);

      return matchesCategory && matchesQuery;
    });
  }, [
    category,
    destinations,
    locale,
    query,
  ]);

  const totalPages = Math.max(
    1,
    Math.ceil(
      filteredDestinations.length /
        PAGE_SIZE,
    ),
  );

  const currentPage = Math.min(
    page,
    totalPages,
  );

  const visibleDestinations =
    filteredDestinations.slice(
      (currentPage - 1) * PAGE_SIZE,
      currentPage * PAGE_SIZE,
    );

  const hasActiveFilters =
    query.trim() !== "" ||
    category !== "all";

  function resetPage() {
    setPage(1);
  }

  function clearFilters() {
    setQuery("");
    setCategory("all");
    resetPage();
  }

  const filipino = locale === "fil";

  return (
    <section
      aria-label={
        filipino
          ? "Direktoryo ng mga destinasyon"
          : "Destination directory"
      }
      className="bg-tourism-surface py-10 sm:py-14"
    >
      <div className="rounded-2xl border border-tourism-border bg-white p-4 shadow-sm sm:p-5">
        <div className="grid gap-4 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-start">
          <label className="flex min-h-11 min-w-0 items-center gap-3 rounded-xl border border-tourism-border bg-tourism-surface px-4 transition-colors focus-within:border-tourism-pink focus-within:ring-2 focus-within:ring-tourism-pink/30 motion-reduce:transition-none">
            <Search
              aria-hidden="true"
              className="size-4 shrink-0 text-tourism-muted"
            />

            <span className="sr-only">
              {filipino
                ? "Maghanap ng mga destinasyon"
                : "Search destinations"}
            </span>

            <input
              type="search"
              value={query}
              onChange={(event) => {
                setQuery(event.target.value);
                resetPage();
              }}
              placeholder={
                filipino
                  ? "Maghanap ng mga destinasyon"
                  : "Search destinations"
              }
              className="min-w-0 flex-1 bg-transparent text-sm text-tourism-navy outline-none placeholder:text-tourism-soft"
            />
          </label>

          <fieldset className="min-w-0">
            <legend className="sr-only">
              {filipino
                ? "I-filter ang mga destinasyon ayon sa kategorya"
                : "Filter destinations by category"}
            </legend>

            <div
              className="flex min-w-0 gap-2 overflow-x-auto pb-1 scrollbar-hidden"
              aria-label={
                filipino
                  ? "Mga kategorya ng destinasyon"
                  : "Destination categories"
              }
            >
              <button
                type="button"
                aria-pressed={category === "all"}
                onClick={() => {
                  setCategory("all");
                  resetPage();
                }}
                className={[
                  "shrink-0 rounded-full px-4 py-2 text-[10px] font-bold transition-colors",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-tourism-pink focus-visible:ring-offset-2",
                  "motion-reduce:transition-none",
                  category === "all"
                    ? "bg-tourism-navy text-white"
                    : "border border-tourism-border text-tourism-navy hover:border-tourism-pink hover:text-tourism-pink",
                ].join(" ")}
              >
                {filipino
                  ? "Lahat ng destinasyon"
                  : "All destinations"}
              </button>

              {categories.map((item) => (
                <button
                  key={item}
                  type="button"
                  aria-pressed={category === item}
                  onClick={() => {
                    setCategory(item);
                    resetPage();
                  }}
                  className={[
                    "shrink-0 rounded-full px-4 py-2 text-[10px] font-bold transition-colors",
                    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-tourism-pink focus-visible:ring-offset-2",
                    "motion-reduce:transition-none",
                    category === item
                      ? "bg-tourism-pink text-white"
                      : "border border-tourism-border text-tourism-navy hover:border-tourism-pink hover:text-tourism-pink",
                  ].join(" ")}
                >
                  {item}
                </button>
              ))}
            </div>
          </fieldset>
        </div>
      </div>

      <div className="mt-6 flex flex-wrap items-center justify-between gap-3">
        <p
          aria-live="polite"
          className="text-sm text-tourism-muted"
        >
          {filteredDestinations.length}{" "}
          {filipino
            ? filteredDestinations.length === 1
              ? "destinasyon"
              : "mga destinasyon"
            : filteredDestinations.length === 1
              ? "destination"
              : "destinations"}{" "}
          {filipino ? "ang nahanap" : "found"}
        </p>

        {hasActiveFilters && (
          <button
            type="button"
            onClick={clearFilters}
            className="rounded-sm text-xs font-bold text-tourism-pink transition-colors hover:text-tourism-pink-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-tourism-pink focus-visible:ring-offset-2 motion-reduce:transition-none"
          >
            {filipino
              ? "I-clear ang mga filter"
              : "Clear filters"}
          </button>
        )}
      </div>

      {visibleDestinations.length > 0 ? (
        <div className="mt-5 grid items-stretch gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {visibleDestinations.map(
            (destination) => (
              <DestinationCard
                key={destination.id}
                destination={destination}
                locale={locale}
              />
            ),
          )}
        </div>
      ) : (
        <div className="mt-5 rounded-2xl border border-dashed border-tourism-border bg-white p-10 text-center">
          <h2 className="text-lg font-extrabold text-tourism-navy">
            {filipino
              ? "Walang nahanap na destinasyon"
              : "No destinations found"}
          </h2>

          <p className="mt-2 text-sm text-tourism-muted">
            {filipino
              ? "Subukan ang ibang paghahanap o i-clear ang aktibong filter."
              : "Try a different search or clear the active filter."}
          </p>

          <button
            type="button"
            onClick={clearFilters}
            className="mt-5 rounded-lg bg-tourism-pink px-4 py-2 text-xs font-bold text-white transition-colors hover:bg-tourism-pink-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-tourism-pink focus-visible:ring-offset-2 motion-reduce:transition-none"
          >
            {filipino
              ? "I-clear ang mga filter"
              : "Clear filters"}
          </button>
        </div>
      )}

      <PaginationControls
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setPage}
      />
    </section>
  );
}