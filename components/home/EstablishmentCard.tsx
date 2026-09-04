import Link from "next/link";
import { MapPin, Phone, Star } from "lucide-react";

import type { Locale } from "@/lib/i18n/config";
import type { Establishment } from "@/types/tourism";

import { FavoriteButton } from "./FavoriteButton";
import { TourismImage } from "./TourismImage";

interface EstablishmentCardProps {
  establishment: Establishment;
  locale: Locale;
}

export function EstablishmentCard({
  establishment,
  locale,
}: EstablishmentCardProps) {
  const filipino = locale === "fil";

  const category = establishment.category[locale];
  const name = establishment.name[locale];
  const location = establishment.location[locale];
  const description =
    establishment.description[locale];
  const imageAlt =
    establishment.imageAlt[locale];

  return (
    <article className="group flex h-full min-w-0 flex-col overflow-hidden rounded-2xl border border-tourism-border bg-white shadow-[0_8px_25px_rgba(18,59,96,.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_15px_35px_rgba(18,59,96,.12)] motion-reduce:transition-none motion-reduce:hover:translate-y-0">
      {/* =====================================================
          IMAGE
          ===================================================== */}
      <div className="relative aspect-[1.72] overflow-hidden">
        {establishment.image ? (
          <TourismImage
            src={establishment.image}
            alt={imageAlt}
            sizes="(max-width: 768px) 100vw, 33vw"
            fallbackLabel={
              filipino
                ? "Hindi available ang larawan ng establisimyento"
                : "Establishment photography unavailable"
            }
            className="transition duration-500 group-hover:scale-105 motion-reduce:transition-none motion-reduce:group-hover:scale-100"
          />
        ) : (
          <div
            role="img"
            aria-label={imageAlt}
            className="absolute inset-0 bg-gradient-to-br from-tourism-navy to-tourism-navy-dark"
          />
        )}

        {/* TOP-LEFT BADGES */}
        <div className="absolute left-3 top-3 flex flex-wrap gap-1.5">
          {establishment.accredited && (
            <span className="rounded-full bg-tourism-navy px-2.5 py-1 text-[7px] font-extrabold uppercase text-white">
              {filipino
                ? "Akreditado ng DOT"
                : "DOT Accredited"}
            </span>
          )}

          {establishment.ecoFriendly && (
            <span className="rounded-full bg-tourism-pink px-2.5 py-1 text-[7px] font-extrabold uppercase text-white">
              {filipino
                ? "Eco Prestige"
                : "Eco Prestige"}
            </span>
          )}
        </div>

        {/* TOP-RIGHT FAVORITE */}
        <FavoriteButton
          itemId={`establishment:${establishment.id}`}
          label={name}
          className="absolute right-3 top-3 flex size-9 items-center justify-center rounded-full bg-white/95 text-tourism-pink shadow-md backdrop-blur-sm transition hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-tourism-pink focus-visible:ring-offset-2 motion-reduce:transition-none motion-reduce:hover:scale-100"
          iconClassName="size-4"
        />
      </div>

      {/* =====================================================
          CARD CONTENT
          ===================================================== */}
      <div className="flex flex-1 flex-col p-4 sm:p-5">
        <p className="text-[8px] font-bold uppercase tracking-wide text-tourism-muted">
          {category}
        </p>

        <h3 className="mt-2 min-h-[42px] text-base font-extrabold leading-5 tracking-tight text-tourism-navy">
          {name}
        </h3>

        <div className="mt-2 space-y-1.5 text-[9px] leading-4 text-tourism-muted">
          <span className="flex items-start gap-1.5">
            <MapPin
              aria-hidden="true"
              className="mt-0.5 size-3 shrink-0"
            />

            <span>{location}</span>
          </span>

          {establishment.phone && (
            <span className="flex items-start gap-1.5">
              <Phone
                aria-hidden="true"
                className="mt-0.5 size-3 shrink-0"
              />

              <a
                href={`tel:${establishment.phone}`}
                className="rounded-sm underline-offset-2 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-tourism-pink focus-visible:ring-offset-2"
              >
                {establishment.phone}
              </a>
            </span>
          )}
        </div>

        <p className="mt-4 min-h-[64px] line-clamp-3 text-[10px] leading-4 text-tourism-muted">
          {description}
        </p>

        <div className="mt-auto pt-5">
          {/* REFERENCE RATING */}
          <div
            role="img"
            aria-label={
              filipino
                ? `Rating ng direktoryo: ${establishment.rating}`
                : `${establishment.rating} directory rating`
            }
            className="mb-4 flex items-center gap-1 text-[9px] font-bold text-tourism-pink"
          >
            <Star
              aria-hidden="true"
              className="size-3 fill-current"
            />

            <span>{establishment.rating}</span>
          </div>

          <Link
            href={`/business-directory/${establishment.id}`}
            className="flex min-h-9 items-center justify-center rounded-lg border border-tourism-navy/25 px-3 text-[9px] font-bold text-tourism-navy transition hover:bg-tourism-navy hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-tourism-pink focus-visible:ring-offset-2 motion-reduce:transition-none"
          >
            {filipino
              ? "Tingnan ang Detalye"
              : "View Details"}
          </Link>
        </div>
      </div>
    </article>
  );
}