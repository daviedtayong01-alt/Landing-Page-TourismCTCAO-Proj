import Link from "next/link";
import { ArrowLeft, MapPin, Phone, Star } from "lucide-react";
import { notFound } from "next/navigation";

import { EstablishmentCard } from "@/components/home/EstablishmentCard";
import { FavoriteButton } from "@/components/home/FavoriteButton";
import { TourismImage } from "@/components/home/TourismImage";
import { Container } from "@/components/layout/Container";
import { PageShell } from "@/components/layout/PageShell";
import { establishments } from "@/data/tourism";

interface BusinessDetailPageProps {
  params: Promise<{ id: string }>;
}

export default async function BusinessDetailPage({ params }: BusinessDetailPageProps) {
  const { id } = await params;
  const establishment = establishments.find((item) => item.id === id);

  if (!establishment) {
    notFound();
  }

  const relatedEstablishments = establishments.filter((item) => item.id !== establishment.id).slice(0, 2);
  const directionsQuery = encodeURIComponent(`${establishment.name}, ${establishment.location}`);

  return (
    <PageShell>
      <main className="bg-tourism-surface pb-16 sm:pb-20">
        <section className="bg-tourism-navy text-white">
          <Container className="py-6"><Link href="/business-directory" className="inline-flex items-center gap-2 text-xs font-bold text-white/80 hover:text-white"><ArrowLeft className="size-4" />Back to directory</Link></Container>
          <div className="relative h-[300px] sm:h-[420px]">
            <TourismImage src={establishment.image} alt={establishment.imageAlt} priority sizes="100vw" fallbackLabel="Establishment photography unavailable" />
            <div className="absolute inset-0 bg-gradient-to-t from-tourism-navy via-tourism-navy/30 to-transparent" />
            <Container className="relative flex h-full items-end pb-8 sm:pb-12"><div className="max-w-3xl"><p className="inline-flex rounded-full bg-tourism-pink px-3 py-1 text-[9px] font-extrabold uppercase tracking-wide text-white">{establishment.accreditationStatus}</p><h1 className="mt-4 text-4xl font-black tracking-tight sm:text-6xl">{establishment.name}</h1><p className="mt-3 text-sm text-white/80">{establishment.category}</p></div></Container>
            <FavoriteButton itemId={`establishment:${establishment.id}`} label={establishment.name} className="absolute bottom-8 right-5 flex size-11 items-center justify-center rounded-full bg-white text-tourism-pink shadow-lg sm:bottom-12 sm:right-8 lg:right-12" iconClassName="size-5" />
          </div>
        </section>

        <Container className="pt-10 sm:pt-14">
          <div className="grid gap-6 lg:grid-cols-[minmax(0,1.5fr)_340px]">
            <article className="rounded-2xl border border-tourism-border bg-white p-6 sm:p-8">
              <p className="flex items-center gap-2 text-sm font-bold text-tourism-pink"><Star className="size-4 fill-current" />{establishment.rating} directory rating</p>
              <h2 className="mt-6 text-2xl font-black tracking-tight text-tourism-navy">About this establishment</h2>
              <p className="mt-4 text-sm leading-7 text-tourism-muted">{establishment.description}</p>
              {establishment.amenities && establishment.amenities.length > 0 && <><h2 className="mt-9 text-xl font-extrabold text-tourism-navy">Published amenities</h2><div className="mt-4 flex flex-wrap gap-2">{establishment.amenities.map((amenity) => <span key={amenity} className="rounded-full bg-tourism-pink/10 px-3 py-1.5 text-xs font-bold text-tourism-pink">{amenity}</span>)}</div></>}
              <h2 className="mt-9 text-xl font-extrabold text-tourism-navy">Certification</h2>
              <p className="mt-4 text-sm leading-7 text-tourism-muted">This listing is marked as {establishment.accreditationStatus}. Confirm current accreditation and service details directly with the establishment before booking.</p>
            </article>

            <aside className="space-y-6">
              <section className="rounded-2xl border border-tourism-border bg-white p-6"><h2 className="text-lg font-extrabold text-tourism-navy">Contact and location</h2><div className="mt-5 space-y-4 text-sm text-tourism-muted"><p className="flex items-start gap-2"><MapPin className="mt-0.5 size-4 shrink-0 text-tourism-pink" />{establishment.location}</p>{establishment.phone && <p className="flex items-center gap-2"><Phone className="size-4 shrink-0 text-tourism-pink" />{establishment.phone}</p>}</div><a href={`https://www.google.com/maps/search/?api=1&query=${directionsQuery}`} target="_blank" rel="noreferrer" className="mt-6 inline-flex min-h-10 items-center justify-center rounded-lg bg-tourism-pink px-4 text-xs font-bold text-white transition hover:bg-tourism-pink-dark">Get directions</a></section>
              <section className="overflow-hidden rounded-2xl border border-tourism-border bg-white"><div role="img" aria-label={`Map location for ${establishment.name}`} className="flex min-h-[180px] items-center justify-center bg-[radial-gradient(circle_at_30%_35%,rgba(245,43,145,.24),transparent_15%),linear-gradient(135deg,#dce8cc,#b7d7a2)] p-6 text-center"><div><MapPin className="mx-auto size-7 text-tourism-pink" /><p className="mt-3 text-sm font-extrabold text-tourism-navy">{establishment.location}</p></div></div><div className="p-4"><p className="text-xs leading-5 text-tourism-muted">Open the directions link for a location search in your maps service.</p></div></section>
            </aside>
          </div>

          {relatedEstablishments.length > 0 && <section className="mt-14"><p className="text-[10px] font-extrabold uppercase tracking-[0.16em] text-tourism-pink">Related listings</p><h2 className="mt-3 text-3xl font-black tracking-tight text-tourism-navy">Other accredited establishments</h2><div className="mt-6 grid items-stretch gap-5 md:grid-cols-2">{relatedEstablishments.map((item) => <EstablishmentCard key={item.id} establishment={item} />)}</div></section>}
        </Container>
      </main>
    </PageShell>
  );
}
