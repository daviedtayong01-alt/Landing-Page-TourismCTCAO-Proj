import Link from "next/link";
import { MapPin, Star } from "lucide-react";

import { Container } from "@/components/layout/Container";
import { destinations } from "@/data/tourism";

import { FavoriteButton } from "./FavoriteButton";
import { TourismImage } from "./TourismImage";

export function HomeSections() {
  return (
    <section className="bg-tourism-surface py-16 sm:py-20">
      <Container>
        <p className="flex items-center gap-3 text-[8px] font-extrabold uppercase tracking-[0.16em] text-tourism-pink">
          <span
            aria-hidden="true"
            className="h-px w-5 bg-tourism-pink"
          />
          Limitless Adventure
        </p>

        <h2 className="mt-4 text-3xl font-black tracking-tight text-tourism-navy sm:text-4xl">
          Explore Koronadal
        </h2>

        <div className="mt-7 grid items-stretch gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {destinations.map((destination) => (
            <article
              key={destination.id}
              className="group flex h-full min-w-0 flex-col overflow-hidden rounded-2xl bg-white shadow-[0_8px_25px_rgba(18,59,96,.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_15px_35px_rgba(18,59,96,.12)] motion-reduce:transition-none motion-reduce:hover:translate-y-0"
            >
              {/* IMAGE */}
              <div className="relative aspect-[1.18] overflow-hidden">
                {destination.image ? (
                  <TourismImage
                    src={destination.image}
                    alt={destination.imageAlt}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    fallbackLabel="Destination photography unavailable"
                    className="transition duration-500 group-hover:scale-105 motion-reduce:transition-none motion-reduce:group-hover:scale-100"
                  />
                ) : (
                  <div
                    role="img"
                    aria-label={destination.imageAlt}
                    className="absolute inset-0 bg-gradient-to-br from-tourism-navy to-tourism-navy-dark"
                  />
                )}

                <span className="absolute left-3 top-3 rounded-full bg-tourism-pink px-2.5 py-1 text-[7px] font-extrabold uppercase text-white">
                  {destination.category}
                </span>

                <FavoriteButton
                  itemId={`destination:${destination.id}`}
                  label={destination.name}
                  className="absolute right-3 top-3 flex size-9 items-center justify-center rounded-full bg-white/95 text-tourism-pink shadow-md backdrop-blur-sm transition hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-tourism-pink focus-visible:ring-offset-2 motion-reduce:transition-none motion-reduce:hover:scale-100"
                  iconClassName="size-3.5"
                />
              </div>

              {/* BODY */}
              <div className="flex flex-1 flex-col p-4">
                <h3 className="text-sm font-extrabold leading-5 text-tourism-navy">
                  {destination.name}
                </h3>

                <div className="mt-2 flex items-start gap-2 text-[9px] leading-4 text-tourism-muted">
                  <MapPin
                    aria-hidden="true"
                    className="mt-0.5 size-3 shrink-0"
                  />

                  <span>
                    {destination.location} · {destination.distance}
                  </span>
                </div>

                <p className="mt-3 min-h-[64px] line-clamp-3 text-[10px] leading-4 text-tourism-muted">
                  {destination.description}
                </p>

                <div className="mt-auto pt-4">
                  <div
                    role="img"
                    aria-label={`${destination.rating} destination rating`}
                    className="mb-3 flex items-center gap-1 text-[9px] font-bold text-tourism-pink"
                  >
                    <Star
                      aria-hidden="true"
                      className="size-3 fill-current"
                    />

                    <span>{destination.rating}</span>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <Link
                      href={`/destinations/${destination.id}`}
                      className="flex min-h-9 items-center justify-center rounded-lg bg-tourism-pink px-3 text-[9px] font-bold text-white transition hover:bg-tourism-pink-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-tourism-pink focus-visible:ring-offset-2 motion-reduce:transition-none"
                    >
                      Explore
                    </Link>

                    <a
                      href="#tourism-map"
                      className="flex min-h-9 items-center justify-center rounded-lg border border-tourism-navy/20 px-3 text-[9px] font-bold text-tourism-navy transition hover:bg-tourism-navy hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-tourism-pink focus-visible:ring-offset-2 motion-reduce:transition-none"
                    >
                      View Map
                    </a>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}