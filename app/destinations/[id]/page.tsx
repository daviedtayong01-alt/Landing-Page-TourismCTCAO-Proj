import Link from "next/link";
import { ArrowLeft, MapPin, Star } from "lucide-react";
import { notFound } from "next/navigation";

import { FavoriteButton } from "@/components/home/FavoriteButton";
import { TourismImage } from "@/components/home/TourismImage";
import { Container } from "@/components/layout/Container";
import { PageShell } from "@/components/layout/PageShell";
import { DestinationCard } from "@/components/tourism/DestinationCard";
import { destinations } from "@/data/tourism";

interface DestinationDetailPageProps {
  params: Promise<{ id: string }>;
}

export default async function DestinationDetailPage({
  params,
}: DestinationDetailPageProps) {
  const { id } = await params;
  const destination = destinations.find((item) => item.id === id);

  if (!destination) {
    notFound();
  }

  const relatedDestinations = destinations
    .filter((item) => item.id !== destination.id)
    .slice(0, 3);
  const directionsQuery = encodeURIComponent(`${destination.name}, ${destination.location}`);

  return (
    <PageShell>
      <main className="bg-tourism-surface pb-16 sm:pb-20">
        <section className="bg-tourism-navy text-white">
          <Container className="py-6">
            <Link href="/destinations" className="inline-flex items-center gap-2 text-xs font-bold text-white/80 hover:text-white">
              <ArrowLeft className="size-4" />
              Back to destinations
            </Link>
          </Container>
          <div className="relative h-[300px] sm:h-[420px]">
            <TourismImage
              src={destination.image}
              alt={destination.imageAlt}
              priority
              sizes="100vw"
              fallbackLabel="Destination photography unavailable"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-tourism-navy via-tourism-navy/30 to-transparent" />
            <Container className="relative flex h-full items-end pb-8 sm:pb-12">
              <div className="max-w-3xl">
                <p className="inline-flex rounded-full bg-tourism-pink px-3 py-1 text-[9px] font-extrabold uppercase tracking-wide text-white">{destination.category}</p>
                <h1 className="mt-4 text-4xl font-black tracking-tight sm:text-6xl">{destination.name}</h1>
                <p className="mt-3 flex items-center gap-2 text-sm text-white/80"><MapPin className="size-4" />{destination.location}</p>
              </div>
            </Container>
            <FavoriteButton
              itemId={`destination:${destination.id}`}
              label={destination.name}
              className="absolute bottom-8 right-5 flex size-11 items-center justify-center rounded-full bg-white text-tourism-pink shadow-lg sm:bottom-12 sm:right-8 lg:right-12"
              iconClassName="size-5"
            />
          </div>
        </section>

        <Container className="pt-10 sm:pt-14">
          <div className="grid gap-6 lg:grid-cols-[minmax(0,1.5fr)_340px]">
            <article className="rounded-2xl border border-tourism-border bg-white p-6 sm:p-8">
              <p className="flex items-center gap-2 text-sm font-bold text-tourism-pink"><Star className="size-4 fill-current" />{destination.rating} visitor listing rating</p>
              <h2 className="mt-6 text-2xl font-black tracking-tight text-tourism-navy">About the destination</h2>
              <p className="mt-4 text-sm leading-7 text-tourism-muted">{destination.description}</p>

              <h2 className="mt-9 text-xl font-extrabold text-tourism-navy">Visitor guidance</h2>
              <ul className="mt-4 space-y-3 text-sm leading-6 text-tourism-muted">
                {(destination.visitorGuidelines ?? []).map((guideline) => <li key={guideline} className="flex gap-3"><span aria-hidden="true" className="mt-2 size-1.5 shrink-0 rounded-full bg-tourism-pink" />{guideline}</li>)}
              </ul>

              <h2 className="mt-9 text-xl font-extrabold text-tourism-navy">How to get there</h2>
              <p className="mt-4 text-sm leading-7 text-tourism-muted">{destination.travelGuidance ?? "Plan your transport locally and confirm current access information before leaving the city center."}</p>
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${directionsQuery}`}
                target="_blank"
                rel="noreferrer"
                className="mt-5 inline-flex min-h-10 items-center justify-center rounded-lg bg-tourism-pink px-4 text-xs font-bold text-white transition hover:bg-tourism-pink-dark"
              >
                Get directions
              </a>
            </article>

            <aside className="space-y-6">
              <section className="rounded-2xl border border-tourism-border bg-white p-6">
                <h2 className="text-lg font-extrabold text-tourism-navy">At a glance</h2>
                <dl className="mt-5 space-y-4 text-sm">
                  <div><dt className="font-bold text-tourism-navy">Location</dt><dd className="mt-1 text-tourism-muted">{destination.location}</dd></div>
                  <div><dt className="font-bold text-tourism-navy">Travel time</dt><dd className="mt-1 text-tourism-muted">{destination.distance}</dd></div>
                  <div><dt className="font-bold text-tourism-navy">Category</dt><dd className="mt-1 text-tourism-muted">{destination.category}</dd></div>
                </dl>
              </section>
              <section className="overflow-hidden rounded-2xl border border-tourism-border bg-white">
                <div role="img" aria-label={`Map location for ${destination.name}`} className="flex min-h-[180px] items-center justify-center bg-[radial-gradient(circle_at_30%_35%,rgba(245,43,145,.24),transparent_15%),linear-gradient(135deg,#dce8cc,#b7d7a2)] p-6 text-center">
                  <div><MapPin className="mx-auto size-7 text-tourism-pink" /><p className="mt-3 text-sm font-extrabold text-tourism-navy">{destination.location}</p></div>
                </div>
                <div className="p-4"><p className="text-xs leading-5 text-tourism-muted">Use the directions action to open the location search in your preferred maps service.</p></div>
              </section>
            </aside>
          </div>

          {relatedDestinations.length > 0 && (
            <section className="mt-14">
              <p className="text-[10px] font-extrabold uppercase tracking-[0.16em] text-tourism-pink">Keep exploring</p>
              <h2 className="mt-3 text-3xl font-black tracking-tight text-tourism-navy">Nearby destination listings</h2>
              <div className="mt-6 grid items-stretch gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {relatedDestinations.map((item) => <DestinationCard key={item.id} destination={item} />)}
              </div>
            </section>
          )}
        </Container>
      </main>
    </PageShell>
  );
}
