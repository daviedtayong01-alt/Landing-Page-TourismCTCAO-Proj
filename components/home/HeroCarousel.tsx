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
} from "lucide-react";

import {
  useCallback,
  useEffect,
  useRef,
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

  const shouldReduceMotion =
    useReducedMotion();

  const indexRef =
    useRef(activeIndex);

  useEffect(() => {
    indexRef.current =
      activeIndex;
  }, [activeIndex]);

  const goTo = useCallback(
    (index: number) => {
      const normalized =
        (index +
          heroSlides.length) %
        heroSlides.length;

      setActiveIndex(
        normalized,
      );
    },
    [],
  );

  const goNext =
    useCallback(() => {
      goTo(
        indexRef.current + 1,
      );
    }, [goTo]);

  const goPrevious =
    useCallback(() => {
      goTo(
        indexRef.current - 1,
      );
    }, [goTo]);

  /*
   * DEBUG: HERO_AUTOPLAY
   *
   * IMPORTANT:
   * We intentionally use ONE timeout for the current slide.
   *
   * When activeIndex changes, React cleans up the previous
   * timeout and creates a fresh five-second cycle.
   *
   * This prevents multiple intervals from stacking after
   * manual navigation.
   */
  useEffect(() => {
    if (
      documentHidden ||
      heroSlides.length <= 1
    ) {
      return;
    }

    const timer =
      window.setTimeout(
        goNext,
        AUTOPLAY_MS,
      );

    return () => {
      window.clearTimeout(
        timer,
      );
    };
  }, [
    activeIndex,
    documentHidden,
    goNext,
  ]);

  /*
   * DEBUG: DOCUMENT_VISIBILITY
   *
   * Do not continuously animate when the browser tab isn't
   * visible. The normal five-second cycle resumes when the
   * document becomes visible again.
   */
  useEffect(() => {
    function handleVisibility() {
      setDocumentHidden(
        document.hidden,
      );
    }

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

  /*
   * DEBUG: HERO_KEYBOARD
   */

  useEffect(() => {
    function handleKeyboard(
      event: KeyboardEvent,
    ) {
      if (
        event.target instanceof
          HTMLInputElement ||
        event.target instanceof
          HTMLTextAreaElement
      ) {
        return;
      }

      if (
        event.key === "ArrowRight"
      ) {
        event.preventDefault();
        goNext();
      }

      if (
        event.key === "ArrowLeft"
      ) {
        event.preventDefault();
        goPrevious();
      }
    }

    window.addEventListener(
      "keydown",
      handleKeyboard,
    );

    return () => {
      window.removeEventListener(
        "keydown",
        handleKeyboard,
      );
    };
  }, [
    goNext,
    goPrevious,
  ]);

  const activeSlide =
    heroSlides[activeIndex];

  if (!activeSlide) {
    return null;
  }

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
            duration:
              shouldReduceMotion
                ? 0
                : 0.55,
            ease: "easeInOut",
          }}
        >
          {activeSlide.backgroundImage ? (
            <TourismImage
              src={activeSlide.backgroundImage}
              alt={activeSlide.backgroundAlt}
              priority
              sizes="100vw"
              className=""
              style={{
                objectPosition:
                  activeSlide.backgroundPosition ??
                  "center center",
              }}
            />
          ) : (
            <div
              className="absolute inset-0 bg-tourism-navy"
              aria-hidden="true"
            />
          )}

          {/* LEFT-SIDE DARKNESS:
              The reference places the editorial copy on the
              left third, so readability is intentionally
              strongest there. */}

          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(8,25,39,.82)_0%,rgba(8,25,39,.55)_38%,rgba(8,25,39,.16)_72%,rgba(8,25,39,.08)_100%)]" />

          <div className="absolute inset-x-0 bottom-0 h-52 bg-gradient-to-t from-black/40 to-transparent" />
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
                  opacity: 0,
                  y: shouldReduceMotion
                    ? 0
                    : 15,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                exit={{
                  opacity: 0,
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
                  <span className="h-px w-7 bg-tourism-pink" />

                  {
                    activeSlide.eyebrow
                  }
                </p>

                <h1 className="max-w-[700px] text-5xl font-black leading-[0.95] tracking-[-0.045em] sm:text-6xl lg:text-[76px]">
                  {activeSlide.title}
                </h1>

                <p className="mt-6 max-w-[570px] text-sm leading-6 text-white/85 sm:text-base sm:leading-7">
                  {
                    activeSlide.description
                  }
                </p>

                <div className="mt-8 flex flex-wrap items-center gap-3">
                  <Link
                    href={
                      activeSlide.cta
                        .href
                    }
                    className="rounded-full bg-tourism-pink px-6 py-3 text-xs font-extrabold text-white shadow-xl transition hover:bg-tourism-pink-dark"
                  >
                    {
                      activeSlide.cta
                        .label
                    }
                  </Link>

                  <a
                    href="#tourism-map"
                    className="rounded-full border border-white/60 bg-black/10 px-6 py-3 text-xs font-bold text-white backdrop-blur-sm transition hover:bg-white/10"
                  >
                    View on Map
                  </a>

                  {/* Reference has the favorite heart directly
                      beside the map action. */}

                  <FavoriteButton
                    itemId={`hero:${activeSlide.id}`}
                    label={
                      activeSlide.title
                    }
                    className="flex size-11 items-center justify-center rounded-full border border-white/55 bg-black/10 text-white backdrop-blur-sm transition hover:bg-white/10"
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

      <div className="absolute inset-x-0 bottom-7 z-30">
        <div className="mx-auto flex w-full max-w-[1280px] items-center justify-between px-5 sm:px-8 lg:px-10 xl:px-12">
          {/*
           * ONE CONTINUOUS TRACK
           *
           * The segments touch each other.
           * There are deliberately NO gaps.
           */}

          <div
            className="flex w-40 overflow-hidden rounded-full"
            aria-label="Hero slides"
          >
            {heroSlides.map(
              (slide, index) => {
                const active =
                  index ===
                  activeIndex;

                return (
                  <button
                    key={slide.id}
                    type="button"
                    aria-label={`Go to ${slide.title}`}
                    aria-current={
                      active
                        ? "true"
                        : undefined
                    }
                    onClick={() =>
                      goTo(index)
                    }
                    className="h-5 flex-1 py-2"
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
            <button
              type="button"
              aria-label="Previous slide"
              onClick={
                goPrevious
              }
              className="flex size-10 items-center justify-center rounded-full border border-white/35 bg-black/10 text-white backdrop-blur-sm transition hover:bg-white/10"
            >
              <ArrowLeft className="size-4" />
            </button>

            <button
              type="button"
              aria-label="Next slide"
              onClick={goNext}
              className="flex size-10 items-center justify-center rounded-full bg-white text-tourism-navy transition hover:bg-tourism-pink hover:text-white"
            >
              <ArrowRight className="size-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
