"use client";

import Link from "next/link";
import { MapPin, Search } from "lucide-react";

export function HeroSearch() {
  return (
    <div className="w-full max-w-3xl">
      <form
        action="/search"
        method="get"
        className="overflow-hidden rounded-xl bg-white shadow-[0_16px_50px_rgba(0,0,0,0.18)]"
      >
        <div className="flex min-h-14 flex-col sm:flex-row">
          <label className="flex min-w-0 flex-1 items-center gap-3 px-4">
            <Search
              className="size-5 shrink-0 text-neutral-500"
              aria-hidden="true"
            />

            <span className="sr-only">
              Search tourism listings
            </span>

            <input
              name="q"
              type="search"
              autoComplete="off"
              placeholder="Search hotels, cascades, landmarks..."
              className="min-w-0 flex-1 bg-transparent text-sm text-neutral-900 outline-none placeholder:text-neutral-500"
            />
          </label>

          <label className="border-t border-neutral-200 px-4 sm:border-l sm:border-t-0">
            <span className="sr-only">Category</span>

            <select
              name="category"
              defaultValue="all"
              className="h-full min-h-12 w-full bg-white text-sm font-medium text-neutral-800 outline-none sm:min-h-14 sm:w-40"
            >
              <option value="all">
                All Categories
              </option>

              <option value="destinations">
                Destinations
              </option>

              <option value="establishments">
                Establishments
              </option>

              <option value="events">
                Events
              </option>

              <option value="transport">
                Transport
              </option>
            </select>
          </label>

          <button
            type="submit"
            className="min-h-12 bg-[var(--tourism-primary)] px-7 text-sm font-semibold text-white transition-colors hover:bg-[var(--tourism-primary-dark)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-white sm:min-h-14"
          >
            Search
          </button>
        </div>
      </form>

      <div className="mt-3 flex flex-wrap gap-2">
        <Link
          href="/business-directory?accredited=true"
          className="inline-flex min-h-9 items-center gap-2 rounded-full border border-white/30 bg-black/15 px-3.5 text-xs font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
        >
          <span
            aria-hidden="true"
            className="size-1.5 rounded-full bg-[var(--tourism-accent)]"
          />

          DOT Accredited Only
        </Link>

        <Link
          href="/search?category=destinations"
          className="inline-flex min-h-9 items-center gap-2 rounded-full border border-white/30 bg-black/15 px-3.5 text-xs font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
        >
          <MapPin
            className="size-3.5"
            aria-hidden="true"
          />

          View on Map
        </Link>
      </div>
    </div>
  );
}