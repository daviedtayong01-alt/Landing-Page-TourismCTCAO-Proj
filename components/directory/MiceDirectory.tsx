"use client";

import { Search } from "lucide-react";
import { useMemo, useState } from "react";

import { MiceVenueCard } from "@/components/tourism/MiceVenueCard";
import { PaginationControls } from "@/components/tourism/PaginationControls";
import type { MiceVenue } from "@/types/tourism";

const PAGE_SIZE = 2;

interface MiceDirectoryProps {
  venues: MiceVenue[];
}

export function MiceDirectory({ venues }: MiceDirectoryProps) {
  const [query, setQuery] = useState("");
  const [venueType, setVenueType] = useState("all");
  const [capacity, setCapacity] = useState("all");
  const [sort, setSort] = useState("capacity");
  const [page, setPage] = useState(1);
  const venueTypes = Array.from(new Set(venues.map((venue) => venue.venueType)));

  const filteredVenues = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    const minimumCapacity = capacity === "all" ? 0 : Number(capacity);
    const result = venues.filter((venue) => {
      const matchesType = venueType === "all" || venue.venueType === venueType;
      const matchesCapacity = venue.capacityValue >= minimumCapacity;
      const matchesQuery =
        !normalizedQuery ||
        `${venue.name} ${venue.location} ${venue.venueType} ${venue.tags.join(" ")}`
          .toLowerCase()
          .includes(normalizedQuery);

      return matchesType && matchesCapacity && matchesQuery;
    });

    return [...result].sort((first, second) =>
      sort === "name"
        ? first.name.localeCompare(second.name)
        : second.capacityValue - first.capacityValue,
    );
  }, [capacity, query, sort, venueType, venues]);

  const totalPages = Math.max(1, Math.ceil(filteredVenues.length / PAGE_SIZE));
  const currentPage = Math.min(page, totalPages);
  const visibleVenues = filteredVenues.slice(
    (currentPage - 1) * PAGE_SIZE,
    currentPage * PAGE_SIZE,
  );

  function resetPage() {
    setPage(1);
  }

  return (
    <section className="bg-tourism-surface py-10 sm:py-14">
      <div className="grid gap-5 lg:grid-cols-[240px_minmax(0,1fr)]">
        <aside className="rounded-2xl border border-tourism-border bg-white p-5 lg:self-start">
          <h2 className="text-sm font-extrabold text-tourism-navy">Refine venues</h2>
          <label className="mt-4 block text-[10px] font-bold uppercase tracking-wide text-tourism-muted">
            Venue type
            <select
              value={venueType}
              onChange={(event) => {
                setVenueType(event.target.value);
                resetPage();
              }}
              className="mt-2 min-h-10 w-full rounded-lg border border-tourism-border bg-white px-3 text-sm font-medium text-tourism-navy"
            >
              <option value="all">All venue types</option>
              {venueTypes.map((item) => <option key={item} value={item}>{item}</option>)}
            </select>
          </label>
          <label className="mt-4 block text-[10px] font-bold uppercase tracking-wide text-tourism-muted">
            Minimum capacity
            <select
              value={capacity}
              onChange={(event) => {
                setCapacity(event.target.value);
                resetPage();
              }}
              className="mt-2 min-h-10 w-full rounded-lg border border-tourism-border bg-white px-3 text-sm font-medium text-tourism-navy"
            >
              <option value="all">Any capacity</option>
              <option value="400">400+ guests</option>
              <option value="800">800+ guests</option>
              <option value="5000">5,000+ guests</option>
            </select>
          </label>
          <button
            type="button"
            onClick={() => {
              setQuery("");
              setVenueType("all");
              setCapacity("all");
              setSort("capacity");
              resetPage();
            }}
            className="mt-5 text-xs font-bold text-tourism-pink hover:text-tourism-pink-dark"
          >
            Reset filters
          </button>
        </aside>

        <div>
          <div className="grid gap-3 sm:grid-cols-[minmax(0,1fr)_180px]">
            <label className="flex min-h-11 items-center gap-3 rounded-xl border border-tourism-border bg-white px-4">
              <Search aria-hidden="true" className="size-4 shrink-0 text-tourism-muted" />
              <span className="sr-only">Search MICE venues</span>
              <input
                type="search"
                value={query}
                onChange={(event) => {
                  setQuery(event.target.value);
                  resetPage();
                }}
                placeholder="Search venue name or amenity"
                className="min-w-0 flex-1 text-sm text-tourism-navy outline-none placeholder:text-tourism-soft"
              />
            </label>
            <select
              aria-label="Sort MICE venues"
              value={sort}
              onChange={(event) => {
                setSort(event.target.value);
                resetPage();
              }}
              className="min-h-11 rounded-xl border border-tourism-border bg-white px-3 text-sm font-semibold text-tourism-navy"
            >
              <option value="capacity">Largest capacity</option>
              <option value="name">Name A–Z</option>
            </select>
          </div>

          <p aria-live="polite" className="mt-5 text-sm text-tourism-muted">
            {filteredVenues.length} venue{filteredVenues.length === 1 ? "" : "s"} found
          </p>

          {visibleVenues.length > 0 ? (
            <div className="mt-5 grid items-stretch gap-5 md:grid-cols-2">
              {visibleVenues.map((venue) => <MiceVenueCard key={venue.id} venue={venue} />)}
            </div>
          ) : (
            <div className="mt-5 rounded-2xl border border-dashed border-tourism-border bg-white p-10 text-center">
              <h2 className="text-lg font-extrabold text-tourism-navy">No venues found</h2>
              <p className="mt-2 text-sm text-tourism-muted">Try widening the capacity range or changing the venue type.</p>
            </div>
          )}

          <PaginationControls currentPage={currentPage} totalPages={totalPages} onPageChange={setPage} />
        </div>
      </div>
    </section>
  );
}
