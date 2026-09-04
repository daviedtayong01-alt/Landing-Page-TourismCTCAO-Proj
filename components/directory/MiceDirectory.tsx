"use client";

import { Search } from "lucide-react";
import { useMemo, useState } from "react";

import { MiceVenueCard } from "@/components/tourism/MiceVenueCard";
import { PaginationControls } from "@/components/tourism/PaginationControls";
import type { Locale } from "@/lib/i18n/config";
import type { MiceVenue } from "@/types/tourism";

const PAGE_SIZE = 2;

type VenueSort = "capacity" | "name";

interface MiceDirectoryProps {
  venues: MiceVenue[];
  locale: Locale;
}

export function MiceDirectory({
  venues,
  locale,
}: MiceDirectoryProps) {
  const [query, setQuery] = useState("");
  const [venueType, setVenueType] =
    useState("all");
  const [capacity, setCapacity] =
    useState("all");
  const [sort, setSort] =
    useState<VenueSort>("capacity");
  const [page, setPage] = useState(1);

  const venueTypes = useMemo(
    () =>
      Array.from(
        new Set(
          venues.map(
            (venue) =>
              venue.venueType[locale],
          ),
        ),
      ).sort((first, second) =>
        first.localeCompare(second, locale),
      ),
    [locale, venues],
  );

  const filteredVenues = useMemo(() => {
    const normalizedQuery = query
      .trim()
      .toLocaleLowerCase(locale);

    const minimumCapacity =
      capacity === "all"
        ? 0
        : Number(capacity);

    const result = venues.filter((venue) => {
      const localizedVenueType =
        venue.venueType[locale];

      const matchesType =
        venueType === "all" ||
        localizedVenueType === venueType;

      const matchesCapacity =
        venue.capacityValue >=
        minimumCapacity;

      const searchableText = [
        venue.name[locale],
        venue.location[locale],
        localizedVenueType,
        venue.capacity[locale],
        ...venue.tags.map(
          (tag) => tag[locale],
        ),
      ]
        .join(" ")
        .toLocaleLowerCase(locale);

      const matchesQuery =
        !normalizedQuery ||
        searchableText.includes(normalizedQuery);

      return (
        matchesType &&
        matchesCapacity &&
        matchesQuery
      );
    });

    return [...result].sort(
      (first, second) => {
        if (sort === "name") {
          return first.name[locale].localeCompare(
            second.name[locale],
            locale,
          );
        }

        const capacityDifference =
          second.capacityValue -
          first.capacityValue;

        return capacityDifference !== 0
          ? capacityDifference
          : first.name[locale].localeCompare(
              second.name[locale],
              locale,
            );
      },
    );
  }, [
    capacity,
    locale,
    query,
    sort,
    venueType,
    venues,
  ]);

  const totalPages = Math.max(
    1,
    Math.ceil(
      filteredVenues.length /
        PAGE_SIZE,
    ),
  );

  const currentPage = Math.min(
    page,
    totalPages,
  );

  const visibleVenues =
    filteredVenues.slice(
      (currentPage - 1) * PAGE_SIZE,
      currentPage * PAGE_SIZE,
    );

  const hasActiveFilters =
    query.trim() !== "" ||
    venueType !== "all" ||
    capacity !== "all" ||
    sort !== "capacity";

  function resetPage() {
    setPage(1);
  }

  function resetFilters() {
    setQuery("");
    setVenueType("all");
    setCapacity("all");
    setSort("capacity");
    resetPage();
  }

  const filipino = locale === "fil";

  return (
    <section
      aria-label={
        filipino
          ? "Direktoryo ng mga MICE venue"
          : "MICE venue directory"
      }
      className="bg-tourism-surface py-10 sm:py-14"
    >
      <div className="grid gap-5 lg:grid-cols-[240px_minmax(0,1fr)]">
        <aside
          aria-labelledby="mice-filter-heading"
          className="rounded-2xl border border-tourism-border bg-white p-5 lg:self-start"
        >
          <h2
            id="mice-filter-heading"
            className="text-sm font-extrabold text-tourism-navy"
          >
            {filipino
              ? "Pinuhin ang mga venue"
              : "Refine venues"}
          </h2>

          <fieldset className="mt-4">
            <legend className="sr-only">
              {filipino
                ? "Mga filter ng venue"
                : "Venue filters"}
            </legend>

            <label className="block text-[10px] font-bold uppercase tracking-wide text-tourism-muted">
              {filipino
                ? "Uri ng venue"
                : "Venue type"}

              <select
                value={venueType}
                onChange={(event) => {
                  setVenueType(
                    event.target.value,
                  );
                  resetPage();
                }}
                className="mt-2 min-h-10 w-full rounded-lg border border-tourism-border bg-white px-3 text-sm font-medium text-tourism-navy focus:border-tourism-pink focus:outline-none focus:ring-2 focus:ring-tourism-pink/30"
              >
                <option value="all">
                  {filipino
                    ? "Lahat ng uri ng venue"
                    : "All venue types"}
                </option>

                {venueTypes.map((item) => (
                  <option
                    key={item}
                    value={item}
                  >
                    {item}
                  </option>
                ))}
              </select>
            </label>

            <label className="mt-4 block text-[10px] font-bold uppercase tracking-wide text-tourism-muted">
              {filipino
                ? "Minimum na kapasidad"
                : "Minimum capacity"}

              <select
                value={capacity}
                onChange={(event) => {
                  setCapacity(
                    event.target.value,
                  );
                  resetPage();
                }}
                className="mt-2 min-h-10 w-full rounded-lg border border-tourism-border bg-white px-3 text-sm font-medium text-tourism-navy focus:border-tourism-pink focus:outline-none focus:ring-2 focus:ring-tourism-pink/30"
              >
                <option value="all">
                  {filipino
                    ? "Anumang kapasidad"
                    : "Any capacity"}
                </option>

                <option value="400">
                  {filipino
                    ? "400+ bisita"
                    : "400+ guests"}
                </option>

                <option value="800">
                  {filipino
                    ? "800+ bisita"
                    : "800+ guests"}
                </option>

                <option value="5000">
                  {filipino
                    ? "5,000+ bisita"
                    : "5,000+ guests"}
                </option>
              </select>
            </label>
          </fieldset>

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
            <label className="flex min-h-11 min-w-0 items-center gap-3 rounded-xl border border-tourism-border bg-white px-4 transition-colors focus-within:border-tourism-pink focus-within:ring-2 focus-within:ring-tourism-pink/30 motion-reduce:transition-none">
              <Search
                aria-hidden="true"
                className="size-4 shrink-0 text-tourism-muted"
              />

              <span className="sr-only">
                {filipino
                  ? "Maghanap ng MICE venue"
                  : "Search MICE venues"}
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
                    ? "Maghanap ng venue, lokasyon, kapasidad, o amenity"
                    : "Search venue, location, capacity, or amenity"
                }
                className="min-w-0 flex-1 bg-transparent text-sm text-tourism-navy outline-none placeholder:text-tourism-soft"
              />
            </label>

            <select
              aria-label={
                filipino
                  ? "Pagbukud-bukurin ang mga MICE venue"
                  : "Sort MICE venues"
              }
              value={sort}
              onChange={(event) => {
                const value =
                  event.target.value;

                if (
                  value === "capacity" ||
                  value === "name"
                ) {
                  setSort(value);
                  resetPage();
                }
              }}
              className="min-h-11 rounded-xl border border-tourism-border bg-white px-3 text-sm font-semibold text-tourism-navy focus:border-tourism-pink focus:outline-none focus:ring-2 focus:ring-tourism-pink/30"
            >
              <option value="capacity">
                {filipino
                  ? "Pinakamalaking kapasidad"
                  : "Largest capacity"}
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
              {filteredVenues.length}{" "}
              {filipino
                ? filteredVenues.length === 1
                  ? "venue"
                  : "mga venue"
                : filteredVenues.length === 1
                  ? "venue"
                  : "venues"}{" "}
              {filipino ? "ang nahanap" : "found"}
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

          {visibleVenues.length > 0 ? (
            <div className="mt-5 grid items-stretch gap-5 md:grid-cols-2">
              {visibleVenues.map((venue) => (
                <MiceVenueCard
                  key={venue.id}
                  venue={venue}
                  locale={locale}
                />
              ))}
            </div>
          ) : (
            <div className="mt-5 rounded-2xl border border-dashed border-tourism-border bg-white p-10 text-center">
              <h2 className="text-lg font-extrabold text-tourism-navy">
                {filipino
                  ? "Walang nahanap na venue"
                  : "No venues found"}
              </h2>

              <p className="mt-2 text-sm text-tourism-muted">
                {filipino
                  ? "Subukang palawakin ang saklaw ng kapasidad, baguhin ang uri ng venue, o ayusin ang paghahanap."
                  : "Try widening the capacity range, changing the venue type, or adjusting your search."}
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