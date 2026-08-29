"use client";

import Link from "next/link";
import { CalendarDays, MapPin, Search } from "lucide-react";
import { useMemo, useState } from "react";

import { PaginationControls } from "@/components/tourism/PaginationControls";
import { TourismImage } from "@/components/home/TourismImage";
import type { TourismEvent } from "@/types/tourism";

const PAGE_SIZE = 2;

interface EventsDirectoryProps {
  events: TourismEvent[];
}

export function EventsDirectory({ events }: EventsDirectoryProps) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("all");
  const [page, setPage] = useState(1);
  const categories = Array.from(new Set(events.map((event) => event.category)));

  const filteredEvents = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return events.filter((event) => {
      const matchesCategory = category === "all" || event.category === category;
      const matchesQuery =
        !normalizedQuery ||
        `${event.name} ${event.category} ${event.location} ${event.description}`
          .toLowerCase()
          .includes(normalizedQuery);

      return matchesCategory && matchesQuery;
    });
  }, [category, events, query]);

  const totalPages = Math.max(1, Math.ceil(filteredEvents.length / PAGE_SIZE));
  const currentPage = Math.min(page, totalPages);
  const visibleEvents = filteredEvents.slice((currentPage - 1) * PAGE_SIZE, currentPage * PAGE_SIZE);

  function resetPage() {
    setPage(1);
  }

  return (
    <section className="bg-tourism-surface py-10 sm:py-14">
      <div className="grid gap-3 sm:grid-cols-[minmax(0,1fr)_200px]">
        <label className="flex min-h-11 items-center gap-3 rounded-xl border border-tourism-border bg-white px-4">
          <Search aria-hidden="true" className="size-4 shrink-0 text-tourism-muted" />
          <span className="sr-only">Search events and updates</span>
          <input
            type="search"
            value={query}
            onChange={(event) => {
              setQuery(event.target.value);
              resetPage();
            }}
            placeholder="Search events and updates"
            className="min-w-0 flex-1 text-sm text-tourism-navy outline-none placeholder:text-tourism-soft"
          />
        </label>
        <select
          aria-label="Filter events by category"
          value={category}
          onChange={(event) => {
            setCategory(event.target.value);
            resetPage();
          }}
          className="min-h-11 rounded-xl border border-tourism-border bg-white px-3 text-sm font-semibold text-tourism-navy"
        >
          <option value="all">All categories</option>
          {categories.map((item) => <option key={item} value={item}>{item}</option>)}
        </select>
      </div>

      {visibleEvents.length > 0 ? (
        <div className="mt-6 grid items-stretch gap-5 md:grid-cols-2">
          {visibleEvents.map((event) => (
            <article key={event.id} className="group flex h-full flex-col overflow-hidden rounded-2xl border border-tourism-border bg-white shadow-[0_8px_25px_rgba(18,59,96,.08)]">
              <div className="relative aspect-[1.8] overflow-hidden">
                <TourismImage src={event.image} alt={event.imageAlt} sizes="(max-width: 768px) 100vw, 50vw" fallbackLabel="Event photography unavailable" />
              </div>
              <div className="flex flex-1 flex-col p-5">
                <p className="text-[9px] font-extrabold uppercase tracking-wide text-tourism-pink">{event.category}</p>
                <h2 className="mt-2 text-xl font-extrabold leading-6 text-tourism-navy">{event.name}</h2>
                <div className="mt-3 space-y-1.5 text-xs text-tourism-muted">
                  <p className="flex items-center gap-2"><CalendarDays className="size-3.5" />{event.dateLabel}</p>
                  <p className="flex items-center gap-2"><MapPin className="size-3.5" />{event.location}</p>
                </div>
                <p className="mt-4 text-sm leading-6 text-tourism-muted">{event.description}</p>
                <Link href={`/events/${event.id}`} className="mt-auto pt-5 text-xs font-extrabold text-tourism-navy hover:text-tourism-pink">Read more →</Link>
              </div>
            </article>
          ))}
        </div>
      ) : (
        <div className="mt-6 rounded-2xl border border-dashed border-tourism-border bg-white p-10 text-center">
          <h2 className="text-lg font-extrabold text-tourism-navy">No updates found</h2>
          <p className="mt-2 text-sm text-tourism-muted">Try changing the search terms or category.</p>
        </div>
      )}

      <PaginationControls currentPage={currentPage} totalPages={totalPages} onPageChange={setPage} />
    </section>
  );
}
