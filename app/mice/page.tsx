import { MiceDirectory } from "@/components/directory/MiceDirectory";
import { Container } from "@/components/layout/Container";
import { PageShell } from "@/components/layout/PageShell";
import { PageHeader } from "@/components/tourism/PageHeader";
import { getLocale } from "@/lib/i18n/locale";
import { miceVenues } from "@/data/tourism";

export default async function MicePage() {
  const locale = await getLocale();
  const filipino = locale === "fil";

  return (
    <PageShell>
      <PageHeader
        eyebrow={
          filipino
            ? "Direktoryo ng MICE"
            : "MICE Directory"
        }
        title={
          filipino
            ? "Magdaos ng mga Kaganapan sa Koronadal"
            : "Meet in Koronadal"
        }
        description={
          filipino
            ? "Mag-browse ng mga venue para sa meetings, incentives, conferences, at exhibitions ayon sa uri at kapasidad."
            : "Browse listed meetings, incentives, conferences, and exhibitions venues by type and capacity."
        }
      />

      <Container>
        <MiceDirectory
          venues={miceVenues}
          locale={locale}
        />
      </Container>
    </PageShell>
  );
}