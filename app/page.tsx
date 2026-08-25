import Link from "next/link";

import { Container } from "@/components/layout/Container";
import { EstablishmentCard } from "@/components/home/EstablishmentCard";
import { establishments } from "@/data/tourism";

export function EstablishmentsSection() {
  return (
    <section
      aria-labelledby="establishments-heading"
      className="bg-white py-16 sm:py-20"
    >
      <Container>
        <div className="flex items-end justify-between gap-6">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-tourism-accent">
              Directory
            </p>

            <h2
              id="establishments-heading"
              className="mt-2 text-3xl font-bold tracking-tight text-tourism-primary sm:text-4xl"
            >
              DOT Accredited Establishments
            </h2>
          </div>

          <Link
            href="/business-directory"
            className="hidden text-sm font-semibold text-tourism-accent sm:inline-flex"
          >
            View Full Directory →
          </Link>
        </div>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {establishments.map((establishment) => (
            <EstablishmentCard
              key={establishment.id}
              establishment={establishment}
            />
          ))}
        </div>

        <div className="mt-6 sm:hidden">
          <Link
            href="/business-directory"
            className="text-sm font-semibold text-tourism-accent"
          >
            View Full Directory →
          </Link>
        </div>
      </Container>
    </section>
  );
}


export default function Home() {
  return (
    <main>
      
      <section className="min-h-screen bg-tourism-primary" />

      <EstablishmentsSection />
    </main>
  );
}