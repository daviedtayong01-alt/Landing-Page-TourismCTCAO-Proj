"use client";

import {
  Search,
} from "lucide-react";

import {
  useMemo,
  useState,
} from "react";

import { EstablishmentCard } from "@/components/home/EstablishmentCard";
import { PaginationControls } from "@/components/tourism/PaginationControls";
import type { Establishment } from "@/types/tourism";

const PAGE_SIZE = 2;

interface BusinessDirectoryProps {
  establishments: Establishment[];
}

export function BusinessDirectory({
  establishments,
}: BusinessDirectoryProps) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("all");
  const [sort, setSort] = useState("rating");
  const [page, setPage] = useState(1);
  const categories = Array.from(new Set(establishments.map((item) => item.category)));

  const filteredEstablishments = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    const result = establishments.filter((item) => {
      const matchesCategory = category === "all" || item.category === category;
      const matchesQuery =
        !normalizedQuery ||
        `${item.name} ${item.category} ${item.location} ${item.description}`
          .toLowerCase()
          .includes(normalizedQuery);

      return matchesCategory && matchesQuery;
    });

    return [...result].sort((first, second) =>
      sort === "name"
        ? first.name.localeCompare(second.name)
        : second.rating - first.rating,
    );
  }, [category, establishments, query, sort]);

  const totalPages = Math.max(1, Math.ceil(filteredEstablishments.length / PAGE_SIZE));
  const currentPage = Math.min(page, totalPages);
  const visibleEstablishments = filteredEstablishments.slice(
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
          <h2 className="text-sm font-extrabold text-tourism-navy">Filter listings</h2>
          <label className="mt-4 block text-[10px] font-bold uppercase tracking-wide text-tourism-muted">
            Establishment type
            <select
              value={category}
              onChange={(event) => {
                setCategory(event.target.value);
                resetPage();
              }}
              className="mt-2 min-h-10 w-full rounded-lg border border-tourism-border bg-white px-3 text-sm font-medium text-tourism-navy"
            >
              <option value="all">All types</option>
              {categories.map((item) => <option key={item} value={item}>{item}</option>)}
            </select>
          </label>
          <button
            type="button"
            onClick={() => {
              setQuery("");
              setCategory("all");
              setSort("rating");
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
              <span className="sr-only">Search accredited establishments</span>
              <input
                type="search"
                value={query}
                onChange={(event) => {
                  setQuery(event.target.value);
                  resetPage();
                }}
                placeholder="Search accredited establishments"
                className="min-w-0 flex-1 text-sm text-tourism-navy outline-none placeholder:text-tourism-soft"
              />
            </label>

            <select
              aria-label="Sort establishment listings"
              value={sort}
              onChange={(event) => {
                setSort(event.target.value);
                resetPage();
              }}
              className="min-h-11 rounded-xl border border-tourism-border bg-white px-3 text-sm font-semibold text-tourism-navy"
            >
              <option value="rating">Highest rated</option>
              <option value="name">Name A–Z</option>
            </select>
          </div>

          <p aria-live="polite" className="mt-5 text-sm text-tourism-muted">
            {filteredEstablishments.length} accredited listing{filteredEstablishments.length === 1 ? "" : "s"}
          </p>

          {visibleEstablishments.length > 0 ? (
            <div className="mt-5 grid items-stretch gap-5 md:grid-cols-2">
              {visibleEstablishments.map((establishment) => (
                <EstablishmentCard key={establishment.id} establishment={establishment} />
              ))}
            </div>
          ) : (
            <div className="mt-5 rounded-2xl border border-dashed border-tourism-border bg-white p-10 text-center">
              <h2 className="text-lg font-extrabold text-tourism-navy">No listings found</h2>
              <p className="mt-2 text-sm text-tourism-muted">Try changing the search or selected establishment type.</p>
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
