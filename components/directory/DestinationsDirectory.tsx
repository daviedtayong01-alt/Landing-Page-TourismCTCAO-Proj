"use client";

import {
  Search,
} from "lucide-react";

import {
  useMemo,
  useState,
} from "react";

import { DestinationCard } from "@/components/tourism/DestinationCard";
import { PaginationControls } from "@/components/tourism/PaginationControls";
import type { Destination } from "@/types/tourism";

const PAGE_SIZE = 3;

interface DestinationsDirectoryProps {
  destinations: Destination[];
}

export function DestinationsDirectory({
  destinations,
}: DestinationsDirectoryProps) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("all");
  const [page, setPage] = useState(1);
  const categories = Array.from(
    new Set(destinations.map((destination) => destination.category)),
  );

  const filteredDestinations = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return destinations.filter((destination) => {
      const matchesCategory =
        category === "all" || destination.category === category;
      const matchesQuery =
        !normalizedQuery ||
        `${destination.name} ${destination.location} ${destination.description}`
          .toLowerCase()
          .includes(normalizedQuery);

      return matchesCategory && matchesQuery;
    });
  }, [category, destinations, query]);

  const totalPages = Math.max(1, Math.ceil(filteredDestinations.length / PAGE_SIZE));
  const currentPage = Math.min(page, totalPages);
  const visibleDestinations = filteredDestinations.slice(
    (currentPage - 1) * PAGE_SIZE,
    currentPage * PAGE_SIZE,
  );

  function resetPage() {
    setPage(1);
  }

  return (
    <section className="bg-tourism-surface py-10 sm:py-14">
      <div className="rounded-2xl border border-tourism-border bg-white p-4 shadow-sm sm:p-5">
        <div className="grid gap-3 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center">
          <label className="flex min-h-11 items-center gap-3 rounded-xl border border-tourism-border bg-tourism-surface px-4">
            <Search aria-hidden="true" className="size-4 shrink-0 text-tourism-muted" />
            <span className="sr-only">Search destinations</span>
            <input
              type="search"
              value={query}
              onChange={(event) => {
                setQuery(event.target.value);
                resetPage();
              }}
              placeholder="Search destinations"
              className="min-w-0 flex-1 bg-transparent text-sm text-tourism-navy outline-none placeholder:text-tourism-soft"
            />
          </label>

          <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hidden">
            <button
              type="button"
              aria-pressed={category === "all"}
              onClick={() => {
                setCategory("all");
                resetPage();
              }}
              className={`shrink-0 rounded-full px-4 py-2 text-[10px] font-bold transition ${
                category === "all"
                  ? "bg-tourism-navy text-white"
                  : "border border-tourism-border text-tourism-navy hover:border-tourism-pink"
              }`}
            >
              All destinations
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
                className={`shrink-0 rounded-full px-4 py-2 text-[10px] font-bold transition ${
                  category === item
                    ? "bg-tourism-pink text-white"
                    : "border border-tourism-border text-tourism-navy hover:border-tourism-pink"
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </div>

      <p aria-live="polite" className="mt-6 text-sm text-tourism-muted">
        {filteredDestinations.length} destination{filteredDestinations.length === 1 ? "" : "s"} found
      </p>

      {visibleDestinations.length > 0 ? (
        <div className="mt-5 grid items-stretch gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {visibleDestinations.map((destination) => (
            <DestinationCard key={destination.id} destination={destination} />
          ))}
        </div>
      ) : (
        <div className="mt-5 rounded-2xl border border-dashed border-tourism-border bg-white p-10 text-center">
          <h2 className="text-lg font-extrabold text-tourism-navy">No destinations found</h2>
          <p className="mt-2 text-sm text-tourism-muted">Try a different search or clear the active filter.</p>
          <button
            type="button"
            onClick={() => {
              setQuery("");
              setCategory("all");
              resetPage();
            }}
            className="mt-5 rounded-lg bg-tourism-pink px-4 py-2 text-xs font-bold text-white"
          >
            Clear filters
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
