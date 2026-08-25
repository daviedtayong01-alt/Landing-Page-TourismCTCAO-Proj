import Image from "next/image";
import Link from "next/link";
import {
  Building2,
  MapPin,
  Star,
} from "lucide-react";

import type { Establishment } from "@/types/tourism";

interface EstablishmentCardProps {
  establishment: Establishment;
}

const categoryLabels: Record<
  Establishment["category"],
  string
> = {
  hotel: "Hotels & Resorts",
  restaurant: "Restaurants & Cafes",
  "travel-agency": "Travel Agencies",
  "farm-tourist-camp":
    "Farm Tourist Camp",
};

const accreditationLabels: Record<
  Establishment["accreditationStatus"],
  string
> = {
  accredited: "DOT Accredited",
  pending: "Pending Review",
  "not-accredited": "Not Accredited",
};

export function EstablishmentCard({
  establishment,
}: EstablishmentCardProps) {
  const isAccredited =
    establishment.accreditationStatus ===
    "accredited";

  return (
    <article className="group overflow-hidden rounded-xl border border-neutral-200 bg-white transition-shadow duration-200 hover:shadow-lg">
      <Link
        href={`/business-directory/${establishment.id}`}
        className="block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[var(--tourism-accent)]"
      >
        <div className="relative aspect-[16/10] overflow-hidden bg-[var(--tourism-surface)]">
          {establishment.imageUrl ? (
            <Image
              src={establishment.imageUrl}
              alt={establishment.name}
              fill
              sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 25vw"
              className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
            />
          ) : (
            <div className="flex h-full items-center justify-center text-[var(--tourism-primary)]">
              <Building2
                className="size-12 opacity-30"
                aria-hidden="true"
              />
            </div>
          )}

          <div className="absolute right-3 top-3 inline-flex items-center gap-1 rounded-full bg-white/95 px-2.5 py-1 text-xs font-semibold text-neutral-800 shadow-sm">
            <Star
              className="size-3.5 fill-current text-[var(--tourism-accent)]"
              aria-hidden="true"
            />
            {establishment.rating.toFixed(1)}
          </div>
        </div>

        <div className="p-4">
          <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-neutral-500">
            {categoryLabels[establishment.category]}
          </p>

          <h3 className="mt-2 line-clamp-2 text-base font-bold leading-6 text-neutral-900">
            {establishment.name}
          </h3>

          <span
            className={`mt-3 inline-flex rounded px-2 py-1 text-[10px] font-bold uppercase tracking-wide ${
              isAccredited
                ? "bg-emerald-50 text-emerald-700"
                : "bg-amber-50 text-amber-700"
            }`}
          >
            {
              accreditationLabels[
                establishment.accreditationStatus
              ]
            }
          </span>

          <div className="mt-3 flex items-start gap-2 text-xs leading-5 text-neutral-500">
            <MapPin
              className="mt-0.5 size-3.5 shrink-0"
              aria-hidden="true"
            />
            <span>
              {establishment.location}
            </span>
          </div>

          <span className="mt-3 inline-flex text-sm font-semibold text-[var(--tourism-primary)]">
            View Details
            <span
              className="ml-1"
              aria-hidden="true"
            >
              →
            </span>
          </span>
        </div>
      </Link>
    </article>
  );
}