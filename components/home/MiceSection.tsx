import Link from "next/link";
import { MapPin } from "lucide-react";

import { Container } from "@/components/layout/Container";
import { miceVenues } from "@/data/tourism";

import { FavoriteButton } from "./FavoriteButton";
import { TourismImage } from "./TourismImage";

export function MiceSection() {
  return (
    <section
      aria-labelledby="mice-heading"
      className="bg-white py-16 sm:py-20"
    >
      <Container>
        {/* SECTION HEADER */}
        <div className="flex items-end justify-between gap-6">
          <div>
            <p className="flex items-center gap-3 text-[8px] font-extrabold uppercase tracking-[0.16em] text-tourism-pink">
              <span
                aria-hidden="true"
                className="h-px w-5 bg-tourism-pink"
              />
              Premier Venues
            </p>

            <h2
              id="mice-heading"
              className="mt-4 max-w-4xl text-3xl font-black leading-tight tracking-tight text-tourism-navy sm:text-4xl"
            >
              Meetings, Incentives, Conferences & Exhibitions
            </h2>
          </div>

          <Link
            href="/mice"
            className="hidden shrink-0 rounded-sm pb-1 text-[9px] font-bold text-tourism-pink transition hover:text-tourism-pink-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-tourism-pink focus-visible:ring-offset-2 motion-reduce:transition-none sm:block"
          >
            View All Venues →
          </Link>
        </div>

        {/* VENUE CARDS */}
        <div className="mt-8 grid items-stretch gap-5 md:grid-cols-2 lg:grid-cols-3">
          {miceVenues.map((venue) => (
            <article
              key={venue.id}
              className="group flex h-full min-w-0 flex-col overflow-hidden rounded-2xl border border-tourism-border bg-white shadow-[0_8px_25px_rgba(18,59,96,.07)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_15px_35px_rgba(18,59,96,.12)] motion-reduce:transition-none motion-reduce:hover:translate-y-0"
            >
              {/* IMAGE */}
              <div className="relative aspect-[1.8] overflow-hidden bg-tourism-navy">
                {venue.image ? (
                  <TourismImage
                    src={venue.image}
                    alt={venue.imageAlt}
                    sizes="(max-width: 768px) 100vw, 33vw"
                    fallbackLabel="Venue photography unavailable"
                    className="transition duration-500 group-hover:scale-105 motion-reduce:transition-none motion-reduce:group-hover:scale-100"
                  />
                ) : (
                  <div
                    role="img"
                    aria-label={venue.imageAlt}
                    className="absolute inset-0 bg-[linear-gradient(135deg,#123b60,#0c2c48)]"
                  >
                    <div
                      aria-hidden="true"
                      className="absolute inset-0 bg-[radial-gradient(circle_at_75%_25%,rgba(245,43,145,.28),transparent_35%)]"
                    />

                    <div className="absolute inset-0 flex items-center justify-center px-6 text-center">
                      <span className="text-[8px] font-bold uppercase tracking-[0.14em] text-white/60">
                        Venue photography pending
                      </span>
                    </div>
                  </div>
                )}

                {/* Favorite control */}
                <FavoriteButton
                  itemId={`mice:${venue.id}`}
                  label={venue.name}
                  className="absolute right-3 top-3 flex size-9 items-center justify-center rounded-full bg-white/95 text-tourism-pink shadow-md backdrop-blur-sm transition hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-tourism-pink focus-visible:ring-offset-2 motion-reduce:transition-none motion-reduce:hover:scale-100"
                  iconClassName="size-4"
                />
              </div>

              {/* CONTENT */}
              <div className="flex flex-1 flex-col p-4 sm:p-5">
                <h3 className="min-h-[40px] text-sm font-extrabold leading-5 text-tourism-navy">
                  {venue.name}
                </h3>

                <div className="mt-2 flex items-start gap-1.5 text-[9px] leading-4 text-tourism-muted">
                  <MapPin
                    aria-hidden="true"
                    className="mt-0.5 size-3 shrink-0"
                  />

                  <span>{venue.location}</span>
                </div>

                <p className="mt-2 text-[9px] font-semibold text-tourism-muted">
                  Capacity: {venue.capacity}
                </p>

                <div className="mt-4 min-h-[44px]">
                  <div className="flex flex-wrap gap-1.5">
                    {venue.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-tourism-pink/10 px-2.5 py-1 text-[8px] font-bold text-tourism-pink"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Keep buttons aligned despite different tag counts. */}
                <div className="mt-auto pt-5">
                  <Link
                    href={`/mice/${venue.id}`}
                    className="flex min-h-9 items-center justify-center rounded-lg border border-tourism-navy/25 px-3 text-[9px] font-bold text-tourism-navy transition hover:bg-tourism-navy hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-tourism-pink focus-visible:ring-offset-2 motion-reduce:transition-none"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Mobile-only link */}
        <Link
          href="/mice"
          className="mt-6 block rounded-sm text-center text-[9px] font-bold text-tourism-pink transition hover:text-tourism-pink-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-tourism-pink focus-visible:ring-offset-2 motion-reduce:transition-none sm:hidden"
        >
          View All Venues →
        </Link>
      </Container>
    </section>
  );
}