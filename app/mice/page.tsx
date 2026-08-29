import { MiceDirectory } from "@/components/directory/MiceDirectory";
import { Container } from "@/components/layout/Container";
import { PageShell } from "@/components/layout/PageShell";
import { PageHeader } from "@/components/tourism/PageHeader";
import { miceVenues } from "@/data/tourism";

export default function MicePage() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="MICE Directory"
        title="Meet in Koronadal"
        description="Browse listed meetings, incentives, conferences, and exhibitions venues by type and capacity."
      />
      <Container><MiceDirectory venues={miceVenues} /></Container>
    </PageShell>
  );
}
