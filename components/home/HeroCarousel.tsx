"use client";

import Link from "next/link";

import {
  AnimatePresence,
  motion,
  useReducedMotion,
} from "motion/react";

import {
  ArrowLeft,
  ArrowRight,
  Pause,
  Play,
} from "lucide-react";

import {
  useCallback,
  useEffect,
  useState,
} from "react";

import { Navbar } from "@/components/layout/Navbar";

import { heroSlides } from "@/data/hero-carousel.data";

import { FavoriteButton } from "./FavoriteButton";
import { TourismImage } from "./TourismImage";

const AUTOPLAY_MS = 5000;

export function HeroCarousel() {
  const [activeIndex, setActiveIndex] =
    useState(0);

  const [documentHidden, setDocumentHidden] =
    useState(false);

  const [autoplayPaused, setAutoplayPaused] =
    useState(false);

  const shouldReduceMotion =
    useReducedMotion();

  const slideCount = heroSlides.length;

  const goTo = useCallback(
    (index: number) => {
      if (slideCount === 0) {
        return;
      }

      const normalized =
        (index + slideCount) % slideCount;

      setActiveIndex(normalized);
    },
    [slideCount],
  );

  const goNext = useCallback(() => {
    if (slideCount === 0) {
      return;
    }

    setActiveIndex(
      (current) =>
        (current + 1) % slideCount,
    );
  }, [slideCount]);

  const goPrevious = useCallback(() => {
    if (slideCount === 0) {
      return;
    }

    setActiveIndex(
      (current) =>
        (current - 1 + slideCount) %
        slideCount,
    );
  }, [slideCount]);

 
  useEffect(() => {
    if (
      documentHidden ||
      autoplayPaused ||
      shouldReduceMotion ||
      slideCount <= 1
    ) {
      return;
    }

    const timer = window.setTimeout(
      goNext,
      AUTOPLAY_MS,
    );

    return () => {
      window.clearTimeout(timer);
    };
  }, [
    activeIndex,
    autoplayPaused,
    documentHidden,
    goNext,
    shouldReduceMotion,
    slideCount,
  ]);

  
  useEffect(() => {
    function handleVisibility() {
      setDocumentHidden(document.hidden);
    }

    handleVisibility();

    document.addEventListener(
      "visibilitychange",
      handleVisibility,
    );

    return () => {
      document.removeEventListener(
        "visibilitychange",
        handleVisibility,
      );
    };
  }, []);

  const activeSlide =
    heroSlides[activeIndex];

  if (!activeSlide) {
    return null;
  }

  const autoplayAvailable =
    slideCount > 1 && !shouldReduceMotion;

  return (
    <section
      aria-label="Featured tourism destinations"
      className="relative isolate min-h-[620px] overflow-hidden bg-tourism-navy text-white sm:min-h-[700px] lg:min-h-[760px]"
    >
      <Navbar />

      {/* =====================================================
          BACKGROUND
          ===================================================== */}

      <AnimatePresence
        initial={false}
        mode="sync"
      >
        <motion.div
          key={activeSlide.id}
          className="absolute inset-0"
          initial={
            shouldReduceMotion
              ? {
                  opacity: 1,
                }
              : {
                  opacity: 0,
                  scale: 1.015,
                }
          }
          animate={{
            opacity: 1,
            scale: 1,
          }}
          exit={{
            opacity: 0,
          }}
          transition={{
            duration: shouldReduceMotion
              ? 0
              : 0.55,
            ease: "easeInOut",
          }}
        >
          {activeSlide.backgroundImage ? (
            <TourismImage
              src={
                activeSlide.backgroundImage
              }
              alt={
                activeSlide.backgroundAlt
              }
              priority
              sizes="100vw"
              style={{
                objectPosition:
                  activeSlide.backgroundPosition ??
                  "center center",
              }}
            />
          ) : (
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-tourism-navy"
            />
          )}

          {/* Left-side darkness preserves text contrast. */}

          <div
            aria-hidden="true"
            className="absolute inset-0 bg-[linear-gradient(90deg,rgba(8,25,39,.82)_0%,rgba(8,25,39,.55)_38%,rgba(8,25,39,.16)_72%,rgba(8,25,39,.08)_100%)]"
          />

          <div
            aria-hidden="true"
            className="absolute inset-x-0 bottom-0 h-52 bg-gradient-to-t from-black/40 to-transparent"
          />
        </motion.div>
      </AnimatePresence>

      {/* =====================================================
          CONTENT
          ===================================================== */}

      <div className="relative z-10 flex min-h-[620px] items-center sm:min-h-[700px] lg:min-h-[760px]">
        <div className="mx-auto w-full max-w-[1280px] px-5 pt-16 sm:px-8 lg:px-10 xl:px-12">
          <div className="max-w-[660px]">
            <AnimatePresence
              initial={false}
              mode="wait"
            >
              <motion.div
                key={activeSlide.id}
                initial={{
                  opacity: shouldReduceMotion
                    ? 1
                    : 0,
                  y: shouldReduceMotion
                    ? 0
                    : 15,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                exit={{
                  opacity: shouldReduceMotion
                    ? 1
                    : 0,
                  y: shouldReduceMotion
                    ? 0
                    : -10,
                }}
                transition={{
                  duration:
                    shouldReduceMotion
                      ? 0
                      : 0.4,
                }}
              >
                <p className="mb-4 flex items-center gap-3 text-[10px] font-extrabold tracking-[0.16em] text-white">
                  <span
                    aria-hidden="true"
                    className="h-px w-7 bg-tourism-pink"
                  />

                  {activeSlide.eyebrow}
                </p>

                <h1 className="max-w-[700px] text-5xl font-black leading-[0.95] tracking-[-0.045em] sm:text-6xl lg:text-[76px]">
                  {activeSlide.title}
                </h1>

                <p className="mt-6 max-w-[570px] text-sm leading-6 text-white/85 sm:text-base sm:leading-7">
                  {activeSlide.description}
                </p>

                <div className="mt-8 flex flex-wrap items-center gap-3">
                  <Link
                    href={
                      activeSlide.cta.href
                    }
                    className="rounded-full bg-tourism-pink px-6 py-3 text-xs font-extrabold text-white shadow-xl transition hover:bg-tourism-pink-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-tourism-navy motion-reduce:transition-none"
                  >
                    {
                      activeSlide.cta
                        .label
                    }
                  </Link>

                  <a
                    href="#tourism-map"
                    className="rounded-full border border-white/60 bg-black/10 px-6 py-3 text-xs font-bold text-white backdrop-blur-sm transition hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-tourism-navy motion-reduce:transition-none"
                  >
                    View on Map
                  </a>

                  <FavoriteButton
                    itemId={`hero:${activeSlide.id}`}
                    label={
                      activeSlide.title
                    }
                    className="flex size-11 items-center justify-center rounded-full border border-white/55 bg-black/10 text-white backdrop-blur-sm transition hover:bg-white/10 motion-reduce:transition-none"
                    iconClassName="size-[18px]"
                  />
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* =====================================================
          CONTROLS
          ===================================================== */}

      {slideCount > 1 && (
        <div className="absolute inset-x-0 bottom-7 z-30">
          <div className="mx-auto flex w-full max-w-[1280px] items-center justify-between px-5 sm:px-8 lg:px-10 xl:px-12">
            {/* One continuous slide-position track. */}

            <div
              className="flex w-40 overflow-hidden rounded-full"
              aria-label="Hero slide navigation"
            >
              {heroSlides.map(
                (slide, index) => {
                  const active =
                    index === activeIndex;

                  return (
                    <button
                      key={slide.id}
                      type="button"
                      aria-label={`Go to slide ${
                        index + 1
                      } of ${slideCount}: ${
                        slide.title
                      }`}
                      aria-current={
                        active
                          ? "true"
                          : undefined
                      }
                      onClick={() =>
                        goTo(index)
                      }
                      className="h-5 flex-1 py-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-tourism-navy"
                    >
                      <span
                        aria-hidden="true"
                        className={`block h-[2px] w-full ${
                          active
                            ? "bg-tourism-pink"
                            : "bg-white/35"
                        }`}
                      />
                    </button>
                  );
                },
              )}
            </div>

            <div className="flex items-center gap-2">
              {autoplayAvailable && (
                <button
                  type="button"
                  aria-label={
                    autoplayPaused
                      ? "Resume carousel autoplay"
                      : "Pause carousel autoplay"
                  }
                  aria-pressed={
                    autoplayPaused
                  }
                  onClick={() =>
                    setAutoplayPaused(
                      (paused) =>
                        !paused,
                    )
                  }
                  className="flex size-10 items-center justify-center rounded-full border border-white/35 bg-black/10 text-white backdrop-blur-sm transition hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-tourism-navy motion-reduce:transition-none"
                >
                  {autoplayPaused ? (
                    <Play
                      aria-hidden="true"
                      className="ml-0.5 size-4 fill-current"
                    />
                  ) : (
                    <Pause
                      aria-hidden="true"
                      className="size-4"
                    />
                  )}
                </button>
              )}

              <button
                type="button"
                aria-label="Previous slide"
                onClick={goPrevious}
                className="flex size-10 items-center justify-center rounded-full border border-white/35 bg-black/10 text-white backdrop-blur-sm transition hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-tourism-navy motion-reduce:transition-none"
              >
                <ArrowLeft
                  aria-hidden="true"
                  className="size-4"
                />
              </button>

              <button
                type="button"
                aria-label="Next slide"
                onClick={goNext}
                className="flex size-10 items-center justify-center rounded-full bg-white text-tourism-navy transition hover:bg-tourism-pink hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-tourism-navy motion-reduce:transition-none"
              >
                <ArrowRight
                  aria-hidden="true"
                  className="size-4"
                />
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
