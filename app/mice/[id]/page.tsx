import Link from "next/link";
import { ArrowLeft, MapPin, Users } from "lucide-react";
import { notFound } from "next/navigation";

import { FavoriteButton } from "@/components/home/FavoriteButton";
import { TourismImage } from "@/components/home/TourismImage";
import { Container } from "@/components/layout/Container";
import { PageShell } from "@/components/layout/PageShell";
import { MiceVenueCard } from "@/components/tourism/MiceVenueCard";
import { miceVenues } from "@/data/tourism";

interface MiceDetailPageProps {
  params: Promise<{ id: string }>;
}

export default async function MiceDetailPage({ params }: MiceDetailPageProps) {
  const { id } = await params;
  const venue = miceVenues.find((item) => item.id === id);

  if (!venue) {
    notFound();
  }

  const relatedVenues = miceVenues.filter((item) => item.id !== venue.id).slice(0, 2);
  const directionsQuery = encodeURIComponent(`${venue.name}, ${venue.location}`);

  return (
    <PageShell>
      <main className="bg-tourism-surface pb-16 sm:pb-20">
        <section className="bg-tourism-navy text-white">
          <Container className="py-6">
            <Link href="/mice" className="inline-flex items-center gap-2 text-xs font-bold text-white/80 hover:text-white"><ArrowLeft className="size-4" />Back to MICE venues</Link>
          </Container>
          <div className="relative h-[300px] sm:h-[420px]">
            <TourismImage src={venue.image} alt={venue.imageAlt} priority sizes="100vw" fallbackLabel="Venue photography unavailable" />
            <div className="absolute inset-0 bg-gradient-to-t from-tourism-navy via-tourism-navy/30 to-transparent" />
            <Container className="relative flex h-full items-end pb-8 sm:pb-12">
              <div className="max-w-3xl">
                <p className="inline-flex rounded-full bg-tourism-pink px-3 py-1 text-[9px] font-extrabold uppercase tracking-wide text-white">{venue.venueType}</p>
                <h1 className="mt-4 text-4xl font-black tracking-tight sm:text-6xl">{venue.name}</h1>
                <p className="mt-3 flex items-center gap-2 text-sm text-white/80"><MapPin className="size-4" />{venue.location}</p>
              </div>
            </Container>
            <FavoriteButton itemId={`mice:${venue.id}`} label={venue.name} className="absolute bottom-8 right-5 flex size-11 items-center justify-center rounded-full bg-white text-tourism-pink shadow-lg sm:bottom-12 sm:right-8 lg:right-12" iconClassName="size-5" />
          </div>
        </section>

        <Container className="pt-10 sm:pt-14">
          <div className="grid gap-6 lg:grid-cols-[minmax(0,1.5fr)_340px]">
            <article className="rounded-2xl border border-tourism-border bg-white p-6 sm:p-8">
              <h2 className="text-2xl font-black tracking-tight text-tourism-navy">About the venue</h2>
              <p className="mt-4 text-sm leading-7 text-tourism-muted">This directory profile presents the currently published venue information for organizers comparing spaces in Koronadal.</p>

              <h2 className="mt-9 text-xl font-extrabold text-tourism-navy">Facilities and amenities</h2>
              <div className="mt-4 flex flex-wrap gap-2">
                {venue.tags.map((tag) => <span key={tag} className="rounded-full bg-tourism-pink/10 px-3 py-1.5 text-xs font-bold text-tourism-pink">{tag}</span>)}
              </div>

              <h2 className="mt-9 text-xl font-extrabold text-tourism-navy">Inquiry and location</h2>
              <p className="mt-4 text-sm leading-7 text-tourism-muted">Contact the venue directly to confirm availability, room configuration, technical requirements, and current booking conditions.</p>
              <a href={`https://www.google.com/maps/search/?api=1&query=${directionsQuery}`} target="_blank" rel="noreferrer" className="mt-5 inline-flex min-h-10 items-center justify-center rounded-lg bg-tourism-pink px-4 text-xs font-bold text-white transition hover:bg-tourism-pink-dark">Get directions</a>
            </article>

            <aside className="space-y-6">
              <section className="rounded-2xl border border-tourism-border bg-white p-6">
                <h2 className="text-lg font-extrabold text-tourism-navy">Venue profile</h2>
                <dl className="mt-5 space-y-4 text-sm">
                  <div><dt className="font-bold text-tourism-navy">Venue type</dt><dd className="mt-1 text-tourism-muted">{venue.venueType}</dd></div>
                  <div><dt className="font-bold text-tourism-navy">Listed capacity</dt><dd className="mt-1 flex items-center gap-2 text-tourism-muted"><Users className="size-4" />{venue.capacity}</dd></div>
                  <div><dt className="font-bold text-tourism-navy">Directory status</dt><dd className="mt-1 text-tourism-muted">{venue.accredited ? "Accredited listing" : "Listed venue"}</dd></div>
                </dl>
              </section>
              <section className="overflow-hidden rounded-2xl border border-tourism-border bg-white">
                <div role="img" aria-label={`Map location for ${venue.name}`} className="flex min-h-[180px] items-center justify-center bg-[radial-gradient(circle_at_30%_35%,rgba(245,43,145,.24),transparent_15%),linear-gradient(135deg,#dce8cc,#b7d7a2)] p-6 text-center"><div><MapPin className="mx-auto size-7 text-tourism-pink" /><p className="mt-3 text-sm font-extrabold text-tourism-navy">{venue.location}</p></div></div>
                <div className="p-4"><p className="text-xs leading-5 text-tourism-muted">Use the directions action to open the venue location in a maps service.</p></div>
              </section>
            </aside>
          </div>

          {relatedVenues.length > 0 && (
            <section className="mt-14">
              <p className="text-[10px] font-extrabold uppercase tracking-[0.16em] text-tourism-pink">Related venues</p>
              <h2 className="mt-3 text-3xl font-black tracking-tight text-tourism-navy">Compare other spaces</h2>
              <div className="mt-6 grid items-stretch gap-5 md:grid-cols-2">{relatedVenues.map((item) => <MiceVenueCard key={item.id} venue={item} />)}</div>
            </section>
          )}
        </Container>
      </main>
    </PageShell>
  );
}
