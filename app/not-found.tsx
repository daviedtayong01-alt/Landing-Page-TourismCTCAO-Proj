import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  Compass,
  MapPin,
  Search,
} from "lucide-react";

const PORTAL_LINKS = {
  home: {
    label: "Home",
    href: "/",
  },
  destinations: {
    label: "Destinations",
    href: "/destinations",
  },
  dotListed: {
    label: "DOT Listed",
    href: "/business-directory",
  },
  transport: {
    label: "Transport",
    href: "/transport",
  },
  mice: {
    label: "MICE",
    href: "/mice",
  },
  events: {
    label: "Events",
    href: "/events",
  },
  reports: {
    label: "Reports",
    href: "/reports",
  },
  search: {
    label: "Search",
    href: "/search",
  },
} as const;

const PRIMARY_NAV = [
  {
    id: "home",
    ...PORTAL_LINKS.home,
  },
  {
    id: "destinations",
    ...PORTAL_LINKS.destinations,
  },
  {
    id: "dot-listed",
    ...PORTAL_LINKS.dotListed,
  },
  {
    id: "transport",
    ...PORTAL_LINKS.transport,
  },
  {
    id: "mice",
    ...PORTAL_LINKS.mice,
  },
  {
    id: "events",
    ...PORTAL_LINKS.events,
  },
] as const;

const FOOTER_EXPLORE_LINKS = [
  {
    id: "destinations",
    ...PORTAL_LINKS.destinations,
  },
  {
    id: "dot-listed",
    ...PORTAL_LINKS.dotListed,
  },
  {
    id: "events",
    ...PORTAL_LINKS.events,
  },
] as const;

const FOOTER_INFORMATION_LINKS = [
  {
    id: "transport",
    ...PORTAL_LINKS.transport,
  },
  {
    id: "mice",
    ...PORTAL_LINKS.mice,
  },
  {
    id: "reports",
    ...PORTAL_LINKS.reports,
  },
] as const;

const RECOVERY_LINKS = [
  {
    id: "destinations",
    number: "01",
    eyebrow: "DESTINATIONS",
    title: "Explore somewhere new",
    description:
      "Discover attractions, nature spots, cultural places, and experiences around Koronadal.",
    href: PORTAL_LINKS.destinations.href,
  },
  {
    id: "dot-listed",
    number: "02",
    eyebrow: "DOT LISTED",
    title: "Find a place to stay",
    description:
      "Browse tourism establishments and accredited places to stay, eat, and experience.",
    href: PORTAL_LINKS.dotListed.href,
  },
  {
    id: "events",
    number: "03",
    eyebrow: "EVENTS",
    title: "See what's happening",
    description:
      "Find festivals, activities, community events, and tourism updates in the city.",
    href: PORTAL_LINKS.events.href,
  },
] as const;

/**
 * Decorative tourism mascot.
 *
 * The illustration is intentionally built with HTML/CSS so the
 * 404 page does not depend on an additional image asset.
 */
