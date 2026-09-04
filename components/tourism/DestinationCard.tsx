import Link from "next/link";
import { MapPin, Star } from "lucide-react";

import {
  FavoriteButton,
} from "@/components/home/FavoriteButton";

import {
  TourismImage,
} from "@/components/home/TourismImage";

import type { Locale } from "@/lib/i18n/config";
import type { Destination } from "@/types/tourism";

interface DestinationCardProps {
  destination: Destination;
  locale: Locale;
}

export function DestinationCard({
  destination,
  locale,
}: DestinationCardProps) {
  const filipino = locale === "fil";

  const category = destination.category[locale];
  const name = destination.name[locale];
  const location =
    destination.location[locale];
  const distance =
    destination.distance[locale];
  const description =
    destination.description[locale];
  const imageAlt =
    destination.imageAlt[locale];

  return (
    <article className="group flex h-full min-w-0 flex-col overflow-hidden rounded-2xl border border-tourism-border bg-white shadow-[0_8px_25px_rgba(18,59,96,.08)] transition hover:-translate-y-1 hover:shadow-[0_15px_35px_rgba(18,59,96,.12)] motion-reduce:transition-none motion-reduce:hover:translate-y-0">
      <div className="relative aspect-[1.3] overflow-hidden">
        <TourismImage
          src={destination.image}
          alt={imageAlt}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          fallbackLabel={
            filipino
              ? "Hindi available ang larawan ng destinasyon"
              : "Destination photography unavailable"
          }
        />

        <span className="absolute left-3 top-3 rounded-full bg-tourism-pink px-2.5 py-1 text-[8px] font-extrabold uppercase tracking-wide text-white">
          {category}
        </span>

        <FavoriteButton
          itemId={`destination:${destination.id}`}
          label={name}
          className="absolute right-3 top-3 flex size-9 items-center justify-center rounded-full bg-white/95 text-tourism-pink shadow-md transition hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-tourism-pink focus-visible:ring-offset-2 motion-reduce:transition-none motion-reduce:hover:scale-100"
        />
      </div>

      <div className="flex flex-1 flex-col p-5">
        <h2 className="min-h-[40px] text-base font-extrabold leading-5 text-tourism-navy">
          {name}
        </h2>

        <p className="mt-2 flex items-start gap-1.5 text-[10px] leading-4 text-tourism-muted">
          <MapPin
            aria-hidden="true"
            className="mt-0.5 size-3 shrink-0"
          />

          <span>
            {location} · {distance}
          </span>
        </p>

        <p className="mt-4 min-h-[60px] line-clamp-3 text-sm leading-5 text-tourism-muted">
          {description}
        </p>

        <div className="mt-auto flex items-center justify-between gap-3 pt-5">
          <span
            aria-label={
              filipino
                ? `Rating ng destinasyon: ${destination.rating}`
                : `${destination.rating} destination rating`
            }
            className="inline-flex items-center gap-1 text-xs font-bold text-tourism-pink"
          >
            <Star
              aria-hidden="true"
              className="size-3 fill-current"
            />

            {destination.rating}
          </span>

          <Link
            href={`/destinations/${destination.id}`}
            className="inline-flex min-h-9 items-center justify-center rounded-lg bg-tourism-pink px-4 text-[10px] font-extrabold text-white transition hover:bg-tourism-pink-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-tourism-pink focus-visible:ring-offset-2 motion-reduce:transition-none"
          >
            {filipino
              ? "Tuklasin"
              : "Explore"}
          </Link>
        </div>
      </div>
    </article>
  );
}