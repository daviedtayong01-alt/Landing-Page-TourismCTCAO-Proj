import Link from "next/link";
import {
  ArrowLeft,
  MapPin,
  Phone,
  Star,
} from "lucide-react";
import { notFound } from "next/navigation";

import { EstablishmentCard } from "@/components/home/EstablishmentCard";
import { FavoriteButton } from "@/components/home/FavoriteButton";
import { TourismImage } from "@/components/home/TourismImage";
import { Container } from "@/components/layout/Container";
import { PageShell } from "@/components/layout/PageShell";

import { getLocale } from "@/lib/i18n/locale";
import { getTranslations } from "@/lib/i18n";
import { establishments } from "@/data/tourism";

interface BusinessDetailPageProps {
  params: Promise<{ id: string }>;
}

export default async function BusinessDetailPage({
  params,
}: BusinessDetailPageProps) {
  const { id } = await params;

  const establishment = establishments.find(
    (item) => item.id === id,
  );

  if (!establishment) {
    notFound();
  }

  const locale = await getLocale();
  const translations = getTranslations(locale);
  const filipino = locale === "fil";

  const relatedEstablishments = establishments
    .filter((item) => item.id !== establishment.id)
    .slice(0, 2);

  /*
   * ============================================================
   * LOCALIZED CONTENT
   * ============================================================
   */

  const name = establishment.name[locale];

  const category =
    establishment.category[locale];

  const location =
    establishment.location[locale];

  const description =
    establishment.description[locale];

  const imageAlt =
    establishment.imageAlt[locale];

  const accreditationStatus =
    establishment.accreditationStatus[locale];

  const amenities =
    establishment.amenities ?? [];

  /*
   * ============================================================
   * GOOGLE MAPS
   * ============================================================
   */

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
          <Container className="py-6">
            <Link
              href="/business-directory"
              className="inline-flex items-center gap-2 text-xs font-bold text-white/80 transition hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-tourism-pink focus-visible:ring-offset-2 focus-visible:ring-offset-tourism-navy motion-reduce:transition-none"
            >
              <ArrowLeft
                aria-hidden="true"
                className="size-4"
              />

              {translations.common.back}{" "}
              {filipino
                ? "sa direktoryo"
                : "to directory"}
            </Link>
          </Container>

          <div className="relative h-[300px] sm:h-[420px]">
            <TourismImage
              src={establishment.image}
              alt={imageAlt}
              priority
              sizes="100vw"
              fallbackLabel={
                filipino
                  ? "Hindi available ang larawan ng establisimyento"
                  : "Establishment photography unavailable"
              }
            />

            <div className="absolute inset-0 bg-gradient-to-t from-tourism-navy via-tourism-navy/30 to-transparent" />

            <Container className="relative flex h-full items-end pb-8 sm:pb-12">
              <div className="max-w-3xl">
                <p className="inline-flex rounded-full bg-tourism-pink px-3 py-1 text-[9px] font-extrabold uppercase tracking-wide text-white">
                  {accreditationStatus}
                </p>

                <h1 className="mt-4 text-4xl font-black tracking-tight sm:text-6xl">
                  {name}
                </h1>

                <p className="mt-3 text-sm text-white/80">
                  {category}
                </p>
              </div>
            </Container>

            <FavoriteButton
              itemId={`establishment:${establishment.id}`}
              label={name}
              className="absolute bottom-8 right-5 flex size-11 items-center justify-center rounded-full bg-white text-tourism-pink shadow-lg sm:bottom-12 sm:right-8 lg:right-12"
              iconClassName="size-5"
            />
          </div>
        </section>

        {/* ======================================================
            CONTENT
           ====================================================== */}
        <Container className="pt-10 sm:pt-14">
          <div className="grid gap-6 lg:grid-cols-[minmax(0,1.5fr)_340px]">
            {/* ==================================================
                MAIN INFORMATION
               ================================================== */}
            <article className="rounded-2xl border border-tourism-border bg-white p-6 sm:p-8">
              {/* RATING */}
              <p
                aria-label={
                  filipino
                    ? `Rating ng direktoryo: ${establishment.rating}`
                    : `${establishment.rating} directory rating`
                }
                className="flex items-center gap-2 text-sm font-bold text-tourism-pink"
              >
                <Star
                  aria-hidden="true"
                  className="size-4 fill-current"
                />

                {establishment.rating}{" "}
                {filipino
                  ? "rating sa direktoryo"
                  : "directory rating"}
              </p>

              {/* ABOUT */}
              <h2 className="mt-6 text-2xl font-black tracking-tight text-tourism-navy">
                {filipino
                  ? "Tungkol sa establisimyentong ito"
                  : "About this establishment"}
              </h2>

              <p className="mt-4 text-sm leading-7 text-tourism-muted">
                {description}
              </p>

              {/* AMENITIES */}
              {amenities.length > 0 && (
                <>
                  <h2 className="mt-9 text-xl font-extrabold text-tourism-navy">
                    {filipino
                      ? "Mga nailathalang pasilidad"
                      : "Published amenities"}
                  </h2>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {amenities.map((amenity, index) => {
                      const localizedAmenity =
                        amenity[locale];

                      return (
                        <span
                          key={`${establishment.id}-amenity-${index}`}
                          className="rounded-full bg-tourism-pink/10 px-3 py-1.5 text-xs font-bold text-tourism-pink"
                        >
                          {localizedAmenity}
                        </span>
                      );
                    })}
                  </div>
                </>
              )}

              {/* CERTIFICATION */}
              <h2 className="mt-9 text-xl font-extrabold text-tourism-navy">
                {filipino
                  ? "Sertipikasyon"
                  : "Certification"}
              </h2>

              <p className="mt-4 text-sm leading-7 text-tourism-muted">
                {filipino
                  ? `Ang listahang ito ay minarkahan bilang ${accreditationStatus}. Kumpirmahin ang kasalukuyang akreditasyon at detalye ng serbisyo nang direkta sa establisimyento bago mag-book.`
                  : `This listing is marked as ${accreditationStatus}. Confirm current accreditation and service details directly with the establishment before booking.`}
              </p>
            </article>

            {/* ==================================================
                SIDEBAR
               ================================================== */}
            <aside className="space-y-6">
              {/* CONTACT + LOCATION */}
              <section className="rounded-2xl border border-tourism-border bg-white p-6">
                <h2 className="text-lg font-extrabold text-tourism-navy">
                  {filipino
                    ? "Contact at lokasyon"
                    : "Contact and location"}
                </h2>

                <div className="mt-5 space-y-4 text-sm text-tourism-muted">
                  {/* LOCATION */}
                  <p className="flex items-start gap-2">
                    <MapPin
                      aria-hidden="true"
                      className="mt-0.5 size-4 shrink-0 text-tourism-pink"
                    />

                    <span>{location}</span>
                  </p>

                  {/* PHONE */}
                  {establishment.phone && (
                    <p className="flex items-center gap-2">
                      <Phone
                        aria-hidden="true"
                        className="size-4 shrink-0 text-tourism-pink"
                      />

                      <a
                        href={`tel:${establishment.phone}`}
                        className="underline-offset-2 transition hover:text-tourism-navy hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-tourism-pink focus-visible:ring-offset-2"
                      >
                        {establishment.phone}
                      </a>
                    </p>
                  )}
                </div>

                {/* DIRECTIONS */}
                <a
                  href={directionsHref}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 inline-flex min-h-10 items-center justify-center rounded-lg bg-tourism-pink px-4 text-xs font-bold text-white transition hover:bg-tourism-pink-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-tourism-pink focus-visible:ring-offset-2 motion-reduce:transition-none"
                >
                  {filipino
                    ? "Kumuha ng Direksyon"
                    : "Get directions"}
                </a>
              </section>

              {/* MAP PREVIEW */}
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
                      ? "Buksan ang directions link para maghanap ng lokasyon sa iyong maps service."
                      : "Open the directions link for a location search in your maps service."}
                  </p>
                </div>
              </section>
            </aside>
          </div>

          {/* ====================================================
              RELATED LISTINGS
             ==================================================== */}
          {relatedEstablishments.length > 0 && (
            <section className="mt-14">
              <p className="text-[10px] font-extrabold uppercase tracking-[0.16em] text-tourism-pink">
                {filipino
                  ? "Mga Kaugnay na Listahan"
                  : "Related listings"}
              </p>

              <h2 className="mt-3 text-3xl font-black tracking-tight text-tourism-navy">
                {filipino
                  ? "Iba pang akreditadong establisimyento"
                  : "Other accredited establishments"}
              </h2>

              <div className="mt-6 grid items-stretch gap-5 md:grid-cols-2">
                {relatedEstablishments.map(
                  (item) => (
                    <EstablishmentCard
                      key={item.id}
                      establishment={item}
                      locale={locale}
                    />
                  ),
                )}
              </div>
            </section>
          )}
        </Container>
      </main>
    </PageShell>
  );
}