import Link from "next/link";

import { Container } from "@/components/layout/Container";
import { establishments } from "@/data/tourism";

import { EstablishmentCard } from "@/components/home/EstablishmentCard";
export function EstablishmentsSection() {
  return (
    <section
      aria-labelledby="establishments-heading"
      className="bg-white py-16 sm:py-20"
    >
      <Container>
        <div className="flex items-end justify-between gap-6">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--tourism-accent)]">
              Directory
            </p>

            <h2
              id="establishments-heading"
              className="mt-2 text-3xl font-bold tracking-tight text-[var(--tourism-primary)] sm:text-4xl"
            >
              DOT Accredited Establishments
            </h2>
          </div>

          <Link
            href="/business-directory"
            className="hidden shrink-0 text-sm font-semibold text-[var(--tourism-accent)] transition-transform hover:translate-x-0.5 sm:inline-flex"
          >
            View Full Directory
            <span
              className="ml-1"
              aria-hidden="true"
            >
              →
            </span>
          </Link>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {establishments.map(
            (establishment) => (
              <EstablishmentCard
                key={establishment.id}
                establishment={
                  establishment
                }
              />
            ),
          )}
        </div>

        <Link
          href="/business-directory"
          className="mt-6 inline-flex min-h-11 w-full items-center justify-center rounded-full border border-[var(--tourism-primary)] px-5 text-sm font-semibold text-[var(--tourism-primary)] sm:hidden"
        >
          View Full Directory
        </Link>
      </Container>
    </section>
  );
}