"use client";

import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  Pause,
  Play,
} from "lucide-react";
import {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
  type KeyboardEvent,
} from "react";

import { getTranslations } from "@/lib/i18n";
import {
  defaultLocale,
  type Locale,
} from "@/lib/i18n/config";
import type { HeroSlide } from "@/types/tourism";

import { Navbar } from "@/components/layout/Navbar";

interface HeroCarouselProps {
  slides: HeroSlide[];
  locale?: Locale;
}

const AUTOPLAY_INTERVAL = 5000;
const REDUCED_MOTION_QUERY =
  "(prefers-reduced-motion: reduce)";

export function HeroCarousel({
  slides,
  locale = defaultLocale,
}: HeroCarouselProps) {
  const [currentIndex, setCurrentIndex] =
    useState(0);

  const [isPaused, setIsPaused] =
    useState(false);

  const [isHovered, setIsHovered] =
    useState(false);

  const [isFocused, setIsFocused] =
    useState(false);

  const [prefersReducedMotion, setPrefersReducedMotion] =
    useState(false);

  const carouselRef =
    useRef<HTMLDivElement>(null);

  const slideCount = slides.length;

  const translations = useMemo(
    () => getTranslations(locale),
    [locale],
  );

  /*
   * Derive a safe index instead of correcting state
   * inside an effect when slide data changes.
   */
  const safeIndex =
    slideCount > 0
      ? Math.min(
          currentIndex,
          slideCount - 1,
        )
      : 0;

  const currentSlide = slides[safeIndex];

  useEffect(() => {
    const mediaQuery = window.matchMedia(
      REDUCED_MOTION_QUERY,
    );

    const updatePreference = () => {
      setPrefersReducedMotion(
        mediaQuery.matches,
      );
    };

    updatePreference();

    mediaQuery.addEventListener(
      "change",
      updatePreference,
    );

    return () => {
      mediaQuery.removeEventListener(
        "change",
        updatePreference,
      );
    };
  }, []);

  const goToSlide = useCallback(
    (nextIndex: number) => {
      if (slideCount === 0) {
        return;
      }

      const normalizedIndex =
        ((nextIndex % slideCount) +
          slideCount) %
        slideCount;

      setCurrentIndex(normalizedIndex);
    },
    [slideCount],
  );

  const goToPrevious = useCallback(() => {
    goToSlide(safeIndex - 1);
  }, [goToSlide, safeIndex]);

  const goToNext = useCallback(() => {
    goToSlide(safeIndex + 1);
  }, [goToSlide, safeIndex]);

  /*
   * Autoplay is disabled while:
   * - there are not enough slides
   * - reduced motion is preferred
   * - the user paused the carousel
   * - the carousel is hovered
   * - the carousel currently contains keyboard focus
   */
  useEffect(() => {
    if (
      slideCount <= 1 ||
      prefersReducedMotion ||
      isPaused ||
      isHovered ||
      isFocused
    ) {
      return;
    }

    const timer = window.setInterval(() => {
      setCurrentIndex(
        (previousIndex) =>
          (previousIndex + 1) %
          slideCount,
      );
    }, AUTOPLAY_INTERVAL);

    return () => {
      window.clearInterval(timer);
    };
  }, [
    isFocused,
    isHovered,
    isPaused,
    prefersReducedMotion,
    slideCount,
  ]);

  /*
   * Preload the next background image.
   */
  useEffect(() => {
    if (slideCount <= 1) {
      return;
    }

    const nextIndex =
      (safeIndex + 1) % slideCount;

    const nextSlide = slides[nextIndex];

    if (!nextSlide?.backgroundImage) {
      return;
    }

    const image = new window.Image();
    image.src = nextSlide.backgroundImage;
  }, [safeIndex, slideCount, slides]);

  function handleKeyDown(
    event: KeyboardEvent<HTMLDivElement>,
  ) {
    switch (event.key) {
      case "ArrowLeft":
        event.preventDefault();
        goToPrevious();
        break;

      case "ArrowRight":
        event.preventDefault();
        goToNext();
        break;

      case "Home":
        event.preventDefault();
        goToSlide(0);
        break;

      case "End":
        event.preventDefault();
        goToSlide(slideCount - 1);
        break;

      default:
        break;
    }
  }

  if (slideCount === 0 || !currentSlide) {
    return (
      <section
        aria-label="Hero"
        className="relative min-h-[560px] bg-tourism-navy"
      >
        <Navbar locale={locale} />

        <div className="mx-auto flex min-h-[560px] w-full max-w-[1440px] items-center px-5 pt-[70px] sm:px-8 lg:px-12">
          <div className="max-w-xl">
            <p className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-tourism-pink">
              {translations.home.hero.eyebrow}
            </p>

            <span
              aria-hidden="true"
              className="mt-3 block h-px w-7 bg-tourism-pink"
            />

            <h1 className="mt-5 text-[clamp(2.5rem,6vw,5rem)] font-black leading-[0.94] tracking-[-0.055em] text-white">
              {translations.home.hero.title}
            </h1>

            <p className="mt-5 max-w-2xl text-sm leading-6 text-white/70 sm:text-base">
              {translations.home.hero.description}
            </p>
          </div>
        </div>
      </section>
    );
  }

  const eyebrow =
    currentSlide.eyebrow[locale];

  const title =
    currentSlide.title[locale];

  const description =
    currentSlide.description[
      locale
    ];

  const ctaLabel =
    currentSlide.cta.label[locale];

  const isAutoplayActive =
    slideCount > 1 &&
    !prefersReducedMotion &&
    !isPaused &&
    !isHovered &&
    !isFocused;

  return (
    <section
      ref={carouselRef}
      aria-label="Featured tourism highlights"
      aria-roledescription="carousel"
      className="relative min-h-[680px] overflow-hidden bg-tourism-navy sm:min-h-[720px]"
      onMouseEnter={() =>
        setIsHovered(true)
      }
      onMouseLeave={() =>
        setIsHovered(false)
      }
      onFocus={() => setIsFocused(true)}
      onBlur={(event) => {
        if (
          !event.currentTarget.contains(
            event.relatedTarget,
          )
        ) {
          setIsFocused(false);
        }
      }}
      onKeyDown={handleKeyDown}
      tabIndex={0}
    >
      <Navbar locale={locale} />

      {/* Background image layers */}
      <div
        aria-hidden="true"
        className="absolute inset-0"
      >
        {slides.map((slide, index) => {
          const isActive =
            index === safeIndex;

          return (
            <div
              key={slide.id}
              className={[
                "absolute inset-0",
                prefersReducedMotion
                  ? ""
                  : "transition-opacity duration-700 ease-out motion-reduce:transition-none",
                isActive
                  ? "opacity-100"
                  : "pointer-events-none opacity-0",
              ].join(" ")}
            >
              <div
                className={[
                  "absolute inset-0 size-full bg-cover bg-center",
                  prefersReducedMotion
                    ? ""
                    : "transition-transform duration-[6500ms] ease-out motion-reduce:transition-none",
                  isActive
                    ? "scale-105"
                    : "scale-100",
                ].join(" ")}
                style={{
                  backgroundImage: `url("${slide.backgroundImage}")`,
                  backgroundPosition:
                    slide.backgroundPosition ??
                    "center",
                }}
              />
            </div>
          );
        })}

        <div className="absolute inset-0 bg-tourism-navy/45" />

        <div className="absolute inset-0 bg-gradient-to-r from-tourism-navy/90 via-tourism-navy/55 to-tourism-navy/10" />
      </div>

      {/* Main hero content */}
      <div className="relative z-20 mx-auto flex min-h-[680px] w-full max-w-[1440px] items-end px-5 pb-24 pt-[150px] sm:min-h-[720px] sm:px-8 sm:pb-28 lg:px-12">
        <div
          key={currentSlide.id}
          className={[
            "max-w-3xl",
            prefersReducedMotion
              ? ""
              : "animate-in fade-in duration-500",
          ].join(" ")}
        >
          <div className="flex items-center gap-3">
            <span
              aria-hidden="true"
              className="h-px w-7 bg-tourism-pink"
            />

            <p className="text-[10px] font-extrabold uppercase tracking-[0.23em] text-tourism-pink">
              {eyebrow}
            </p>
          </div>

          <h1 className="mt-5 max-w-3xl text-[clamp(2.75rem,7vw,5.8rem)] font-black leading-[0.91] tracking-[-0.065em] text-white">
            {title}
          </h1>

          <p className="mt-6 max-w-2xl text-sm leading-6 text-white/75 sm:text-base sm:leading-7">
            {description}
          </p>

          {currentSlide.cta && (
            <div className="mt-7">
              <Link
                href={currentSlide.cta.href}
                className="inline-flex min-h-11 items-center gap-2 rounded-full bg-tourism-pink px-6 py-2.5 text-xs font-extrabold text-white shadow-[0_10px_24px_rgba(245,43,145,0.2)] transition duration-200 motion-reduce:transition-none hover:-translate-y-0.5 hover:bg-tourism-pink-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-tourism-navy"
              >
                {ctaLabel}

                <ArrowRight
                  aria-hidden="true"
                  className="size-3.5"
                />
              </Link>
            </div>
          )}
        </div>
      </div>

      {/* Controls */}
      <div className="absolute inset-x-0 bottom-7 z-30">
        <div className="mx-auto flex w-full max-w-[1440px] items-center justify-between gap-5 px-5 sm:px-8 lg:px-12">
          <div className="flex items-center gap-2">
            <button
              type="button"
              aria-label={
                translations.accessibility
                  .previousSlide
              }
              onClick={goToPrevious}
              disabled={slideCount <= 1}
              className="flex size-10 items-center justify-center rounded-full border border-white/20 bg-tourism-navy/35 text-white backdrop-blur-sm transition motion-reduce:transition-none hover:bg-white/10 disabled:pointer-events-none disabled:opacity-40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-tourism-navy"
            >
              <ArrowLeft
                aria-hidden="true"
                className="size-4"
              />
            </button>

            <button
              type="button"
              aria-label={
                translations.accessibility
                  .nextSlide
              }
              onClick={goToNext}
              disabled={slideCount <= 1}
              className="flex size-10 items-center justify-center rounded-full border border-white/20 bg-tourism-navy/35 text-white backdrop-blur-sm transition motion-reduce:transition-none hover:bg-white/10 disabled:pointer-events-none disabled:opacity-40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-tourism-navy"
            >
              <ArrowRight
                aria-hidden="true"
                className="size-4"
              />
            </button>

            {slideCount > 1 && (
              <button
                type="button"
                aria-label={
                  isPaused
                    ? translations
                        .accessibility
                        .resumeSlide
                    : translations
                        .accessibility
                        .pauseSlide
                }
                aria-pressed={isPaused}
                onClick={() =>
                  setIsPaused(
                    (previous) => !previous,
                  )
                }
                disabled={
                  prefersReducedMotion
                }
                className="flex size-10 items-center justify-center rounded-full border border-white/20 bg-tourism-navy/35 text-white backdrop-blur-sm transition motion-reduce:transition-none hover:bg-white/10 disabled:pointer-events-none disabled:opacity-40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-tourism-navy"
              >
                {isPaused ? (
                  <Play
                    aria-hidden="true"
                    className="size-3.5"
                  />
                ) : (
                  <Pause
                    aria-hidden="true"
                    className="size-3.5"
                  />
                )}
              </button>
            )}
          </div>

          {/* Indicators */}
          {slideCount > 1 && (
            <div
              className="flex items-center gap-2"
              aria-label="Slide navigation"
            >
              {slides.map(
                (slide, index) => {
                  const active =
                    index === safeIndex;

                  return (
                    <button
                      key={slide.id}
                      type="button"
                      aria-label={`Go to slide ${index + 1}`}
                      aria-current={
                        active
                          ? "true"
                          : undefined
                      }
                      onClick={() =>
                        goToSlide(index)
                      }
                      className={[
                        "h-1.5 rounded-full transition-all duration-200 motion-reduce:transition-none",
                        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-tourism-navy",
                        active
                          ? "w-8 bg-tourism-pink"
                          : "w-3 bg-white/45 hover:bg-white/75",
                      ].join(" ")}
                    />
                  );
                },
              )}
            </div>
          )}

          <div className="hidden min-w-[90px] justify-end sm:flex">
            <span className="text-[9px] font-extrabold uppercase tracking-[0.18em] text-white/50">
              {String(
                safeIndex + 1,
              ).padStart(2, "0")}{" "}
              /{" "}
              {String(slideCount).padStart(
                2,
                "0",
              )}
            </span>
          </div>
        </div>
      </div>

      {/* Screen-reader announcement */}
      <div
        aria-live={
          isAutoplayActive
            ? "off"
            : "polite"
        }
        className="sr-only"
      >
        {title}
      </div>
    </section>
  );
}