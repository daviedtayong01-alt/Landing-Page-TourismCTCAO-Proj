import Link from "next/link";
import {
  ArrowLeft,
  MapPin,
  Users,
} from "lucide-react";
import { notFound } from "next/navigation";

import { FavoriteButton } from "@/components/home/FavoriteButton";
import { TourismImage } from "@/components/home/TourismImage";
import { Container } from "@/components/layout/Container";
import { PageShell } from "@/components/layout/PageShell";
import { MiceVenueCard } from "@/components/tourism/MiceVenueCard";

import { getLocale } from "@/lib/i18n/locale";
import { miceVenues } from "@/data/tourism";

interface MiceDetailPageProps {
  params: Promise<{ id: string }>;
}

export default async function MiceDetailPage({
  params,
}: MiceDetailPageProps) {
  const { id } = await params;

  const venue = miceVenues.find(
    (item) => item.id === id,
  );

  if (!venue) {
    notFound();
  }

  const locale = await getLocale();
  const filipino = locale === "fil";

  const relatedVenues = miceVenues
    .filter(
      (item) => item.id !== venue.id,
    )
    .slice(0, 2);

  const name = venue.name[locale];
  const location =
    venue.location[locale];
  const venueType =
    venue.venueType[locale];
  const capacity =
    venue.capacity[locale];
  const imageAlt =
    venue.imageAlt[locale];

  const directionsQuery = encodeURIComponent(
    `${name}, ${location}`,
  );

  const directionsHref =
    `https://www.google.com/maps/search/?api=1&query=${directionsQuery}`;

  return (
    <PageShell>
      <main className="bg-tourism-surface pb-16 sm:pb-20">
        <section className="bg-tourism-navy text-white">
          <Container className="py-6">
            <Link
              href="/mice"
              className="inline-flex items-center gap-2 text-xs font-bold text-white/80 transition hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-tourism-pink focus-visible:ring-offset-2 focus-visible:ring-offset-tourism-navy motion-reduce:transition-none"
            >
              <ArrowLeft
                aria-hidden="true"
                className="size-4"
              />

              {filipino
                ? "Bumalik sa mga MICE venue"
                : "Back to MICE venues"}
            </Link>
          </Container>

          <div className="relative h-[300px] sm:h-[420px]">
            <TourismImage
              src={venue.image}
              alt={imageAlt}
              priority
              sizes="100vw"
              fallbackLabel={
                filipino
                  ? "Hindi available ang larawan ng venue"
                  : "Venue photography unavailable"
              }
            />

            <div className="absolute inset-0 bg-gradient-to-t from-tourism-navy via-tourism-navy/30 to-transparent" />

            <Container className="relative flex h-full items-end pb-8 sm:pb-12">
              <div className="max-w-3xl">
                <p className="inline-flex rounded-full bg-tourism-pink px-3 py-1 text-[9px] font-extrabold uppercase tracking-wide text-white">
                  {venueType}
                </p>

                <h1 className="mt-4 text-4xl font-black tracking-tight sm:text-6xl">
                  {name}
                </h1>

                <p className="mt-3 flex items-center gap-2 text-sm text-white/80">
                  <MapPin
                    aria-hidden="true"
                    className="size-4"
                  />

                  {location}
                </p>
              </div>
            </Container>

            <FavoriteButton
              itemId={`mice:${venue.id}`}
              label={name}
              className="absolute bottom-8 right-5 flex size-11 items-center justify-center rounded-full bg-white text-tourism-pink shadow-lg sm:bottom-12 sm:right-8 lg:right-12"
              iconClassName="size-5"
            />
          </div>
        </section>

        <Container className="pt-10 sm:pt-14">
          <div className="grid gap-6 lg:grid-cols-[minmax(0,1.5fr)_340px]">
            <article className="rounded-2xl border border-tourism-border bg-white p-6 sm:p-8">
              <h2 className="text-2xl font-black tracking-tight text-tourism-navy">
                {filipino
                  ? "Tungkol sa Venue"
                  : "About the venue"}
              </h2>

              <p className="mt-4 text-sm leading-7 text-tourism-muted">
                {filipino
                  ? "Ipinapakita ng directory profile na ito ang kasalukuyang nailathalang impormasyon ng venue para sa mga organizer na naghahambing ng mga event space sa Koronadal."
                  : "This directory profile presents the currently published venue information for organizers comparing spaces in Koronadal."}
              </p>

              <h2 className="mt-9 text-xl font-extrabold text-tourism-navy">
                {filipino
                  ? "Mga Pasilidad at Amenity"
                  : "Facilities and amenities"}
              </h2>

              <div className="mt-4 flex flex-wrap gap-2">
                {venue.tags.map((tag) => {
                  const localizedTag =
                    tag[locale];

                  return (
                    <span
                      key={localizedTag}
                      className="rounded-full bg-tourism-pink/10 px-3 py-1.5 text-xs font-bold text-tourism-pink"
                    >
                      {localizedTag}
                    </span>
                  );
                })}
              </div>

              <h2 className="mt-9 text-xl font-extrabold text-tourism-navy">
                {filipino
                  ? "Inquiry at Lokasyon"
                  : "Inquiry and location"}
              </h2>

              <p className="mt-4 text-sm leading-7 text-tourism-muted">
                {filipino
                  ? "Makipag-ugnayan nang direkta sa venue upang kumpirmahin ang availability, room configuration, technical requirements, at kasalukuyang booking conditions."
                  : "Contact the venue directly to confirm availability, room configuration, technical requirements, and current booking conditions."}
              </p>

              <a
                href={directionsHref}
                target="_blank"
                rel="noreferrer"
                className="mt-5 inline-flex min-h-10 items-center justify-center rounded-lg bg-tourism-pink px-4 text-xs font-bold text-white transition hover:bg-tourism-pink-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-tourism-pink focus-visible:ring-offset-2 motion-reduce:transition-none"
              >
                {filipino
                  ? "Kumuha ng Direksyon"
                  : "Get directions"}
              </a>
            </article>

            <aside className="space-y-6">
              <section className="rounded-2xl border border-tourism-border bg-white p-6">
                <h2 className="text-lg font-extrabold text-tourism-navy">
                  {filipino
                    ? "Profile ng Venue"
                    : "Venue profile"}
                </h2>

                <dl className="mt-5 space-y-4 text-sm">
                  <div>
                    <dt className="font-bold text-tourism-navy">
                      {filipino
                        ? "Uri ng venue"
                        : "Venue type"}
                    </dt>

                    <dd className="mt-1 text-tourism-muted">
                      {venueType}
                    </dd>
                  </div>

                  <div>
                    <dt className="font-bold text-tourism-navy">
                      {filipino
                        ? "Nakalistang kapasidad"
                        : "Listed capacity"}
                    </dt>

                    <dd className="mt-1 flex items-center gap-2 text-tourism-muted">
                      <Users
                        aria-hidden="true"
                        className="size-4"
                      />

                      {capacity}
                    </dd>
                  </div>

                  <div>
                    <dt className="font-bold text-tourism-navy">
                      {filipino
                        ? "Status sa Direktoryo"
                        : "Directory status"}
                    </dt>

                    <dd className="mt-1 text-tourism-muted">
                      {venue.accredited
                        ? filipino
                          ? "Akreditadong listahan"
                          : "Accredited listing"
                        : filipino
                          ? "Nakalistang venue"
                          : "Listed venue"}
                    </dd>
                  </div>
                </dl>
              </section>

              <section className="overflow-hidden rounded-2xl border border-tourism-border bg-white">
                <div
                  role="img"
                  aria-label={
                    filipino
                      ? `Lokasyon sa mapa para sa ${name}`
                      : `Map location for ${name}`
                  }
                  className="flex min-h-[180px] items-center justify-center bg-[radial-gradient(circle_at_30%_35%,rgba(245,43,145,.24),transparent_15%),linear-gradient(135deg,#dce8cc,#b7d7a2)] p-6 text-center"
                >
                  <div>
                    <MapPin
                      aria-hidden="true"
                      className="mx-auto size-7 text-tourism-pink"
                    />

                    <p className="mt-3 text-sm font-extrabold text-tourism-navy">
                      {location}
                    </p>
                  </div>
                </div>

                <div className="p-4">
                  <p className="text-xs leading-5 text-tourism-muted">
                    {filipino
                      ? "Gamitin ang directions action upang buksan ang lokasyon ng venue sa isang maps service."
                      : "Use the directions action to open the venue location in a maps service."}
                  </p>
                </div>
              </section>
            </aside>
          </div>

          {relatedVenues.length > 0 && (
            <section className="mt-14">
              <p className="text-[10px] font-extrabold uppercase tracking-[0.16em] text-tourism-pink">
                {filipino
                  ? "Mga Kaugnay na Venue"
                  : "Related venues"}
              </p>

              <h2 className="mt-3 text-3xl font-black tracking-tight text-tourism-navy">
                {filipino
                  ? "Ihambing ang Ibang Space"
                  : "Compare other spaces"}
              </h2>

              <div className="mt-6 grid items-stretch gap-5 md:grid-cols-2">
                {relatedVenues.map((item) => (
                  <MiceVenueCard
                    key={item.id}
                    venue={item}
                    locale={locale}
                  />
                ))}
              </div>
            </section>
          )}
        </Container>
      </main>
    </PageShell>
  );
}