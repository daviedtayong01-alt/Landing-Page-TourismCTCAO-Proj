"use client";

import Link from "next/link";
import {
  Heart,
  Menu,
  Search,
  X,
} from "lucide-react";
import {
  useEffect,
  useId,
  useRef,
  useState,
} from "react";

import {
  getTranslations,
  type Locale,
} from "@/lib/i18n";

import { LanguageSwitcher } from "./LanguageSwitcher";

interface MobileMenuProps {
  favoriteCount: number;
  locale: Locale;
}

const navigation = [
  {
    id: "home",
    href: "/",
  },
  {
    id: "destinations",
    href: "/destinations",
  },
  {
    id: "dot-listed",
    href: "/business-directory",
  },
  {
    id: "transport",
    href: "/transport",
  },
  {
    id: "mice",
    href: "/mice",
  },
  {
    id: "events",
    href: "/events",
  },
  {
    id: "reports",
    href: "/reports",
  },
] as const;

export function MobileMenu({
  favoriteCount,
  locale,
}: MobileMenuProps) {
  const [isOpen, setIsOpen] = useState(false);

  const menuButtonRef =
    useRef<HTMLButtonElement>(null);

  const firstLinkRef =
    useRef<HTMLAnchorElement>(null);

  const panelRef =
    useRef<HTMLDivElement>(null);

  const menuId = useId();

  const translations =
    getTranslations(locale);

  const navigationLabels = {
    home: translations.nav.home,
    destinations: translations.nav.destinations,
    "dot-listed":
      translations.nav.dotListed,
    transport: translations.nav.transport,
    mice: translations.nav.mice,
    events: translations.nav.events,
    reports: translations.nav.reports,
  } as const;

  const closeMenu = () => {
    setIsOpen(false);
  };

  /*
   * Keep document scrolling locked while the menu is open.
   */
  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const previousOverflow =
      document.body.style.overflow;

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow =
        previousOverflow;
    };
  }, [isOpen]);

  /*
   * Move focus into the menu after it opens.
   */
  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const frame = window.requestAnimationFrame(
      () => {
        firstLinkRef.current?.focus();
      },
    );

    return () => {
      window.cancelAnimationFrame(frame);
    };
  }, [isOpen]);

  /*
   * Return focus to the menu button after closing.
   */
  useEffect(() => {
    if (isOpen) {
      return;
    }

    const frame = window.requestAnimationFrame(
      () => {
        menuButtonRef.current?.focus();
      },
    );

    return () => {
      window.cancelAnimationFrame(frame);
    };
  }, [isOpen]);

  /*
   * Escape closes the menu.
   */
  useEffect(() => {
    if (!isOpen) {
      return;
    }

    function handleKeyDown(
      event: KeyboardEvent,
    ) {
      if (event.key === "Escape") {
        event.preventDefault();
        closeMenu();
        return;
      }

      if (event.key !== "Tab") {
        return;
      }

      const panel = panelRef.current;

      if (!panel) {
        return;
      }

      const focusableElements =
        panel.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
        );

      if (focusableElements.length === 0) {
        return;
      }

      const first =
        focusableElements[0];

      const last =
        focusableElements[
          focusableElements.length - 1
        ];

      if (
        event.shiftKey &&
        document.activeElement === first
      ) {
        event.preventDefault();
        last.focus();
        return;
      }

      if (
        !event.shiftKey &&
        document.activeElement === last
      ) {
        event.preventDefault();
        first.focus();
      }
    }

    document.addEventListener(
      "keydown",
      handleKeyDown,
    );

    return () => {
      document.removeEventListener(
        "keydown",
        handleKeyDown,
      );
    };
  }, [isOpen]);

  /*
   * Clicking outside the panel closes it.
   */
  useEffect(() => {
    if (!isOpen) {
      return;
    }

    function handlePointerDown(
      event: PointerEvent,
    ) {
      const target = event.target;

      if (!(target instanceof Node)) {
        return;
      }

      if (
        panelRef.current?.contains(target) ||
        menuButtonRef.current?.contains(target)
      ) {
        return;
      }

      closeMenu();
    }

    document.addEventListener(
      "pointerdown",
      handlePointerDown,
    );

    return () => {
      document.removeEventListener(
        "pointerdown",
        handlePointerDown,
      );
    };
  }, [isOpen]);

  /*
   * Prevent the menu from remaining open when the
   * viewport transitions into the desktop layout.
   */
  useEffect(() => {
    const mediaQuery = window.matchMedia(
      "(min-width: 1280px)",
    );

    function handleMediaChange(
      event: MediaQueryListEvent,
    ) {
      if (event.matches) {
        setIsOpen(false);
      }
    }

    mediaQuery.addEventListener(
      "change",
      handleMediaChange,
    );

    return () => {
      mediaQuery.removeEventListener(
        "change",
        handleMediaChange,
      );
    };
  }, []);

  function handleNavigationClick() {
    closeMenu();
  }

  return (
    <div className="relative">
      <button
        ref={menuButtonRef}
        type="button"
        aria-expanded={isOpen}
        aria-controls={menuId}
        aria-label={
          isOpen
            ? translations.common.close
            : translations.common.open
        }
        onClick={() =>
          setIsOpen((previous) => !previous)
        }
        className="flex size-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white transition-colors motion-reduce:transition-none hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-tourism-pink focus-visible:ring-offset-2 focus-visible:ring-offset-tourism-navy"
      >
        {isOpen ? (
          <X
            aria-hidden="true"
            className="size-5"
          />
        ) : (
          <Menu
            aria-hidden="true"
            className="size-5"
          />
        )}
      </button>

      {isOpen && (
        <div
          ref={panelRef}
          id={menuId}
          className="absolute right-0 top-[52px] w-[min(90vw,360px)] overflow-hidden rounded-2xl border border-tourism-border bg-white shadow-[0_18px_55px_rgba(12,44,72,0.18)]"
        >
          <div className="border-b border-tourism-border px-5 py-5">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-[9px] font-extrabold uppercase tracking-[0.18em] text-tourism-pink">
                  Visit Koronadal
                </p>

                <p className="mt-1 text-sm font-black text-tourism-navy">
                  {translations.language.label}
                </p>
              </div>

              <LanguageSwitcher locale={locale} />
            </div>
          </div>

          <nav
            aria-label={
              translations.accessibility
                .mobileNavigation
            }
            className="px-3 py-3"
          >
            {navigation.map((item, index) => (
              <Link
                key={item.id}
                ref={
                  index === 0
                    ? firstLinkRef
                    : undefined
                }
                href={item.href}
                onClick={handleNavigationClick}
                className="flex min-h-11 items-center rounded-xl px-3 text-sm font-bold text-tourism-navy transition-colors motion-reduce:transition-none hover:bg-tourism-surface hover:text-tourism-pink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-tourism-pink focus-visible:ring-inset"
              >
                {navigationLabels[item.id]}
              </Link>
            ))}

            <Link
              href="/search"
              onClick={handleNavigationClick}
              className="mt-1 flex min-h-11 items-center gap-3 rounded-xl border-t border-tourism-border px-3 pt-3 text-sm font-bold text-tourism-navy transition-colors motion-reduce:transition-none hover:text-tourism-pink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-tourism-pink focus-visible:ring-inset"
            >
              <Search
                aria-hidden="true"
                className="size-4 shrink-0"
              />

              <span>
                {translations.nav.search}
              </span>
            </Link>

            <Link
              href="/search?favorites=true"
              onClick={handleNavigationClick}
              className="relative mt-1 flex min-h-11 items-center gap-3 rounded-xl px-3 text-sm font-bold text-tourism-navy transition-colors motion-reduce:transition-none hover:bg-tourism-surface hover:text-tourism-pink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-tourism-pink focus-visible:ring-inset"
            >
              <Heart
                aria-hidden="true"
                className="size-4 shrink-0"
              />

              <span>
                {translations.nav.favorites}
              </span>

              {favoriteCount > 0 && (
                <span
                  aria-hidden="true"
                  className="ml-auto flex min-w-5 items-center justify-center rounded-full bg-tourism-pink px-1.5 text-[9px] font-black leading-5 text-white"
                >
                  {favoriteCount > 99
                    ? "99+"
                    : favoriteCount}
                </span>
              )}
            </Link>
          </nav>

          <div className="border-t border-tourism-border bg-tourism-surface px-5 py-4">
            <p className="text-[9px] font-extrabold uppercase tracking-[0.18em] text-tourism-muted">
              {translations.language.label}
            </p>

            <p className="mt-1 text-xs font-medium text-tourism-navy">
              {locale === "en"
                ? translations.language
                    .english
                : translations.language
                    .filipino}
            </p>

            <div className="mt-3">
              <LanguageSwitcher locale={locale} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}