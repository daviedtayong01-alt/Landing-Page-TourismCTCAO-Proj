"use client";

import Image from "next/image";
import Link from "next/link";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
} from "motion/react";
import {
  ChevronLeft,
  ChevronRight,
  Pause,
  Play,
} from "lucide-react";
import {
  useCallback,
  useEffect,
  useState,
  type KeyboardEvent,
} from "react";

import { Container } from "@/components/layout/Container";

import { HeroSearch } from "./HeroSearch";
import { heroSlides } from "./hero-carousel.data";
import type { HeroSlide } from "./hero-carousel.types";

const AUTOPLAY_INTERVAL = 5_000;

export function HeroCarousel() {
  /* =========================================
     State
     ========================================= */

  const [activeIndex, setActiveIndex] =
    useState(0);

  const [isUserPaused, setIsUserPaused] =
    useState(false);

  const [
    isInteractionPaused,
    setIsInteractionPaused,
  ] = useState(false);

  const [
    isDocumentHidden,
    setIsDocumentHidden,
  ] = useState(false);

  const [
    loadedBackgroundImages,
    setLoadedBackgroundImages,
  ] = useState<Set<string>>(
    () => new Set(),
  );

  const [
    loadedForegroundImages,
    setLoadedForegroundImages,
  ] = useState<Set<string>>(
    () => new Set(),
  );

  const shouldReduceMotion =
    useReducedMotion();

  /* =========================================
     Derived state
     ========================================= */

  const activeSlide =
    heroSlides[activeIndex];

  const isPaused =
    isUserPaused ||
    isInteractionPaused ||
    isDocumentHidden;

  const backgroundImageReady =
    !activeSlide.backgroundImage ||
    loadedBackgroundImages.has(
      activeSlide.id,
    );

  const foregroundImageReady =
    !activeSlide.foregroundImage ||
    loadedForegroundImages.has(
      activeSlide.id,
    );

  /* =========================================
     Navigation
     ========================================= */

  const goToSlide = useCallback(
    (index: number) => {
      const nextIndex =
        (index + heroSlides.length) %
        heroSlides.length;

      setActiveIndex(nextIndex);
    },
    [],
  );

  const goToNextSlide =
    useCallback(() => {
      setActiveIndex(
        (currentIndex) =>
          (currentIndex + 1) %
          heroSlides.length,
      );
    }, []);

  const goToPreviousSlide =
    useCallback(() => {
      setActiveIndex(
        (currentIndex) =>
          (currentIndex -
            1 +
            heroSlides.length) %
          heroSlides.length,
      );
    }, []);

  /* =========================================
     Autoplay
     ========================================= */

  useEffect(() => {
    if (
      isPaused ||
      shouldReduceMotion ||
      heroSlides.length <= 1
    ) {
      return;
    }

    const timer =
      window.setInterval(
        goToNextSlide,
        AUTOPLAY_INTERVAL,
      );

    return () => {
      window.clearInterval(timer);
    };
  }, [
    activeIndex,
    goToNextSlide,
    isPaused,
    shouldReduceMotion,
  ]);

  /* =========================================
     Browser visibility
     ========================================= */

  useEffect(() => {
    const handleVisibilityChange =
      () => {
        setIsDocumentHidden(
          document.hidden,
        );
      };

    document.addEventListener(
      "visibilitychange",
      handleVisibilityChange,
    );

    return () => {
      document.removeEventListener(
        "visibilitychange",
        handleVisibilityChange,
      );
    };
  }, []);

  /* =========================================
     Keyboard controls
     ========================================= */

  const handleKeyDown = (
    event: KeyboardEvent<HTMLElement>,
  ) => {
    switch (event.key) {
      case "ArrowLeft":
        event.preventDefault();
        goToPreviousSlide();
        break;

      case "ArrowRight":
        event.preventDefault();
        goToNextSlide();
        break;

      case "Home":
        event.preventDefault();
        goToSlide(0);
        break;

      case "End":
        event.preventDefault();
        goToSlide(
          heroSlides.length - 1,
        );
        break;

      default:
        break;
    }
  };

  /* =========================================
     Render
     ========================================= */

  return (
    <section
      tabIndex={0}
      role="region"
      aria-roledescription="carousel"
      aria-label="Featured Koronadal tourism stories"
      onKeyDown={handleKeyDown}
      onMouseEnter={() =>
        setIsInteractionPaused(true)
      }
      onMouseLeave={() =>
        setIsInteractionPaused(false)
      }
      onFocusCapture={() =>
        setIsInteractionPaused(true)
      }
      onBlurCapture={(event) => {
        if (
          !event.currentTarget.contains(
            event.relatedTarget,
          )
        ) {
          setIsInteractionPaused(false);
        }
      }}
      className="relative isolate min-h-[680px] overflow-hidden bg-tourism-primary text-white outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-white sm:min-h-[720px]"
    >
      {/* =====================================
          BACKGROUND
          ===================================== */}

      <div className="absolute inset-0">
        <AnimatePresence
          initial={false}
          mode="sync"
        >
          <motion.div
            key={activeSlide.id}
            className="absolute inset-0"
            initial={{
              opacity: 0,
              scale: shouldReduceMotion
                ? 1
                : 1.025,
            }}
            animate={{
              opacity:
                backgroundImageReady
                  ? 1
                  : 0,
              scale: 1,
            }}
            exit={{
              opacity: 0,
            }}
            transition={{
              opacity: {
                duration:
                  shouldReduceMotion
                    ? 0
                    : 0.75,
              },
              scale: {
                duration:
                  shouldReduceMotion
                    ? 0
                    : AUTOPLAY_INTERVAL /
                      1000,
                ease: "linear",
              },
            }}
          >
            {activeSlide.backgroundImage ? (
              <Image
                src={
                  activeSlide.backgroundImage
                }
                alt={
                  activeSlide.backgroundAlt
                }
                fill
                sizes="100vw"
                quality={
                  activeSlide.imageQuality ??
                  80
                }
                preload={
                  activeIndex === 0
                }
                className="object-cover"
                style={{
                  objectPosition:
                    activeSlide.backgroundPosition ??
                    "center center",
                }}
                onLoad={() => {
                  setLoadedBackgroundImages(
                    (current) => {
                      const next =
                        new Set(
                          current,
                        );

                      next.add(
                        activeSlide.id,
                      );

                      return next;
                    },
                  );
                }}
              />
            ) : (
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-tourism-primary"
              />
            )}
          </motion.div>
        </AnimatePresence>

        {!backgroundImageReady &&
          activeSlide.backgroundImage && (
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-tourism-primary"
            />
          )}
      </div>

      {/* =====================================
          IMAGE READABILITY OVERLAYS
          ===================================== */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-black/35"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.68)_0%,rgba(0,0,0,0.42)_42%,rgba(0,0,0,0.10)_100%)]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/45 to-transparent"
      />

      {/* =====================================
          OPTIONAL RIGHT-SIDE FOREGROUND IMAGE
          ===================================== */}

      {activeSlide.foregroundImage && (
        <div className="pointer-events-none absolute inset-0 hidden lg:block">
          <AnimatePresence
            initial={false}
            mode="sync"
          >
            <motion.div
              key={activeSlide.id}
              className="absolute inset-y-0 right-0 w-[45%]"
              initial={{
                opacity: 0,
                x: shouldReduceMotion
                  ? 0
                  : 32,
                scale: shouldReduceMotion
                  ? 1
                  : 1.015,
              }}
              animate={{
                opacity:
                  foregroundImageReady
                    ? 1
                    : 0,
                x: 0,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                x: -16,
              }}
              transition={{
                duration:
                  shouldReduceMotion
                    ? 0
                    : 0.8,
                ease: "easeOut",
              }}
            >
              <Image
                src={
                  activeSlide.foregroundImage
                }
                alt={
                  activeSlide.foregroundAlt ??
                  ""
                }
                fill
                sizes="(min-width: 1024px) 45vw, 0px"
                quality={
                  activeSlide.imageQuality ??
                  80
                }
                className="object-contain object-right-bottom"
                style={{
                  objectPosition:
                    activeSlide.foregroundPosition ??
                    "right bottom",
                }}
                onLoad={() => {
                  setLoadedForegroundImages(
                    (current) => {
                      const next =
                        new Set(
                          current,
                        );

                      next.add(
                        activeSlide.id,
                      );

                      return next;
                    },
                  );
                }}
              />
            </motion.div>
          </AnimatePresence>
        </div>
      )}

      {/* =====================================
          HERO CONTENT
          ===================================== */}

      <Container className="relative z-10 flex min-h-[680px] items-center sm:min-h-[720px]">
        <div className="w-full max-w-3xl pb-24 pt-28 sm:pb-28 lg:max-w-[760px]">
          <AnimatePresence
            mode="wait"
            initial={false}
          >
            <motion.div
              key={activeSlide.id}
              role="group"
              aria-roledescription="slide"
              aria-label={`Slide ${
                activeIndex + 1
              } of ${
                heroSlides.length
              }`}
              initial={
                shouldReduceMotion
                  ? {
                      opacity: 1,
                      y: 0,
                    }
                  : {
                      opacity: 0,
                      y: 14,
                    }
              }
              animate={{
                opacity: 1,
                y: 0,
              }}
              exit={
                shouldReduceMotion
                  ? {
                      opacity: 0,
                    }
                  : {
                      opacity: 0,
                      y: -10,
                    }
              }
              transition={{
                duration:
                  shouldReduceMotion
                    ? 0
                    : 0.45,
                ease: "easeOut",
              }}
            >
              {/* Eyebrow */}

              <p className="text-xs font-bold uppercase tracking-[0.2em] text-tourism-accent">
                {activeSlide.label}
              </p>

              {/* Heading */}

              <h1 className="mt-4 max-w-3xl text-5xl font-bold tracking-[-0.035em] sm:text-6xl lg:text-7xl">
                {activeSlide.title}
              </h1>

              {/* Description */}

              <p className="mt-5 max-w-2xl text-base leading-7 text-white/90 sm:text-lg sm:leading-8">
                {
                  activeSlide.description
                }
              </p>

              {/* CTA */}

              {activeSlide.cta && (
                <Link
                  href={
                    activeSlide.cta.href
                  }
                  className="mt-7 inline-flex min-h-11 items-center justify-center rounded-full bg-tourism-accent px-6 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2"
                >
                  {
                    activeSlide.cta.label
                  }
                </Link>
              )}

              {/* Search */}

              <div className="mt-8">
                <HeroSearch />
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </Container>

      {/* =====================================
          CONTROLS
          ===================================== */}

      <Container className="absolute inset-x-0 bottom-7 z-20">
        <div className="flex items-center justify-between gap-6">
          {/* Slide indicators */}

          <div
            className="flex items-center gap-2"
            aria-label="Slide controls"
          >
            {heroSlides.map(
              (
                slide: HeroSlide,
                index: number,
              ) => {
                const isActive =
                  index ===
                  activeIndex;

                return (
                  <button
                    key={slide.id}
                    type="button"
                    aria-label={`Go to ${slide.title}`}
                    aria-current={
                      isActive
                        ? "true"
                        : undefined
                    }
                    onClick={() =>
                      goToSlide(index)
                    }
                    className="group flex min-h-10 items-center py-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                  >
                    <span
                      aria-hidden="true"
                      className={`block h-1 rounded-full transition-[width,background-color] duration-300 ${
                        isActive
                          ? "w-10 bg-white"
                          : "w-5 bg-white/40 group-hover:bg-white/70"
                      }`}
                    />
                  </button>
                );
              },
            )}
          </div>

          {/* Playback and navigation */}

          <div className="flex items-center gap-2">
            {/* Pause / Resume */}

            <button
              type="button"
              aria-pressed={
                isUserPaused
              }
              aria-label={
                isUserPaused
                  ? "Resume automatic slideshow"
                  : "Pause automatic slideshow"
              }
              onClick={() =>
                setIsUserPaused(
                  (current) =>
                    !current,
                )
              }
              className="inline-flex size-11 items-center justify-center rounded-full border border-white/40 bg-black/10 backdrop-blur-sm transition-colors hover:bg-white/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              {isUserPaused ? (
                <Play
                  className="size-4"
                  aria-hidden="true"
                />
              ) : (
                <Pause
                  className="size-4"
                  aria-hidden="true"
                />
              )}
            </button>

            {/* Previous */}

            <button
              type="button"
              aria-label="Previous slide"
              onClick={
                goToPreviousSlide
              }
              className="inline-flex size-11 items-center justify-center rounded-full border border-white/40 bg-black/10 backdrop-blur-sm transition-colors hover:bg-white/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              <ChevronLeft
                className="size-5"
                aria-hidden="true"
              />
            </button>

            {/* Next */}

            <button
              type="button"
              aria-label="Next slide"
              onClick={
                goToNextSlide
              }
              className="inline-flex size-11 items-center justify-center rounded-full border border-white/40 bg-black/10 backdrop-blur-sm transition-colors hover:bg-white/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              <ChevronRight
                className="size-5"
                aria-hidden="true"
              />
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
}