function ExplorerCat() {
  return (
    <div
      aria-hidden="true"
      className="relative mx-auto h-[360px] w-full max-w-[560px] sm:h-[420px]"
    >
      {/* Soft illustration ground */}
      <div className="absolute bottom-5 left-1/2 h-8 w-[250px] -translate-x-1/2 rounded-[50%] bg-[#163f60]/8 blur-xl sm:w-[310px]" />

      {/* Decorative sun */}
      <div className="absolute left-[10%] top-[10%] size-14 rounded-full border border-[#e7ce83]/60 bg-[#e7ce83]/20 sm:left-[13%] sm:top-[12%] sm:size-16" />

      <div className="absolute left-[13%] top-[13%] size-8 rounded-full bg-[#e7ce83]/30 sm:left-[16%] sm:top-[15%] sm:size-10" />

      {/* Decorative dots */}
      <span className="absolute right-[13%] top-[17%] size-2 rounded-full bg-tourism-pink/50" />

      <span className="absolute right-[18%] top-[23%] size-1.5 rounded-full bg-tourism-navy/25" />

      <span className="absolute left-[21%] top-[33%] size-1.5 rounded-full bg-tourism-pink/40" />

      {/* Oversized 404 */}
      <div className="absolute inset-x-0 bottom-8 flex select-none items-end justify-center">
        <span className="text-[clamp(7.5rem,42vw,11.875rem)] font-black leading-[0.7] tracking-[-0.12em] text-[#e8d38e]/65">
          404
        </span>
      </div>

      {/* ============================================================
          CAT
          ============================================================ */}

      <div className="absolute bottom-7 left-1/2 z-10 h-[255px] w-[190px] -translate-x-1/2 sm:h-[300px] sm:w-[220px]">
        {/* Backpack */}
        <div className="absolute left-[2px] top-[102px] h-[104px] w-[55px] rotate-[-7deg] rounded-[19px] border-2 border-[#163f60]/10 bg-tourism-pink shadow-[inset_-7px_0_0_rgba(0,0,0,0.07)] sm:left-[-2px] sm:top-[117px] sm:h-[118px] sm:w-[61px]">
          <div className="absolute left-1/2 top-4 h-3 w-6 -translate-x-1/2 rounded-full border-2 border-white/70" />

          <div className="absolute left-2 top-1/2 h-1.5 w-5 rounded-full bg-white/35" />
        </div>

        {/* Tail */}
        <div className="absolute bottom-[52px] right-[7px] h-[80px] w-[18px] origin-bottom rotate-[-25deg] rounded-full border-[7px] border-[#c98559] border-b-transparent border-l-transparent border-t-transparent sm:right-[10px] sm:h-[92px]" />

        {/* Body */}
        <div className="absolute left-1/2 top-[104px] h-[113px] w-[91px] -translate-x-1/2 rounded-[42%_42%_28%_28%] bg-[#c98559] shadow-[inset_-8px_-4px_0_rgba(105,59,40,0.08)] sm:top-[120px] sm:h-[128px] sm:w-[103px]">
          {/* Shirt */}
          <div className="absolute inset-x-0 bottom-0 h-[68%] rounded-[40%_40%_24%_24%] bg-tourism-navy" />

          {/* Shirt collar */}
          <div className="absolute left-1/2 top-[41%] h-5 w-10 -translate-x-1/2 rotate-[3deg] rounded-b-full border-b-2 border-tourism-pink sm:w-12" />
        </div>

        {/* Head */}
        <div className="absolute left-1/2 top-[37px] z-20 h-[91px] w-[96px] -translate-x-1/2 rounded-[48%_48%_44%_44%] bg-[#c98559] shadow-[inset_-7px_-4px_0_rgba(105,59,40,0.08)] sm:top-[43px] sm:h-[103px] sm:w-[108px]">
          {/* Left ear */}
          <div className="absolute -left-[5px] -top-[25px] h-[50px] w-[48px] rotate-[-18deg] overflow-hidden rounded-[80%_15%_15%_20%] bg-[#c98559]">
            <div className="absolute bottom-0 right-1 h-[30px] w-[29px] rotate-[-4deg] rounded-[70%_15%_15%_20%] bg-tourism-pink/50" />
          </div>

          {/* Right ear */}
          <div className="absolute -right-[5px] -top-[25px] h-[50px] w-[48px] rotate-[18deg] overflow-hidden rounded-[15%_80%_20%_15%] bg-[#c98559]">
            <div className="absolute bottom-0 left-1 h-[30px] w-[29px] rotate-[4deg] rounded-[15%_70%_15%_15%] bg-tourism-pink/50" />
          </div>

          {/* Face */}
          <div className="absolute inset-x-0 top-0 h-full overflow-hidden rounded-[48%_48%_44%_44%]">
            {/* Eyes */}
            <span className="absolute left-[23px] top-[39px] size-2.5 rounded-full bg-tourism-navy sm:left-[27px] sm:top-[44px] sm:size-3" />

            <span className="absolute right-[23px] top-[39px] size-2.5 rounded-full bg-tourism-navy sm:right-[27px] sm:top-[44px] sm:size-3" />

            {/* Eye highlights */}
            <span className="absolute left-[24px] top-[39px] size-1 rounded-full bg-white sm:left-[28px] sm:top-[44px]" />

            <span className="absolute right-[24px] top-[39px] size-1 rounded-full bg-white sm:right-[28px] sm:top-[44px]" />

            {/* Nose */}
            <span className="absolute left-1/2 top-[53px] size-3 -translate-x-1/2 rotate-45 rounded-[40%] bg-tourism-pink sm:top-[59px] sm:size-3.5" />

            {/* Mouth */}
            <span className="absolute left-1/2 top-[61px] h-3 w-5 -translate-x-1/2 border-b-2 border-[#7b4a36] sm:top-[68px]" />

            {/* Whiskers */}
            <span className="absolute left-[-13px] top-[58px] h-px w-[28px] rotate-[5deg] bg-tourism-navy/35 sm:left-[-17px] sm:w-[34px]" />

            <span className="absolute left-[-13px] top-[68px] h-px w-[28px] rotate-[-5deg] bg-tourism-navy/35 sm:left-[-17px] sm:w-[34px]" />

            <span className="absolute right-[-13px] top-[58px] h-px w-[28px] rotate-[-5deg] bg-tourism-navy/35 sm:right-[-17px] sm:w-[34px]" />

            <span className="absolute right-[-13px] top-[68px] h-px w-[28px] rotate-[5deg] bg-tourism-navy/35 sm:right-[-17px] sm:w-[34px]" />
          </div>

          {/* Explorer hat */}
          <div className="absolute -top-[23px] left-1/2 z-30 h-[22px] w-[116px] -translate-x-1/2 -rotate-2 rounded-[50%] bg-tourism-pink shadow-sm sm:-top-[27px] sm:w-[130px]" />

          <div className="absolute -top-[42px] left-1/2 z-30 h-[31px] w-[70px] -translate-x-1/2 rounded-t-[70%] rounded-b-[25%] bg-tourism-navy sm:-top-[48px] sm:h-[35px] sm:w-[78px]" />

          {/* Hat band */}
          <div className="absolute -top-[19px] left-1/2 z-40 h-2.5 w-[82px] -translate-x-1/2 rounded-full bg-[#e8d38e] sm:-top-[22px] sm:w-[92px]" />
        </div>

        {/* Map held in paw */}
        <div className="absolute bottom-[24px] left-[-4px] z-30 h-[64px] w-[79px] rotate-[-9deg] rounded-[7px] border border-tourism-navy/10 bg-[#fffdf6] p-2 shadow-[0_8px_18px_rgba(22,63,96,0.12)] sm:bottom-[28px] sm:left-[-9px] sm:h-[72px] sm:w-[88px]">
          <div className="absolute left-2 top-2 h-1 w-10 rotate-[15deg] bg-tourism-pink/60" />

          <div className="absolute left-3 top-5 h-1 w-12 rotate-[-10deg] bg-tourism-navy/20" />

          <div className="absolute left-5 top-8 h-1 w-8 rotate-[8deg] bg-tourism-pink/45" />

          <div className="absolute right-3 top-3 flex size-4 items-center justify-center rounded-full bg-tourism-pink">
            <MapPin
              aria-hidden="true"
              className="size-2.5 text-white"
              fill="currentColor"
            />
          </div>
        </div>

        {/* Feet */}
        <div className="absolute bottom-0 left-[43px] h-[40px] w-[23px] rotate-[5deg] rounded-full bg-[#c98559] sm:left-[49px] sm:h-[46px]" />

        <div className="absolute bottom-0 right-[43px] h-[40px] w-[23px] rotate-[-5deg] rounded-full bg-[#c98559] sm:right-[49px] sm:h-[46px]" />

        {/* Shoes */}
        <div className="absolute bottom-[-2px] left-[35px] h-[13px] w-[34px] rotate-[-8deg] rounded-full bg-tourism-navy sm:left-[40px]" />

        <div className="absolute bottom-[-2px] right-[35px] h-[13px] w-[34px] rotate-[8deg] rounded-full bg-tourism-navy sm:right-[40px]" />
      </div>

      {/* Compass */}
      <div className="absolute bottom-[38px] right-[7%] flex size-12 rotate-[10deg] items-center justify-center rounded-full border-[3px] border-tourism-navy bg-[#f7f5ef] shadow-[0_8px_20px_rgba(22,63,96,0.12)] sm:right-[10%] sm:size-14">
        <Compass
          aria-hidden="true"
          className="size-6 text-tourism-pink sm:size-7"
        />

        <span className="absolute -bottom-1 -right-1 flex size-4 items-center justify-center rounded-full bg-tourism-pink text-[7px] font-black text-white">
          ?
        </span>
      </div>

      {/* Little location marker */}
      <div className="absolute bottom-[70px] left-[8%] flex size-8 items-center justify-center rounded-full bg-tourism-pink shadow-[0_7px_15px_rgba(245,43,145,0.2)] sm:left-[12%] sm:size-9">
        <MapPin
          aria-hidden="true"
          className="size-3.5 text-white"
          fill="currentColor"
        />
      </div>
    </div>
  );
}

