import { HeroCarousel } from "@/components/home/HeroCarousel";
import { HomeSections } from "@/components/home/HomeSections";
import { heroSlides } from "@/data/hero-carousel.data";
import { getLocale } from "@/lib/i18n/locale";

export default async function HomePage() {
  const locale = await getLocale();

  return (
    <>
      <HeroCarousel
        slides={heroSlides}
        locale={locale}
      />

      <HomeSections />
    </>
  );
}