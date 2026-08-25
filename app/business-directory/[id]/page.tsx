import Link from "next/link";
import { notFound } from "next/navigation";
import {
  Building2,
  MapPin,
  Star,
} from "lucide-react";

import { Container } from "@/components/layout/Container";
import { establishments } from "@/data/tourism";

interface BusinessDetailPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function BusinessDetailPage({
  params,
}: BusinessDetailPageProps) {
  const { id } = await params;

  const establishment =
    establishments.find(
      (item) => item.id === id,
    );

  if (!establishment) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-white py-16 sm:py-20">
      <Container>
        <Link
          href="/business-directory"
          className="text-sm font-semibold text-[var(--tourism-primary)] hover:underline"
        >
          ← Back to Directory
        </Link>

        <article className="mt-8 max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--tourism-accent)]">
            Tourism Establishment
          </p>

          <h1 className="mt-3 text-4xl font-bold tracking-tight text-neutral-900 sm:text-5xl">
            {establishment.name}
          </h1>

          <div className="mt-5 flex flex-wrap gap-3 text-sm text-neutral-600">
            <span className="inline-flex items-center rounded-full bg-[var(--tourism-surface)] px-3 py-1.5 font-medium capitalize">
              {establishment.category.replaceAll(
                "-",
                " ",
              )}
            </span>

            <span className="inline-flex items-center rounded-full bg-emerald-50 px-3 py-1.5 font-medium text-emerald-700">
              {establishment.accreditationStatus ===
              "accredited"
                ? "DOT Accredited"
                : establishment.accreditationStatus ===
                    "pending"
                  ? "Pending Review"
                  : "Not Accredited"}
            </span>
          </div>

          <div className="mt-5 flex flex-wrap gap-4 text-sm text-neutral-600">
            <span className="inline-flex items-center gap-2">
              <MapPin
                className="size-4"
                aria-hidden="true"
              />
              {establishment.location}
            </span>

            <span className="inline-flex items-center gap-2">
              <Star
                className="size-4 text-[var(--tourism-accent)]"
                aria-hidden="true"
              />
              {establishment.rating.toFixed(1)}
              {" "}rating
            </span>
          </div>

          <div className="mt-8 overflow-hidden rounded-2xl border border-neutral-200">
            <div className="flex aspect-[16/7] items-center justify-center bg-[var(--tourism-surface)] text-[var(--tourism-primary)]">
              <Building2
                className="size-16 opacity-20"
                aria-hidden="true"
              />
            </div>

            <div className="p-6 sm:p-8">
              <h2 className="text-xl font-bold text-neutral-900">
                About this establishment
              </h2>

              <p className="mt-3 text-sm leading-7 text-neutral-600">
                {establishment.description ??
                  "Information for this establishment is currently being prepared."}
              </p>
            </div>
          </div>
        </article>
      </Container>
    </main>
  );
}