import { BusinessDirectory } from "@/components/directory/BusinessDirectory";
import { Container } from "@/components/layout/Container";
import { PageShell } from "@/components/layout/PageShell";
import { PageHeader } from "@/components/tourism/PageHeader";
import { establishments } from "@/data/tourism";

export default function BusinessDirectoryPage() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="DOT Directory"
        title="Accredited establishments"
        description="Explore hospitality and tourism businesses published in the Koronadal visitor directory."
      />
      <Container><BusinessDirectory establishments={establishments} /></Container>
    </PageShell>
  );
}
