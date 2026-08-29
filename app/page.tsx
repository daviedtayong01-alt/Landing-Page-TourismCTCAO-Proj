import { ExperienceSection } from "@/components/home/ExperienceSection";
import { EstablishmentsSection } from "@/components/home/EstablishmentsSection";
import { HeroCarousel } from "@/components/home/HeroCarousel";
import { HeroSearch } from "@/components/home/HeroSearch";
import { HomeSections } from "@/components/home/HomeSections";
import { KoronadalMap } from "@/components/home/KoronadalMap";
import { MiceSection } from "@/components/home/MiceSection";
import { NewsSection } from "@/components/home/NewsSection";
import { TransportSection } from "@/components/home/TransportSection";

import { Footer } from "@/components/layout/Footer";

export default function HomePage() {
  return (
    <>
      <main>
        {/* =====================================================
            HERO
            ===================================================== */}

        <HeroCarousel />

        {/* =====================================================
            SEARCH / DISCOVERY
            ===================================================== */}

        <HeroSearch />

        {/* =====================================================
            DOT ACCREDITED ESTABLISHMENTS
            ===================================================== */}

        <EstablishmentsSection />

        {/* =====================================================
            EXPLORE KORONADAL
            ===================================================== */}

        <HomeSections />

        {/* =====================================================
            NEWS / UPDATES
            ===================================================== */}

        <NewsSection />

        {/* =====================================================
            TOURISM MAP
            ===================================================== */}

        <KoronadalMap />

        {/* =====================================================
            TRANSPORT
            ===================================================== */}

        <TransportSection />

        {/* =====================================================
            MICE
            ===================================================== */}

        <MiceSection />

        {/* =====================================================
            EXPERIENCE
            ===================================================== */}

        <ExperienceSection />
      </main>

      {/* =======================================================
          GLOBAL FOOTER
          ======================================================= */}

      <Footer />
    </>
  );
}