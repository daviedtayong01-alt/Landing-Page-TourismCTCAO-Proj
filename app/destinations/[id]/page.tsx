import Link from "next/link";
import {
  ArrowLeft,
  Clock3,
  MapPin,
  Navigation,
  Star,
} from "lucide-react";
import { notFound } from "next/navigation";

import { FavoriteButton } from "@/components/home/FavoriteButton";
import { TourismImage } from "@/components/home/TourismImage";
import { Container } from "@/components/layout/Container";
import { PageShell } from "@/components/layout/PageShell";
import { DestinationCard } from "@/components/tourism/DestinationCard";

import { destinations } from "@/data/tourism";
import { getLocale } from "@/lib/i18n/locale";
import { getTranslations } from "@/lib/i18n";

interface DestinationDetailPageProps {
  params: Promise<{ id: string }>;
}

export default async function DestinationDetailPage({
  params,
}: DestinationDetailPageProps) {
  const { id } = await params;

  const destination = destinations.find(
    (item) => item.id === id,
  );

  if (!destination) {
    notFound();
  }

  const locale = await getLocale();
  const translations = getTranslations(locale);
  const filipino = locale === "fil";

  /*
   * ============================================================
   * LOCALIZED DESTINATION DATA
   * ============================================================
   */

  const category = destination.category[locale];
  const name = destination.name[locale];
  const location = destination.location[locale];
  const description = destination.description[locale];
  const imageAlt = destination.imageAlt[locale];
  const distance = destination.distance[locale];

  const travelGuidance =
    destination.travelGuidance?.[locale] ??
    (filipino
      ? "Planuhin ang transportasyon nang maaga at kumpirmahin ang kasalukuyang kondisyon ng access bago bumiyahe."
      : "Plan your transport locally and confirm current access information before leaving the city center.");

  const visitorGuidelines =
    destination.visitorGuidelines ?? [];

  const relatedDestinations = destinations
    .filter((item) => item.id !== destination.id)
    .slice(0, 3);

  const directionsQuery = encodeURIComponent(
    `${name}, ${location}`,
  );

  const directionsHref =
    `https://www.google.com/maps/search/?api=1&query=${directionsQuery}`;

  return (
    <PageShell>
      <main className="bg-tourism-surface pb-16 sm:pb-20">
        {/* ======================================================
            HERO
           ====================================================== */}
        <section className="bg-tourism-navy text-white">
          <Container className="py-5 sm:py-6">
            <Link
              href="/destinations"
              className="inline-flex items-center gap-2 text-xs font-bold text-white/80 transition hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-tourism-pink focus-visible:ring-offset-2 focus-visible:ring-offset-tourism-navy motion-reduce:transition-none"
            >
              <ArrowLeft
                aria-hidden="true"
                className="size-4"
              />

              {translations.common.back}{" "}
              {filipino
                ? "sa mga destinasyon"
                : "to destinations"}
            </Link>
          </Container>

          <div className="relative h-[300px] sm:h-[420px]">
            <TourismImage
              src={destination.image}
              alt={imageAlt}
              priority
              sizes="100vw"
              fallbackLabel={
                filipino
                  ? "Hindi available ang larawan ng destinasyon"
                  : "Destination photography unavailable"
              }
            />

            <div className="absolute inset-0 bg-gradient-to-t from-tourism-navy via-tourism-navy/35 to-tourism-navy/5" />

            <Container className="absolute inset-x-0 bottom-0">
              <div className="max-w-3xl pb-8 sm:pb-10">
                <p className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-tourism-pink">
                  {category}
                </p>

                <h1 className="mt-2 text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl">
                  {name}
                </h1>

                <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-white/75">
                  <span className="inline-flex items-center gap-2">
                    <MapPin
                      aria-hidden="true"
                      className="size-4"
                    />
                    {location}
                  </span>

                  <span className="inline-flex items-center gap-2">
                    <Star
                      aria-hidden="true"
                      className="size-4 fill-current"
                    />
                    {destination.rating.toFixed(1)}
                  </span>

                  <span className="inline-flex items-center gap-2">
                    <Clock3
                      aria-hidden="true"
                      className="size-4"
                    />
                    {distance}
                  </span>
                </div>
              </div>
            </Container>
          </div>
        </section>

        {/* ======================================================
            MAIN CONTENT
           ====================================================== */}
        <Container className="py-10 sm:py-14">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_320px]">
            <div className="space-y-8">
              {/* ABOUT */}
              <section className="rounded-2xl border border-tourism-border bg-white p-6 sm:p-8">
                <p className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-tourism-pink">
                  {filipino
                    ? "TUNGKOL SA LUGAR"
                    : "ABOUT THE DESTINATION"}
                </p>

                <h2 className="mt-2 text-2xl font-black tracking-tight text-tourism-navy sm:text-3xl">
                  {name}
                </h2>

                <p className="mt-4 text-sm leading-7 text-tourism-muted sm:text-base">
                  {description}
                </p>
              </section>

              {/* TRAVEL GUIDANCE */}
              <section className="rounded-2xl border border-tourism-border bg-white p-6 sm:p-8">
                <p className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-tourism-pink">
                  {filipino
                    ? "GABAY SA PAGLALAKBAY"
                    : "TRAVEL GUIDANCE"}
                </p>

                <h2 className="mt-2 text-xl font-black text-tourism-navy sm:text-2xl">
                  {filipino
                    ? "Bago ka pumunta"
                    : "Before you go"}
                </h2>

                <p className="mt-4 text-sm leading-7 text-tourism-muted sm:text-base">
                  {travelGuidance}
                </p>
              </section>

              {/* VISITOR GUIDELINES */}
              {visitorGuidelines.length > 0 && (
                <section className="rounded-2xl border border-tourism-border bg-white p-6 sm:p-8">
                  <p className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-tourism-pink">
                    {filipino
                      ? "PAALALA SA BISITA"
                      : "VISITOR GUIDELINES"}
                  </p>

                  <h2 className="mt-2 text-xl font-black text-tourism-navy sm:text-2xl">
                    {filipino
                      ? "Pananagutan ng bisita"
                      : "Visitor responsibilities"}
                  </h2>

                  <ul className="mt-5 space-y-3">
                    {visitorGuidelines.map(
                      (guideline, index) => {
                        const guidelineText =
                          guideline[locale];

                        return (
                          <li
                            key={`${destination.id}-guideline-${index}`}
                            className="flex gap-3 text-sm leading-6 text-tourism-muted sm:text-base"
                          >
                            <span
                              aria-hidden="true"
                              className="mt-2 size-1.5 shrink-0 rounded-full bg-tourism-pink"
                            />

                            <span>{guidelineText}</span>
                          </li>
                        );
                      },
                    )}
                  </ul>
                </section>
              )}
            </div>

            {/* ==================================================
                SIDEBAR
               ================================================== */}
            <aside className="space-y-4">
              <div className="rounded-2xl border border-tourism-border bg-white p-5 sm:p-6">
                <p className="text-[10px] font-extrabold uppercase tracking-[0.18em] text-tourism-pink">
                  {filipino
                    ? "PLANUHIN ANG BIYAHE"
                    : "PLAN YOUR VISIT"}
                </p>

                <div className="mt-4 space-y-4">
                  {/* LOCATION */}
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-tourism-soft">
                      {filipino
                        ? "Lokasyon"
                        : "Location"}
                    </p>

                    <div className="mt-1 flex items-start gap-2 text-sm font-semibold text-tourism-navy">
                      <MapPin
                        aria-hidden="true"
                        className="mt-0.5 size-4 shrink-0 text-tourism-pink"
                      />

                      <span>{location}</span>
                    </div>
                  </div>

                  {/* DISTANCE */}
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-tourism-soft">
                      {filipino
                        ? "Distansya"
                        : "Distance"}
                    </p>

                    <div className="mt-1 flex items-center gap-2 text-sm font-semibold text-tourism-navy">
                      <Clock3
                        aria-hidden="true"
                        className="size-4 text-tourism-pink"
                      />

                      <span>{distance}</span>
                    </div>
                  </div>

                  {/* CATEGORY */}
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-tourism-soft">
                      {filipino
                        ? "Kategorya"
                        : "Category"}
                    </p>

                    <p className="mt-1 text-sm font-semibold text-tourism-navy">
                      {category}
                    </p>
                  </div>
                </div>

                <div className="mt-6 flex flex-col gap-3">
                  {/* FAVORITES */}
                  <FavoriteButton
                    itemId={`destination:${destination.id}`}
                    label={name}
                  />

                  {/* GOOGLE MAPS */}
                  <Link
                    href={directionsHref}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-tourism-pink px-4 py-3 text-sm font-bold text-white transition hover:bg-tourism-pink-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-tourism-pink focus-visible:ring-offset-2 motion-reduce:transition-none"
                  >
                    <Navigation
                      aria-hidden="true"
                      className="size-4"
                    />

                    {filipino
                      ? "Buksan ang Maps"
                      : "Open in Maps"}
                  </Link>
                </div>
              </div>

              {/* QUICK NOTE */}
              <div className="rounded-2xl border border-tourism-border bg-tourism-warm p-5 sm:p-6">
                <p className="text-[10px] font-extrabold uppercase tracking-[0.18em] text-tourism-pink">
                  {filipino
                    ? "MABILIS NA PAALALA"
                    : "QUICK NOTE"}
                </p>

                <p className="mt-3 text-sm leading-6 text-tourism-navy/75">
                  {filipino
                    ? "Kumpirmahin ang kasalukuyang access, kondisyon ng biyahe, at mga lokal na alituntunin bago umalis."
                    : "Confirm current access conditions, travel details, and local guidance before departure."}
                </p>
              </div>
            </aside>
          </div>
        </Container>

        {/* ======================================================
            RELATED DESTINATIONS
           ====================================================== */}
        {relatedDestinations.length > 0 && (
          <section className="border-t border-tourism-border bg-white">
            <Container className="py-12 sm:py-16">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <div className="flex items-center gap-3">
                    <span className="h-px w-5 bg-tourism-pink" />

                    <p className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-tourism-pink">
                      {filipino
                        ? "MGA KAUGNAY NA LUGAR"
                        : "RELATED DESTINATIONS"}
                    </p>
                  </div>

                  <h2 className="mt-3 text-2xl font-black tracking-tight text-tourism-navy sm:text-3xl">
                    {filipino
                      ? "Mag-explore pa"
                      : "Explore more"}
                  </h2>
                </div>

                <Link
                  href="/destinations"
                  className="text-sm font-bold text-tourism-navy transition hover:text-tourism-pink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-tourism-pink focus-visible:ring-offset-2 motion-reduce:transition-none"
                >
                  {filipino
                    ? "Tingnan lahat"
                    : "View all destinations"}
                </Link>
              </div>

              <div className="mt-7 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                {relatedDestinations.map((item) => (
                  <DestinationCard
                    key={item.id}
                    destination={item}
                    locale={locale}
                  />
                ))}
              </div>
            </Container>
          </section>
        )}
      </main>
    </PageShell>
  );
}