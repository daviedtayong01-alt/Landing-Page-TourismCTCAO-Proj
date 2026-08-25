export interface HeroSlide {
  id: string;

  label: string;

  title: string;

  description: string;

  backgroundImage: string | null;

  backgroundAlt: string;

  backgroundPosition?: string;

  foregroundImage?: string | null;

  foregroundAlt?: string;

  foregroundPosition?: string;

  imageQuality?: number;

  cta?: {
    label: string;
    href: string;
  };
}