import { DestinationsDirectory } from "@/components/directory/DestinationsDirectory";
import { Container } from "@/components/layout/Container";
import { PageShell } from "@/components/layout/PageShell";
import { PageHeader } from "@/components/tourism/PageHeader";
import { destinations } from "@/data/tourism";
import { getLocale } from "@/lib/i18n/locale";

export default async function DestinationsPage() {
  const locale = await getLocale();
  const filipino = locale === "fil";

  return (
    <PageShell>
      <PageHeader
        eyebrow={
          filipino
            ? "Direktoryo ng mga Destinasyon"
            : "Destination Directory"
        }
        title={
          filipino
            ? "Tuklasin ang Koronadal"
            : "Explore Koronadal"
        }
        description={
          filipino
            ? "Tuklasin ang kalikasan, kultura, at mga outdoor experience na nakalista para sa mga bisita ng Koronadal at kalapit na South Cotabato."
            : "Discover nature, culture, and outdoor experiences listed for visitors to Koronadal and nearby South Cotabato."
        }
      />

      <Container>
        <DestinationsDirectory
          destinations={destinations}
          locale={locale}
        />
      </Container>
    </PageShell>
  );
}