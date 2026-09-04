import Link from "next/link";
import {
  ArrowLeft,
  CalendarDays,
  MapPin,
} from "lucide-react";
import { notFound } from "next/navigation";

import { TourismImage } from "@/components/home/TourismImage";
import { Container } from "@/components/layout/Container";
import { PageShell } from "@/components/layout/PageShell";

import { getLocale } from "@/lib/i18n/locale";
import { tourismEvents } from "@/data/tourism";

interface EventDetailPageProps {
  params: Promise<{ id: string }>;
}

export default async function EventDetailPage({
  params,
}: EventDetailPageProps) {
  const { id } = await params;

  const event = tourismEvents.find(
    (item) => item.id === id,
  );

  if (!event) {
    notFound();
  }

  const locale = await getLocale();
  const filipino = locale === "fil";

  const imageAlt =
    event.imageAlt[locale];

  const category =
    event.category[locale];

  const name = event.name[locale];

  const dateLabel =
    event.dateLabel[locale];

  const location =
    event.location[locale];

  const description =
    event.description[locale];

  return (
    <PageShell>
      <main className="bg-tourism-surface pb-16 sm:pb-20">
        <Container className="py-6">
          <Link
            href="/events"
            className="inline-flex items-center gap-2 text-xs font-bold text-tourism-navy transition hover:text-tourism-pink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-tourism-pink focus-visible:ring-offset-2 motion-reduce:transition-none"
          >
            <ArrowLeft
              aria-hidden="true"
              className="size-4"
            />

            {filipino
              ? "Bumalik sa mga kaganapan at update"
              : "Back to events and updates"}
          </Link>
        </Container>

        <Container>
          <article className="overflow-hidden rounded-2xl border border-tourism-border bg-white shadow-sm">
            <div className="relative aspect-[2.2] min-h-[250px]">
              <TourismImage
                src={event.image}
                alt={imageAlt}
                priority
                sizes="(max-width: 1280px) 100vw, 1200px"
                fallbackLabel={
                  filipino
                    ? "Hindi available ang larawan ng kaganapan"
                    : "Event photography unavailable"
                }
              />
            </div>

            <div className="max-w-4xl p-6 sm:p-10">
              <p className="text-[10px] font-extrabold uppercase tracking-[0.16em] text-tourism-pink">
                {category}
              </p>

              <h1 className="mt-3 text-3xl font-black tracking-tight text-tourism-navy sm:text-5xl">
                {name}
              </h1>

              <div className="mt-5 grid gap-3 text-sm text-tourism-muted sm:grid-cols-2">
                <p className="flex items-center gap-2">
                  <CalendarDays
                    aria-hidden="true"
                    className="size-4 text-tourism-pink"
                  />

                  {dateLabel}
                </p>

                <p className="flex items-center gap-2">
                  <MapPin
                    aria-hidden="true"
                    className="size-4 text-tourism-pink"
                  />

                  {location}
                </p>
              </div>

              <div className="mt-8 border-t border-tourism-border pt-7">
                <h2 className="text-xl font-extrabold text-tourism-navy">
                  {filipino
                    ? "Impormasyon ng Kaganapan"
                    : "Event information"}
                </h2>

                <p className="mt-4 text-sm leading-7 text-tourism-muted">
                  {description}
                </p>

                <p className="mt-4 text-sm leading-7 text-tourism-muted">
                  {filipino
                    ? "Kumpirmahin ang huling iskedyul, kondisyon ng pag-access, at mga detalye ng programa sa kaukulang opisyal na organizer bago dumalo."
                    : "Confirm final schedules, access conditions, and program details through the relevant official organizer before attending."}
                </p>
              </div>
            </div>
          </article>
        </Container>
      </main>
    </PageShell>
  );
}