import { EventsDirectory } from "@/components/directory/EventsDirectory";
import { Container } from "@/components/layout/Container";
import { PageShell } from "@/components/layout/PageShell";
import { PageHeader } from "@/components/tourism/PageHeader";

import { getLocale } from "@/lib/i18n/locale";
import { tourismEvents } from "@/data/tourism";

export default async function EventsPage() {
  const locale = await getLocale();
  const filipino = locale === "fil";

  const featuredEvent = tourismEvents[0];

  return (
    <PageShell>
      <PageHeader
        eyebrow={
          filipino
            ? "Mga Kaganapan at Update"
            : "Events and Updates"
        }
        title={
          filipino
            ? "Ano ang nangyayari sa Koronadal"
            : "What’s happening in Koronadal"
        }
        description={
          filipino
            ? "Mag-browse ng mga kaganapan sa turismo, gabay para sa mga bisita, at mga update sa paglalakbay sa lungsod."
            : "Browse tourism events, visitor guidance, and city travel updates in one place."
        }
      />

      <Container>
        {featuredEvent && (
          <section className="-mt-4 rounded-2xl border border-tourism-border bg-white p-5 shadow-sm sm:-mt-6 sm:p-6">
            <p className="text-[10px] font-extrabold uppercase tracking-[0.16em] text-tourism-pink">
              {filipino
                ? "Tampok na Update"
                : "Featured update"}
            </p>

            <h2 className="mt-2 text-2xl font-black tracking-tight text-tourism-navy">
              {featuredEvent.name[locale]}
            </h2>

            <p className="mt-2 text-sm leading-6 text-tourism-muted">
              {featuredEvent.description[
                locale
              ]}
            </p>
          </section>
        )}

        <EventsDirectory
          events={tourismEvents}
          locale={locale}
        />
      </Container>
    </PageShell>
  );
}