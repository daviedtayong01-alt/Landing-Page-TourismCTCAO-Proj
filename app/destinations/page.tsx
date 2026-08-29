import { DestinationsDirectory } from "@/components/directory/DestinationsDirectory";
import { Container } from "@/components/layout/Container";
import { PageShell } from "@/components/layout/PageShell";
import { PageHeader } from "@/components/tourism/PageHeader";
import { destinations } from "@/data/tourism";

export default function DestinationsPage() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="Destination Directory"
        title="Explore Koronadal"
        description="Discover nature, culture, and outdoor experiences listed for visitors to Koronadal and nearby South Cotabato."
      />
      <Container>
        <DestinationsDirectory destinations={destinations} />
      </Container>
    </PageShell>
  );
}
