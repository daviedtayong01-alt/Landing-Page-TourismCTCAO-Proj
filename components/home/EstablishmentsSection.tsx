import Link from "next/link";

import { Container } from "@/components/layout/Container";

import {
  establishments,
} from "@/data/tourism";

import {
  EstablishmentCard,
} from "./EstablishmentCard";

const tabs = [
  "Hotels & Resorts",
  "Restaurants & Cafes",
  "Tourism Enterprises",
  "Tourist Guides",
] as const;

export function EstablishmentsSection() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <Container>
        <div className="flex items-end justify-between gap-6">
          <div>
            <p className="flex items-center gap-3 text-[8px] font-extrabold uppercase tracking-[0.16em] text-tourism-pink">
              <span className="h-px w-5 bg-tourism-pink" />

              Trusted Hospitality
            </p>

            <h2 className="mt-4 text-3xl font-black tracking-tight text-tourism-navy sm:text-4xl">
              DOT Accredited Establishments
            </h2>
          </div>

          <Link
            href="/business-directory"
            className="hidden pb-1 text-[9px] font-bold text-tourism-pink transition hover:text-tourism-pink-dark sm:block"
          >
            View Full Directory →
          </Link>
        </div>

        {/* =================================================
            TABS + ONE CONTINUOUS DIVIDER
            ================================================= */}

        <div className="mt-7 overflow-x-auto scrollbar-hidden">
          <div className="flex min-w-max border-b border-tourism-border">
            {tabs.map(
              (
                tab,
                index,
              ) => (
                <button
                  key={
                    tab
                  }
                  type="button"
                  className={`mr-6 border-b-2 pb-3 text-[8px] font-bold ${
                    index ===
                    0
                      ? "border-tourism-pink text-tourism-navy"
                      : "border-transparent text-tourism-muted"
                  }`}
                >
                  {
                    tab
                  }
                </button>
              ),
            )}
          </div>
        </div>

        {/* =================================================
            CARDS
            ================================================= */}

        <div className="mt-7 grid items-stretch gap-5 md:grid-cols-2 lg:grid-cols-3">
          {establishments.map(
            (
              establishment,
            ) => (
              <EstablishmentCard
                key={
                  establishment.id
                }
                establishment={
                  establishment
                }
              />
            ),
          )}
        </div>

        <Link
          href="/business-directory"
          className="mt-6 block text-center text-[9px] font-bold text-tourism-pink sm:hidden"
        >
          View Full Directory →
        </Link>
      </Container>
    </section>
  );
}