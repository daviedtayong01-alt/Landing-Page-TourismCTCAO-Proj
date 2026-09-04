import Link from "next/link";
import { MapPin, Users } from "lucide-react";

import {
  FavoriteButton,
} from "@/components/home/FavoriteButton";

import {
  TourismImage,
} from "@/components/home/TourismImage";

import type { Locale } from "@/lib/i18n/config";
import type { MiceVenue } from "@/types/tourism";

interface MiceVenueCardProps {
  venue: MiceVenue;
  locale: Locale;
}

export function MiceVenueCard({
  venue,
  locale,
}: MiceVenueCardProps) {
  const filipino = locale === "fil";

  const venueType =
    venue.venueType[locale];
  const name = venue.name[locale];
  const location =
    venue.location[locale];
  const capacity =
    venue.capacity[locale];
  const imageAlt =
    venue.imageAlt[locale];

  return (
    <article className="group flex h-full min-w-0 flex-col overflow-hidden rounded-2xl border border-tourism-border bg-white shadow-[0_8px_25px_rgba(18,59,96,.08)] transition hover:-translate-y-1 hover:shadow-[0_15px_35px_rgba(18,59,96,.12)] motion-reduce:transition-none motion-reduce:hover:translate-y-0">
      <div className="relative aspect-[1.72] overflow-hidden">
        <TourismImage
          src={venue.image}
          alt={imageAlt}
          sizes="(max-width: 768px) 100vw, 33vw"
          fallbackLabel={
            filipino
              ? "Hindi available ang larawan ng venue"
              : "Venue photography unavailable"
          }
        />

        <span className="absolute left-3 top-3 rounded-full bg-tourism-navy px-2.5 py-1 text-[8px] font-extrabold uppercase tracking-wide text-white">
          {venueType}
        </span>

        <FavoriteButton
          itemId={`mice:${venue.id}`}
          label={name}
          className="absolute right-3 top-3 flex size-9 items-center justify-center rounded-full bg-white/95 text-tourism-pink shadow-md transition hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-tourism-pink focus-visible:ring-offset-2 motion-reduce:transition-none motion-reduce:hover:scale-100"
        />
      </div>

      <div className="flex flex-1 flex-col p-5">
        <h2 className="min-h-[40px] text-base font-extrabold leading-5 text-tourism-navy">
          {name}
        </h2>

        <div className="mt-3 space-y-2 text-[10px] leading-4 text-tourism-muted">
          <p className="flex items-start gap-1.5">
            <MapPin
              aria-hidden="true"
              className="mt-0.5 size-3 shrink-0"
            />

            <span>{location}</span>
          </p>

          <p className="flex items-center gap-1.5">
            <Users
              aria-hidden="true"
              className="size-3 shrink-0"
            />

            <span>{capacity}</span>
          </p>
        </div>

        <div className="mt-4 flex min-h-[52px] flex-wrap content-start gap-1.5">
          {venue.tags.map((tag) => {
            const localizedTag = tag[locale];

            return (
              <span
                key={localizedTag}
                className="rounded-full bg-tourism-pink/10 px-2.5 py-1 text-[8px] font-bold text-tourism-pink"
              >
                {localizedTag}
              </span>
            );
          })}
        </div>

        <Link
          href={`/mice/${venue.id}`}
          className="mt-auto flex min-h-9 items-center justify-center rounded-lg border border-tourism-navy/25 text-[10px] font-extrabold text-tourism-navy transition hover:bg-tourism-navy hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-tourism-pink focus-visible:ring-offset-2 motion-reduce:transition-none"
        >
          {filipino
            ? "Tingnan ang Venue"
            : "View Venue"}
        </Link>
      </div>
    </article>
  );
}