export default function NotFound() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-tourism-surface text-tourism-navy">
      {/* ============================================================
          HEADER
          ============================================================ */}

      <header className="bg-tourism-navy text-white">
        <div className="mx-auto flex h-[70px] w-full max-w-[1440px] items-center justify-between px-5 sm:px-8 lg:px-12">
          <Link
            href={PORTAL_LINKS.home.href}
            aria-label="Visit Koronadal home"
            className="flex items-center gap-2.5 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-tourism-pink focus-visible:ring-offset-2 focus-visible:ring-offset-tourism-navy"
          >
            <span
              aria-hidden="true"
              className="flex size-9 shrink-0 items-center justify-center rounded-full bg-tourism-pink text-sm font-black text-white shadow-sm"
            >
              K
            </span>

            <span className="leading-none">
              <span className="block text-sm font-black tracking-tight">
                VISIT KORONADAL
              </span>

              <span className="mt-1 block text-[9px] font-bold uppercase tracking-[0.18em] text-white/70">
                CITY GOVERNMENT PORTAL
              </span>
            </span>
          </Link>

          <nav
            aria-label="Primary navigation"
            className="hidden items-center gap-7 text-xs font-bold text-white/75 xl:flex"
          >
            {PRIMARY_NAV.map((item) => (
              <Link
                key={item.id}
                href={item.href}
                className="rounded-sm transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-tourism-pink focus-visible:ring-offset-2 focus-visible:ring-offset-tourism-navy motion-reduce:transition-none"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <Link
            href={PORTAL_LINKS.search.href}
            aria-label="Search Visit Koronadal"
            className="flex size-9 items-center justify-center rounded-full text-white/80 transition-colors hover:bg-white/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-tourism-pink motion-reduce:transition-none"
          >
            <Search
              aria-hidden="true"
              className="size-4"
            />
          </Link>
        </div>
      </header>

      {/* ============================================================
          MAIN
          ============================================================ */}

      <main
        aria-labelledby="not-found-title"
        aria-describedby="not-found-description"
      >
        {/* ============================================================
            INTRO
            ============================================================ */}

        <section className="px-5 pb-0 pt-14 text-center sm:px-8 sm:pt-18 lg:pt-20">
          <div className="mx-auto max-w-3xl">
            <div className="inline-flex items-center gap-3">
              <span
                aria-hidden="true"
                className="h-px w-7 bg-tourism-pink"
              />

              <span className="text-[10px] font-extrabold uppercase tracking-[0.22em] text-tourism-pink">
                Exploration Interrupted
              </span>

              <span
                aria-hidden="true"
                className="h-px w-7 bg-tourism-pink"
              />
            </div>

            <h1
              id="not-found-title"
              className="mt-4 text-[clamp(2.6rem,6vw,4.8rem)] font-black leading-[0.92] tracking-[-0.06em] text-tourism-navy"
            >
              Oops. We lost
              <br />
              the trail.
            </h1>

            <p
              id="not-found-description"
              className="mx-auto mt-5 max-w-[510px] text-sm leading-6 text-tourism-muted sm:text-base"
            >
              Even our little explorer couldn&apos;t
              find the page or resource you were
              looking for.
            </p>

            <div className="mt-7 flex flex-col items-center justify-center gap-2.5 sm:flex-row">
              <Link
                href={PORTAL_LINKS.home.href}
                className="
                  inline-flex min-h-11
                  items-center justify-center
                  gap-2 rounded-full
                  bg-tourism-pink
                  px-7
                  text-xs font-extrabold
                  text-white
                  shadow-[0_9px_22px_rgba(245,43,145,0.18)]
                  transition-all
                  duration-200
                  hover:-translate-y-0.5
                  hover:bg-tourism-pink-dark
                  focus-visible:outline-none
                  focus-visible:ring-2
                  focus-visible:ring-tourism-pink
                  focus-visible:ring-offset-2
                  motion-reduce:transition-none
                  motion-reduce:hover:translate-y-0
                "
              >
                <ArrowLeft
                  aria-hidden="true"
                  className="size-3.5"
                />
                Back to Home
              </Link>

              <Link
                href={
                  PORTAL_LINKS.destinations.href
                }
                className="
                  inline-flex min-h-11
                  items-center justify-center
                  gap-2 rounded-full
                  border border-tourism-navy/15
                  bg-white px-7
                  text-xs font-extrabold
                  text-tourism-navy
                  shadow-sm
                  transition-all
                  duration-200
                  hover:-translate-y-0.5
                  hover:border-tourism-navy/30
                  hover:bg-tourism-navy/5
                  focus-visible:outline-none
                  focus-visible:ring-2
                  focus-visible:ring-tourism-pink
                  focus-visible:ring-offset-2
                  motion-reduce:transition-none
                  motion-reduce:hover:translate-y-0
                "
              >
                Explore Koronadal
                <ArrowRight
                  aria-hidden="true"
                  className="size-3.5"
                />
              </Link>
            </div>
          </div>
        </section>

        {/* ============================================================
            CHARACTER ILLUSTRATION
            ============================================================ */}

        <section
          aria-label="Tourism guide illustration"
          className="px-5 pt-7 sm:px-8 sm:pt-9"
        >
          <ExplorerCat />

          <div className="-mt-1 flex items-center justify-center gap-2">
            <span
              aria-hidden="true"
              className="size-1.5 rounded-full bg-tourism-pink"
            />

            <p className="text-[10px] font-extrabold uppercase tracking-[0.18em] text-tourism-muted sm:text-xs">
              Our guide got a little lost
            </p>

            <span
              aria-hidden="true"
              className="size-1.5 rounded-full bg-tourism-pink"
            />
          </div>
        </section>

        {/* ============================================================
            RECOVERY OPTIONS
            ============================================================ */}

        <section className="mx-auto w-full max-w-6xl px-5 pb-16 pt-10 sm:px-8 sm:pt-12 lg:px-12">
          <div className="mb-5 flex flex-col gap-1 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-[10px] font-extrabold uppercase tracking-[0.18em] text-tourism-pink">
                Continue Exploring
              </p>

              <h2 className="mt-1 text-xl font-black tracking-[-0.03em] text-tourism-navy sm:text-2xl">
                Pick another trail
              </h2>
            </div>

            <p className="max-w-xs text-xs leading-5 text-tourism-muted sm:text-right">
              There&apos;s still plenty to discover
              around Koronadal.
            </p>
          </div>

          <div className="grid gap-3 lg:grid-cols-3">
            {RECOVERY_LINKS.map((item) => (
              <Link
                key={item.id}
                href={item.href}
                className="
                  group relative
                  flex min-h-[178px]
                  flex-col overflow-hidden
                  rounded-2xl
                  border border-tourism-navy/10
                  bg-white p-5
                  shadow-[0_7px_25px_rgba(22,63,96,0.045)]
                  transition-all
                  duration-200
                  hover:-translate-y-1
                  hover:border-tourism-pink/25
                  hover:shadow-[0_14px_35px_rgba(22,63,96,0.09)]
                  focus-visible:outline-none
                  focus-visible:ring-2
                  focus-visible:ring-tourism-pink
                  focus-visible:ring-offset-2
                  motion-reduce:transition-none
                  motion-reduce:hover:translate-y-0
                "
              >
                <span
                  aria-hidden="true"
                  className="absolute left-0 top-0 h-1 w-12 rounded-br-full bg-tourism-pink transition-[width] duration-200 group-hover:w-20 motion-reduce:transition-none"
                />

                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-black tracking-[0.12em] text-tourism-navy/25">
                    {item.number}
                  </span>

                  <ArrowRight
                    aria-hidden="true"
                    className="size-4 text-tourism-navy/25 transition-all duration-200 group-hover:translate-x-1 group-hover:text-tourism-pink motion-reduce:transition-none"
                  />
                </div>

                <div className="mt-auto">
                  <p className="text-[10px] font-extrabold uppercase tracking-[0.18em] text-tourism-pink">
                    {item.eyebrow}
                  </p>

                  <h3 className="mt-1.5 text-base font-black tracking-[-0.02em] text-tourism-navy">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-xs leading-5 text-tourism-muted">
                    {item.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* ============================================================
            STATUS BAR
            ============================================================ */}

        <section className="border-y border-tourism-navy/10 bg-tourism-navy/5">
          <div className="mx-auto flex w-full max-w-6xl flex-col gap-3 px-5 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-12">
            <div className="flex items-center gap-3">
              <span className="flex size-8 items-center justify-center rounded-full bg-tourism-pink/10 text-tourism-pink">
                <Compass
                  aria-hidden="true"
                  className="size-4"
                />
              </span>

              <div>
                <p className="text-[10px] font-extrabold uppercase tracking-[0.18em] text-tourism-navy/55">
                  Recovery Status
                </p>

                <p className="mt-0.5 font-mono text-xs font-bold text-tourism-navy">
                  ROUTE_NOT_FOUND · 404
                </p>
              </div>
            </div>

            <p className="text-xs font-bold uppercase tracking-[0.12em] text-tourism-muted sm:text-right">
              Use the navigation above to
              continue exploring
            </p>
          </div>
        </section>
      </main>

      {/* ============================================================
          FOOTER
          ============================================================ */}

      <footer className="bg-tourism-navy text-white">
        <div className="mx-auto w-full max-w-6xl px-5 py-9 sm:px-8 lg:px-12">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">
            {/* BRAND */}

            <div>
              <Link
                href={PORTAL_LINKS.home.href}
                aria-label="Visit Koronadal home"
                className="
                  inline-flex items-center gap-2.5
                  rounded-md
                  focus-visible:outline-none
                  focus-visible:ring-2
                  focus-visible:ring-tourism-pink
                  focus-visible:ring-offset-2
                  focus-visible:ring-offset-tourism-navy
                "
              >
                <span
                  aria-hidden="true"
                  className="flex size-8 shrink-0 items-center justify-center rounded-full bg-tourism-pink text-sm font-black text-white"
                >
                  K
                </span>

                <span>
                  <span className="block text-sm font-black tracking-tight">
                    VISIT KORONADAL
                  </span>

                  <span className="mt-1 block text-[9px] font-bold uppercase tracking-[0.16em] text-white/65">
                    CITY GOVERNMENT PORTAL
                  </span>
                </span>
              </Link>

              <p className="mt-4 max-w-xs text-xs leading-5 text-white/60">
                Discover destinations,
                establishments, events,
                transport, and tourism
                experiences in Koronadal.
              </p>
            </div>

            {/* EXPLORE */}

            <div>
              <p className="text-[10px] font-extrabold uppercase tracking-[0.14em] text-tourism-pink">
                Explore
              </p>

              <nav className="mt-4 flex flex-col gap-2.5 text-sm text-white/65">
                {FOOTER_EXPLORE_LINKS.map(
                  (item) => (
                    <Link
                      key={item.id}
                      href={item.href}
                      className="
                        rounded-sm
                        transition-colors
                        hover:text-white
                        focus-visible:outline-none
                        focus-visible:ring-2
                        focus-visible:ring-tourism-pink
                        focus-visible:ring-offset-2
                        focus-visible:ring-offset-tourism-navy
                        motion-reduce:transition-none
                      "
                    >
                      {item.label}
                    </Link>
                  ),
                )}
              </nav>
            </div>

            {/* INFORMATION */}

            <div>
              <p className="text-[10px] font-extrabold uppercase tracking-[0.14em] text-tourism-pink">
                Information
              </p>

              <nav className="mt-4 flex flex-col gap-2.5 text-sm text-white/65">
                {FOOTER_INFORMATION_LINKS.map(
                  (item) => (
                    <Link
                      key={item.id}
                      href={item.href}
                      className="
                        rounded-sm
                        transition-colors
                        hover:text-white
                        focus-visible:outline-none
                        focus-visible:ring-2
                        focus-visible:ring-tourism-pink
                        focus-visible:ring-offset-2
                        focus-visible:ring-offset-tourism-navy
                        motion-reduce:transition-none
                      "
                    >
                      {item.label}
                    </Link>
                  ),
                )}
              </nav>
            </div>

            {/* SEARCH */}

            <div>
              <p className="text-[10px] font-extrabold uppercase tracking-[0.14em] text-tourism-pink">
                Need a Way Back?
              </p>

              <p className="mt-4 text-xs leading-5 text-white/60">
                Search the portal to find the
                destination, establishment,
                event, or tourism information
                you were looking for.
              </p>

              <Link
                href={PORTAL_LINKS.search.href}
                className="
                  mt-4 inline-flex min-h-10
                  items-center gap-2
                  rounded-full
                  bg-tourism-pink
                  px-4 py-2
                  text-xs font-extrabold
                  text-white
                  transition-colors
                  hover:bg-tourism-pink-dark
                  focus-visible:outline-none
                  focus-visible:ring-2
                  focus-visible:ring-tourism-pink
                  focus-visible:ring-offset-2
                  focus-visible:ring-offset-tourism-navy
                  motion-reduce:transition-none
                "
              >
                Search Portal

                <ArrowRight
                  aria-hidden="true"
                  className="size-3"
                />
              </Link>
            </div>
          </div>

          <div className="mt-8 border-t border-white/10 pt-5 text-xs text-white/40">
            © {new Date().getFullYear()} City
            Government of Koronadal. All rights
            reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}