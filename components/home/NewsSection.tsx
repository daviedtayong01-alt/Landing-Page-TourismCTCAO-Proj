import Link from "next/link";

import { Container } from "@/components/layout/Container";

import {
  newsItems,
} from "@/data/tourism";

import { TourismImage } from "./TourismImage";

export function NewsSection() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <Container>
        <p className="flex items-center gap-3 text-[8px] font-extrabold uppercase tracking-[0.16em] text-tourism-pink">
          <span className="h-px w-5 bg-tourism-pink" />

          Timely Updates
        </p>

        <h2 className="mt-4 text-3xl font-black tracking-tight text-tourism-navy sm:text-4xl">
          What&apos;s Happening in Koronadal
        </h2>

        {/* =====================================================
            REFERENCE DIVIDER
            =====================================================

            This line was missing from the previous implementation.
            It establishes the relationship between the section
            heading and the news cards.
        */}

        <div className="mt-6 border-t border-tourism-border pt-7">
          <div className="grid gap-5 lg:grid-cols-3">
            {newsItems.map(
              (item) => (
                <article
                  key={
                    item.id
                  }
                  className="group flex h-full min-w-0 flex-col overflow-hidden rounded-2xl bg-tourism-surface shadow-[0_8px_25px_rgba(18,59,96,.06)]"
                >
                  <div className="relative aspect-[1.72] overflow-hidden">
                    {item.image ? (
                      <TourismImage
                        src={item.image}
                        alt={item.imageAlt}
                        sizes="(max-width: 1024px) 100vw, 33vw"
                        fallbackLabel="News photography unavailable"
                        className="transition duration-500 group-hover:scale-105"
                      />
                    ) : (
                      <div
                        role="img"
                        aria-label={
                          item.imageAlt
                        }
                        className="absolute inset-0 bg-gradient-to-br from-tourism-navy to-tourism-navy-dark"
                      />
                    )}
                  </div>

                  <div className="flex flex-1 flex-col p-5">
                    <div className="flex flex-wrap items-center gap-2 text-[7px] font-extrabold uppercase tracking-wide">
                      <span className="rounded-full bg-tourism-pink px-2 py-1 text-white">
                        {
                          item.category
                        }
                      </span>

                      <span className="text-tourism-soft">
                        {
                          item.date
                        }
                      </span>
                    </div>

                    <h3 className="mt-3 text-sm font-extrabold leading-5 text-tourism-navy">
                      {
                        item.title
                      }
                    </h3>

                    <p className="mt-2 min-h-[48px] line-clamp-3 text-[9px] leading-4 text-tourism-muted">
                      {
                        item.description
                      }
                    </p>

                    <Link
                      href="/events"
                      className="mt-auto inline-flex pt-4 text-[8px] font-extrabold text-tourism-navy transition hover:text-tourism-pink"
                    >
                      Read More →
                    </Link>
                  </div>
                </article>
              ),
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}
