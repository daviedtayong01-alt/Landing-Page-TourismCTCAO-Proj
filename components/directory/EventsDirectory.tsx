"use client";

import Link from "next/link";
import {
  CalendarDays,
  MapPin,
  Search,
} from "lucide-react";
import { useMemo, useState } from "react";

import { TourismImage } from "@/components/home/TourismImage";
import { PaginationControls } from "@/components/tourism/PaginationControls";
import type { Locale } from "@/lib/i18n/config";
import type { TourismEvent } from "@/types/tourism";

const PAGE_SIZE = 2;

interface EventsDirectoryProps {
  events: TourismEvent[];
  locale: Locale;
}

export function EventsDirectory({
  events,
  locale,
}: EventsDirectoryProps) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("all");
  const [page, setPage] = useState(1);

  const categories = useMemo(
    () =>
      Array.from(
        new Set(
          events.map(
            (event) => event.category[locale],
          ),
        ),
      ).sort((first, second) =>
        first.localeCompare(second, locale),
      ),
    [events, locale],
  );

  const filteredEvents = useMemo(() => {
    const normalizedQuery = query
      .trim()
      .toLocaleLowerCase(locale);

    return events.filter((event) => {
      const localizedCategory =
        event.category[locale];

      const matchesCategory =
        category === "all" ||
        localizedCategory === category;

      const searchableText = [
        event.name[locale],
        localizedCategory,
        event.location[locale],
        event.dateLabel[locale],
        event.description[locale],
      ]
        .join(" ")
        .toLocaleLowerCase(locale);

      const matchesQuery =
        !normalizedQuery ||
        searchableText.includes(normalizedQuery);

      return matchesCategory && matchesQuery;
    });
  }, [category, events, locale, query]);

  const totalPages = Math.max(
    1,
    Math.ceil(
      filteredEvents.length / PAGE_SIZE,
    ),
  );

  const currentPage = Math.min(
    page,
    totalPages,
  );

  const visibleEvents = filteredEvents.slice(
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
          ? "Direktoryo ng mga kaganapan"
          : "Events directory"
      }
      className="bg-tourism-surface py-10 sm:py-14"
    >
      <div className="grid gap-3 sm:grid-cols-[minmax(0,1fr)_200px]">
        <label className="flex min-h-11 min-w-0 items-center gap-3 rounded-xl border border-tourism-border bg-white px-4 transition-colors focus-within:border-tourism-pink focus-within:ring-2 focus-within:ring-tourism-pink/30 motion-reduce:transition-none">
          <Search
            aria-hidden="true"
            className="size-4 shrink-0 text-tourism-muted"
          />

          <span className="sr-only">
            {filipino
              ? "Maghanap ng mga kaganapan at update"
              : "Search events and updates"}
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
                ? "Maghanap ng mga kaganapan at update"
                : "Search events and updates"
            }
            className="min-w-0 flex-1 bg-transparent text-sm text-tourism-navy outline-none placeholder:text-tourism-soft"
          />
        </label>

        <select
          aria-label={
            filipino
              ? "I-filter ang mga kaganapan ayon sa kategorya"
              : "Filter events by category"
          }
          value={category}
          onChange={(event) => {
            setCategory(event.target.value);
            resetPage();
          }}
          className="min-h-11 rounded-xl border border-tourism-border bg-white px-3 text-sm font-semibold text-tourism-navy focus:border-tourism-pink focus:outline-none focus:ring-2 focus:ring-tourism-pink/30"
        >
          <option value="all">
            {filipino
              ? "Lahat ng kategorya"
              : "All categories"}
          </option>

          {categories.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
      </div>

      <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
        <p
          aria-live="polite"
          className="text-sm text-tourism-muted"
        >
          {filteredEvents.length}{" "}
          {filipino
            ? filteredEvents.length === 1
              ? "kaganapan"
              : "mga kaganapan"
            : filteredEvents.length === 1
              ? "event"
              : "events"}{" "}
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

      {visibleEvents.length > 0 ? (
        <div className="mt-5 grid items-stretch gap-5 md:grid-cols-2">
          {visibleEvents.map((event) => (
            <article
              key={event.id}
              className="group flex h-full flex-col overflow-hidden rounded-2xl border border-tourism-border bg-white shadow-[0_8px_25px_rgba(18,59,96,.08)]"
            >
              <div className="relative aspect-[1.8] overflow-hidden">
                <TourismImage
                  src={event.image}
                  alt={event.imageAlt[locale]}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  fallbackLabel={
                    filipino
                      ? "Hindi available ang larawan ng kaganapan"
                      : "Event photography unavailable"
                  }
                  className="transition-transform duration-500 group-hover:scale-105 motion-reduce:transition-none motion-reduce:group-hover:scale-100"
                />
              </div>

              <div className="flex flex-1 flex-col p-5">
                <p className="text-[9px] font-extrabold uppercase tracking-wide text-tourism-pink">
                  {event.category[locale]}
                </p>

                <h2 className="mt-2 text-xl font-extrabold leading-6 text-tourism-navy">
                  {event.name[locale]}
                </h2>

                <div className="mt-3 space-y-1.5 text-xs text-tourism-muted">
                  <p className="flex items-center gap-2">
                    <CalendarDays
                      aria-hidden="true"
                      className="size-3.5 shrink-0"
                    />

                    <span>
                      {event.dateLabel[locale]}
                    </span>
                  </p>

                  <p className="flex items-center gap-2">
                    <MapPin
                      aria-hidden="true"
                      className="size-3.5 shrink-0"
                    />

                    <span>
                      {event.location[locale]}
                    </span>
                  </p>
                </div>

                <p className="mt-4 text-sm leading-6 text-tourism-muted">
                  {event.description[locale]}
                </p>

                <Link
                  href={`/events/${event.id}`}
                  className="mt-auto inline-flex w-fit rounded-sm pt-5 text-xs font-extrabold text-tourism-navy transition-colors hover:text-tourism-pink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-tourism-pink focus-visible:ring-offset-2 motion-reduce:transition-none"
                >
                  {filipino
                    ? "Magbasa pa"
                    : "Read more"}{" "}
                  →
                </Link>
              </div>
            </article>
          ))}
        </div>
      ) : (
        <div className="mt-6 rounded-2xl border border-dashed border-tourism-border bg-white p-10 text-center">
          <h2 className="text-lg font-extrabold text-tourism-navy">
            {filipino
              ? "Walang nahanap na update"
              : "No updates found"}
          </h2>

          <p className="mt-2 text-sm text-tourism-muted">
            {filipino
              ? "Subukang baguhin ang mga termino ng paghahanap o ang kategorya."
              : "Try changing the search terms or category."}
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