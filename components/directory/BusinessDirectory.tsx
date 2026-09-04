"use client";

import { Search } from "lucide-react";
import { useMemo, useState } from "react";

import { EstablishmentCard } from "@/components/home/EstablishmentCard";
import { PaginationControls } from "@/components/tourism/PaginationControls";
import type { Locale } from "@/lib/i18n/config";
import type { Establishment } from "@/types/tourism";

const PAGE_SIZE = 2;

interface BusinessDirectoryProps {
  establishments: Establishment[];
  locale: Locale;
}

export function BusinessDirectory({
  establishments,
  locale,
}: BusinessDirectoryProps) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("all");
  const [sort, setSort] = useState("rating");
  const [page, setPage] = useState(1);

  const categories = useMemo(
    () =>
      Array.from(
        new Set(
          establishments.map(
            (item) => item.category[locale],
          ),
        ),
      ).sort((first, second) =>
        first.localeCompare(second, locale),
      ),
    [establishments, locale],
  );

  const filteredEstablishments = useMemo(() => {
    const normalizedQuery = query
      .trim()
      .toLocaleLowerCase(locale);

    const result = establishments.filter((item) => {
      const localizedCategory =
        item.category[locale];

      const matchesCategory =
        category === "all" ||
        localizedCategory === category;

      const searchableText = [
        item.name[locale],
        localizedCategory,
        item.location[locale],
        item.description[locale],
        item.accreditationStatus[locale],
        ...(item.amenities ?? []).map(
          (amenity) => amenity[locale],
        ),
      ]
        .join(" ")
        .toLocaleLowerCase(locale);

      const matchesQuery =
        !normalizedQuery ||
        searchableText.includes(normalizedQuery);

      return matchesCategory && matchesQuery;
    });

    return [...result].sort((first, second) => {
      if (sort === "name") {
        return first.name[locale].localeCompare(
          second.name[locale],
          locale,
        );
      }

      const ratingDifference =
        second.rating - first.rating;

      return ratingDifference !== 0
        ? ratingDifference
        : first.name[locale].localeCompare(
            second.name[locale],
            locale,
          );
    });
  }, [
    category,
    establishments,
    locale,
    query,
    sort,
  ]);

  const totalPages = Math.max(
    1,
    Math.ceil(
      filteredEstablishments.length /
        PAGE_SIZE,
    ),
  );

  const currentPage = Math.min(
    page,
    totalPages,
  );

  const visibleEstablishments =
    filteredEstablishments.slice(
      (currentPage - 1) * PAGE_SIZE,
      currentPage * PAGE_SIZE,
    );

  function resetPage() {
    setPage(1);
  }

  function resetFilters() {
    setQuery("");
    setCategory("all");
    setSort("rating");
    resetPage();
  }

  const hasActiveFilters =
    query.trim() !== "" ||
    category !== "all" ||
    sort !== "rating";

  const filipino = locale === "fil";

  return (
    <section
      aria-label={
        filipino
          ? "Direktoryo ng mga establisimyento"
          : "Business directory"
      }
      className="bg-tourism-surface py-10 sm:py-14"
    >
      <div className="grid gap-5 lg:grid-cols-[240px_minmax(0,1fr)]">
        <aside
          aria-labelledby="directory-filters-heading"
          className="rounded-2xl border border-tourism-border bg-white p-5 lg:self-start"
        >
          <h2
            id="directory-filters-heading"
            className="text-sm font-extrabold text-tourism-navy"
          >
            {filipino
              ? "I-filter ang mga listahan"
              : "Filter listings"}
          </h2>

          <label className="mt-4 block text-[10px] font-bold uppercase tracking-wide text-tourism-muted">
            {filipino
              ? "Uri ng establisimyento"
              : "Establishment type"}

            <select
              value={category}
              onChange={(event) => {
                setCategory(event.target.value);
                resetPage();
              }}
              className="mt-2 min-h-10 w-full rounded-lg border border-tourism-border bg-white px-3 text-sm font-medium text-tourism-navy focus:border-tourism-pink focus:outline-none focus:ring-2 focus:ring-tourism-pink/30"
            >
              <option value="all">
                {filipino
                  ? "Lahat ng uri"
                  : "All types"}
              </option>

              {categories.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </label>

          <button
            type="button"
            onClick={resetFilters}
            disabled={!hasActiveFilters}
            className="mt-5 rounded-sm text-xs font-bold text-tourism-pink transition-colors hover:text-tourism-pink-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-tourism-pink focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-40 motion-reduce:transition-none"
          >
            {filipino
              ? "I-reset ang mga filter"
              : "Reset filters"}
          </button>
        </aside>

        <div>
          <div className="grid gap-3 sm:grid-cols-[minmax(0,1fr)_180px]">
            <label className="flex min-h-11 items-center gap-3 rounded-xl border border-tourism-border bg-white px-4 transition-colors focus-within:border-tourism-pink focus-within:ring-2 focus-within:ring-tourism-pink/30 motion-reduce:transition-none">
              <Search
                aria-hidden="true"
                className="size-4 shrink-0 text-tourism-muted"
              />

              <span className="sr-only">
                {filipino
                  ? "Maghanap ng mga establisimyento"
                  : "Search establishments"}
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
                    ? "Maghanap ng mga establisimyento"
                    : "Search establishments"
                }
                className="min-w-0 flex-1 bg-transparent text-sm text-tourism-navy outline-none placeholder:text-tourism-soft"
              />
            </label>

            <select
              aria-label={
                filipino
                  ? "Pagbukud-bukurin ang mga establisimyento"
                  : "Sort establishment listings"
              }
              value={sort}
              onChange={(event) => {
                setSort(event.target.value);
                resetPage();
              }}
              className="min-h-11 rounded-xl border border-tourism-border bg-white px-3 text-sm font-semibold text-tourism-navy focus:border-tourism-pink focus:outline-none focus:ring-2 focus:ring-tourism-pink/30"
            >
              <option value="rating">
                {filipino
                  ? "Pinakamataas ang rating"
                  : "Highest rated"}
              </option>

              <option value="name">
                {filipino
                  ? "Pangalan A–Z"
                  : "Name A–Z"}
              </option>
            </select>
          </div>

          <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
            <p
              aria-live="polite"
              className="text-sm text-tourism-muted"
            >
              {filteredEstablishments.length}{" "}
              {filipino
                ? filteredEstablishments.length ===
                  1
                  ? "listahan ng establisimyento"
                  : "mga listahan ng establisimyento"
                : filteredEstablishments.length ===
                    1
                  ? "establishment listing"
                  : "establishment listings"}
            </p>

            {hasActiveFilters && (
              <button
                type="button"
                onClick={resetFilters}
                className="rounded-sm text-xs font-bold text-tourism-pink transition-colors hover:text-tourism-pink-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-tourism-pink focus-visible:ring-offset-2 motion-reduce:transition-none"
              >
                {filipino
                  ? "I-clear ang mga filter"
                  : "Clear filters"}
              </button>
            )}
          </div>

          {visibleEstablishments.length > 0 ? (
            <div className="mt-5 grid items-stretch gap-5 md:grid-cols-2">
              {visibleEstablishments.map(
                (establishment) => (
                  <EstablishmentCard
                    key={establishment.id}
                    establishment={establishment}
                    locale={locale}
                  />
                ),
              )}
            </div>
          ) : (
            <div className="mt-5 rounded-2xl border border-dashed border-tourism-border bg-white p-10 text-center">
              <h2 className="text-lg font-extrabold text-tourism-navy">
                {filipino
                  ? "Walang nahanap na listahan"
                  : "No listings found"}
              </h2>

              <p className="mt-2 text-sm text-tourism-muted">
                {filipino
                  ? "Subukang baguhin ang paghahanap o ang napiling uri ng establisimyento."
                  : "Try changing the search or selected establishment type."}
              </p>

              <button
                type="button"
                onClick={resetFilters}
                className="mt-5 rounded-lg bg-tourism-pink px-4 py-2 text-xs font-bold text-white transition-colors hover:bg-tourism-pink-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-tourism-pink focus-visible:ring-offset-2 motion-reduce:transition-none"
              >
                {filipino
                  ? "I-reset ang mga filter"
                  : "Reset filters"}
              </button>
            </div>
          )}

          <PaginationControls
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setPage}
          />
        </div>
      </div>
    </section>
  );
}