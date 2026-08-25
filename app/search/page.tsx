import Link from "next/link";

import { Container } from "@/components/layout/Container";
import {
  destinations,
  establishments,
  tourismEvents,
} from "@/data/tourism";

interface SearchPageProps {
  searchParams: Promise<{
    q?: string;
    category?: string;
  }>;
}

function normalize(value: string) {
  return value.trim().toLowerCase();
}

export default async function SearchPage({
  searchParams,
}: SearchPageProps) {
  const params = await searchParams;

  const query = normalize(
    params.q ?? "",
  );

  const category =
    params.category ?? "all";

  const establishmentResults =
    category === "all" ||
    category === "establishments"
      ? establishments.filter(
          (item) => {
            if (!query) return true;

            return normalize(
              `${item.name} ${item.location} ${item.category}`,
            ).includes(query);
          },
        )
      : [];

  const destinationResults =
    category === "all" ||
    category === "destinations"
      ? destinations.filter(
          (item) => {
            if (!query) return true;

            return normalize(
              `${item.name} ${item.category} ${item.description}`,
            ).includes(query);
          },
        )
      : [];

  const eventResults =
    category === "all" ||
    category === "events"
      ? tourismEvents.filter(
          (item) => {
            if (!query) return true;

            return normalize(
              `${item.name} ${item.category} ${item.location}`,
            ).includes(query);
          },
        )
      : [];

  const totalResults =
    establishmentResults.length +
    destinationResults.length +
    eventResults.length;

  return (
    <main className="min-h-screen bg-[var(--tourism-surface)] py-16 sm:py-20">
      <Container>
        <div className="max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--tourism-accent)]">
            Search
          </p>

          <h1 className="mt-2 text-4xl font-bold tracking-tight text-[var(--tourism-primary)] sm:text-5xl">
            Tourism Directory Search
          </h1>

          <p className="mt-4 text-sm leading-7 text-neutral-600">
            {query
              ? `Showing ${totalResults} result${
                  totalResults === 1
                    ? ""
                    : "s"
                } for “${params.q}”.`
              : "Browse the currently available tourism content."}
          </p>
        </div>

        {totalResults === 0 ? (
          <div className="mt-10 rounded-xl border border-neutral-200 bg-white p-8 text-center">
            <h2 className="text-lg font-bold text-neutral-900">
              No results found
            </h2>

            <p className="mt-2 text-sm text-neutral-600">
              Try a broader search term or select All Categories.
            </p>
          </div>
        ) : (
          <div className="mt-10 space-y-10">
            {establishmentResults.length >
              0 && (
              <section>
                <h2 className="text-xl font-bold text-neutral-900">
                  Establishments
                </h2>

                <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                  {establishmentResults.map(
                    (item) => (
                      <Link
                        key={item.id}
                        href={`/business-directory/${item.id}`}
                        className="rounded-xl border border-neutral-200 bg-white p-5 transition-shadow hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--tourism-accent)]"
                      >
                        <p className="text-xs font-bold uppercase tracking-wide text-[var(--tourism-accent)]">
                          {item.category.replaceAll(
                            "-",
                            " ",
                          )}
                        </p>

                        <h3 className="mt-2 font-bold text-neutral-900">
                          {item.name}
                        </h3>

                        <p className="mt-2 text-xs leading-5 text-neutral-500">
                          {item.location}
                        </p>
                      </Link>
                    ),
                  )}
                </div>
              </section>
            )}

            {destinationResults.length >
              0 && (
              <section>
                <h2 className="text-xl font-bold text-neutral-900">
                  Destinations
                </h2>

                <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {destinationResults.map(
                    (item) => (
                      <Link
                        key={item.id}
                        href="/search?category=destinations"
                        className="rounded-xl border border-neutral-200 bg-white p-5 transition-shadow hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--tourism-accent)]"
                      >
                        <p className="text-xs font-bold uppercase tracking-wide text-[var(--tourism-accent)]">
                          {item.category}
                        </p>

                        <h3 className="mt-2 font-bold text-neutral-900">
                          {item.name}
                        </h3>

                        <p className="mt-2 text-sm leading-6 text-neutral-600">
                          {item.description}
                        </p>
                      </Link>
                    ),
                  )}
                </div>
              </section>
            )}

            {eventResults.length >
              0 && (
              <section>
                <h2 className="text-xl font-bold text-neutral-900">
                  Events
                </h2>

                <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {eventResults.map(
                    (item) => (
                      <Link
                        key={item.id}
                        href="/search?category=events"
                        className="rounded-xl border border-neutral-200 bg-white p-5 transition-shadow hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--tourism-accent)]"
                      >
                        <p className="text-xs font-bold uppercase tracking-wide text-[var(--tourism-accent)]">
                          {item.category}
                        </p>

                        <h3 className="mt-2 font-bold text-neutral-900">
                          {item.name}
                        </h3>

                        <p className="mt-2 text-sm text-neutral-600">
                          {item.dateLabel}
                        </p>

                        <p className="mt-1 text-xs text-neutral-500">
                          {item.location}
                        </p>
                      </Link>
                    ),
                  )}
                </div>
              </section>
            )}
          </div>
        )}
      </Container>
    </main>
  );
}