"use client";

import {
  Search,
} from "lucide-react";

import {
  type FormEvent,
  useState,
} from "react";

import {
  useRouter,
} from "next/navigation";

import { Container } from "@/components/layout/Container";

const categories = [
  "All",
  "Tourist Spots",
  "DOT Accredited",
  "Hotels",
  "Restaurants",
  "Enterprises",
  "Guides",
  "Transport",
  "MICE",
] as const;

const popularFilters = [
  "Eco-Tourism",
  "Waterfalls",
  "Cultural Heritage",
  "DOT Grade A",
  "Near City Center",
] as const;

const categorySearchKinds: Record<
  Exclude<(typeof categories)[number], "All">,
  "destinations" | "establishments" | "mice" | "transport"
> = {
  "Tourist Spots": "destinations",
  "DOT Accredited": "establishments",
  Hotels: "establishments",
  Restaurants: "establishments",
  Enterprises: "establishments",
  Guides: "establishments",
  Transport: "transport",
  MICE: "mice",
};

export function HeroSearch() {
  const router =
    useRouter();

  const [query, setQuery] =
    useState("");

  function submitSearch(
    event: FormEvent<HTMLFormElement>,
  ) {
    event.preventDefault();

    const params =
      new URLSearchParams();

    const trimmed =
      query.trim();

    if (trimmed) {
      params.set(
        "q",
        trimmed,
      );
    }

    const search =
      params.toString();

    router.push(
      `/search${
        search
          ? `?${search}`
          : ""
      }`,
    );
  }

  function selectCategory(
    category: string,
  ) {
    if (
      category ===
      "All"
    ) {
      router.push(
        "/search",
      );

      return;
    }

    const params =
      new URLSearchParams();

    params.set(
      "category",
      categorySearchKinds[category],
    );

    router.push(
      `/search?${params.toString()}`,
    );
  }

  function selectPopularFilter(
    filter: string,
  ) {
    const params =
      new URLSearchParams();

    params.set(
      "q",
      filter,
    );

    router.push(
      `/search?${params.toString()}`,
    );
  }

  return (
    <section
      id="explore"
      className="bg-tourism-surface py-11 sm:py-14"
    >
      <Container>
        {/*
         * DEBUG: SEARCH_ALIGNMENT
         *
         * Every row below intentionally lives inside the same
         * Container. Do not add independent horizontal padding
         * to these rows; doing so recreates the alignment drift
         * visible in the previous implementation.
         */}

        <h2 className="text-xl font-extrabold tracking-tight text-tourism-navy sm:text-2xl">
          Where would you like to explore?
        </h2>

        <form
          onSubmit={
            submitSearch
          }
          className="mt-6 flex min-h-14 flex-col overflow-hidden rounded-full bg-white shadow-[0_12px_35px_rgba(18,59,96,.10)] sm:flex-row"
        >
          <label className="flex min-w-0 flex-1 items-center gap-3 px-5">
            <Search
              aria-hidden="true"
              className="size-4 shrink-0 text-tourism-navy/55"
            />

            <span className="sr-only">
              Search tourism listings
            </span>

            <input
              type="search"
              value={query}
              onChange={(event) =>
                setQuery(
                  event.target
                    .value,
                )
              }
              placeholder="Search destinations, waterfalls, hotels, DOT accredited guides..."
              className="min-w-0 w-full bg-transparent text-sm text-tourism-navy outline-none placeholder:text-tourism-soft"
            />
          </label>

          <button
            type="submit"
            className="min-h-14 shrink-0 bg-tourism-pink px-8 text-xs font-extrabold text-white transition hover:bg-tourism-pink-dark sm:px-10"
          >
            Search Now
          </button>
        </form>

        {/* =================================================
            CATEGORY ROW
            ================================================= */}

        <div className="mt-5 overflow-x-auto scrollbar-hidden">
          <div className="flex min-w-max items-center gap-2">
            {categories.map(
              (
                category,
                index,
              ) => (
                <button
                  key={
                    category
                  }
                  type="button"
                  aria-pressed={
                    index ===
                    0
                  }
                  onClick={() =>
                    selectCategory(
                      category,
                    )
                  }
                  className={`rounded-full px-4 py-2 text-[9px] font-bold transition ${
                    index === 0
                      ? "bg-tourism-navy text-white"
                      : "bg-white text-tourism-navy hover:bg-tourism-navy hover:text-white"
                  }`}
                >
                  {
                    category
                  }
                </button>
              ),
            )}
          </div>
        </div>

        {/* =================================================
            POPULAR FILTERS
            ================================================= */}

        <div className="mt-3 flex flex-wrap items-center gap-2">
          <span className="shrink-0 text-[8px] font-semibold text-tourism-muted">
            Popular Filters:
          </span>

          {popularFilters.map(
            (filter) => (
              <button
                key={
                  filter
                }
                type="button"
                onClick={() =>
                  selectPopularFilter(
                    filter,
                  )
                }
                className="rounded-full border border-tourism-border bg-white px-3 py-1.5 text-[8px] font-semibold text-tourism-muted transition hover:border-tourism-pink hover:text-tourism-pink"
              >
                {
                  filter
                }

                <span
                  aria-hidden="true"
                  className="ml-1"
                >
                  ×
                </span>
              </button>
            ),
          )}
        </div>
      </Container>
    </section>
  );
}
