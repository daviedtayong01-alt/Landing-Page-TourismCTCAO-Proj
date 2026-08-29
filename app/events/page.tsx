import { EventsDirectory } from "@/components/directory/EventsDirectory";
import { Container } from "@/components/layout/Container";
import { PageShell } from "@/components/layout/PageShell";
import { PageHeader } from "@/components/tourism/PageHeader";
import { tourismEvents } from "@/data/tourism";

export default function EventsPage() {
  const featuredEvent = tourismEvents[0];

  return (
    <PageShell>
      <PageHeader
        eyebrow="Events and Updates"
        title="What’s happening in Koronadal"
        description="Browse tourism events, visitor guidance, and city travel updates in one place."
      />
      <Container>
        {featuredEvent && (
          <section className="-mt-4 rounded-2xl border border-tourism-border bg-white p-5 shadow-sm sm:-mt-6 sm:p-6">
            <p className="text-[10px] font-extrabold uppercase tracking-[0.16em] text-tourism-pink">Featured update</p>
            <h2 className="mt-2 text-2xl font-black tracking-tight text-tourism-navy">{featuredEvent.name}</h2>
            <p className="mt-2 text-sm leading-6 text-tourism-muted">{featuredEvent.description}</p>
          </section>
        )}
        <EventsDirectory events={tourismEvents} />
      </Container>
    </PageShell>
  );
}
