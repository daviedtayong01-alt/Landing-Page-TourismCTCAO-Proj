import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  Compass,
  MapPin,
  Search,
} from "lucide-react";

const RECOVERY_LINKS = [
  {
    number: "01",
    eyebrow: "DESTINATIONS",
    title: "Explore somewhere new",
    description:
      "Discover attractions, nature spots, cultural places, and experiences around Koronadal.",
    href: "/destinations",
  },
  {
    number: "02",
    eyebrow: "DOT LISTED",
    title: "Find a place to stay",
    description:
      "Browse tourism establishments and accredited places to stay, eat, and experience.",
    href: "/business-directory",
  },
  {
    number: "03",
    eyebrow: "EVENTS",
    title: "See what's happening",
    description:
      "Find festivals, activities, community events, and tourism updates in the city.",
    href: "/events",
  },
] as const;

/**
 * A small original tourism mascot built entirely with HTML/CSS.
 *
 * Keeping the character in the component means the 404 page has no
 * dependency on a missing image asset. The proportions are deliberately
 * constrained so the character remains stable across viewport sizes.
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
      <span className="absolute right-[13%] top-[17%] size-2 rounded-full bg-[#e82787]/50" />
      <span className="absolute right-[18%] top-[23%] size-1.5 rounded-full bg-[#163f60]/25" />
      <span className="absolute left-[21%] top-[33%] size-1.5 rounded-full bg-[#e82787]/40" />

      {/* Oversized 404 */}
      <div className="absolute inset-x-0 bottom-8 flex items-end justify-center select-none">
        <span className="text-[145px] font-black leading-[0.7] tracking-[-0.12em] text-[#e8d38e]/65 sm:text-[190px]">
          404
        </span>
      </div>

      {/* ============================================================
          CAT
         ============================================================ */}

      <div className="absolute bottom-7 left-1/2 z-10 h-[255px] w-[190px] -translate-x-1/2 sm:h-[300px] sm:w-[220px]">
        {/* Backpack */}
        <div className="absolute left-[2px] top-[102px] h-[104px] w-[55px] rotate-[-7deg] rounded-[19px] border-2 border-[#163f60]/10 bg-[#e82787] shadow-[inset_-7px_0_0_rgba(0,0,0,0.07)] sm:left-[-2px] sm:top-[117px] sm:h-[118px] sm:w-[61px]">
          <div className="absolute left-1/2 top-4 h-3 w-6 -translate-x-1/2 rounded-full border-2 border-white/70" />

          <div className="absolute left-2 top-1/2 h-1.5 w-5 rounded-full bg-white/35" />
        </div>

        {/* Tail */}
        <div className="absolute bottom-[52px] right-[7px] h-[80px] w-[18px] origin-bottom rotate-[-25deg] rounded-full border-[7px] border-[#c98559] border-l-transparent border-b-transparent sm:right-[10px] sm:h-[92px]" />

        {/* Body */}
        <div className="absolute left-1/2 top-[104px] h-[113px] w-[91px] -translate-x-1/2 rounded-[42%_42%_28%_28%] bg-[#c98559] shadow-[inset_-8px_-4px_0_rgba(105,59,40,0.08)] sm:top-[120px] sm:h-[128px] sm:w-[103px]">
          {/* Shirt */}
          <div className="absolute inset-x-0 bottom-0 h-[68%] rounded-[40%_40%_24%_24%] bg-[#163f60]" />

          {/* Shirt collar */}
          <div className="absolute left-1/2 top-[41%] h-5 w-10 -translate-x-1/2 rotate-[3deg] rounded-b-full border-b-2 border-[#e82787] sm:w-12" />
        </div>

        {/* Head */}
        <div className="absolute left-1/2 top-[37px] z-20 h-[91px] w-[96px] -translate-x-1/2 rounded-[48%_48%_44%_44%] bg-[#c98559] shadow-[inset_-7px_-4px_0_rgba(105,59,40,0.08)] sm:top-[43px] sm:h-[103px] sm:w-[108px]">
          {/* Left ear */}
          <div className="absolute -left-[5px] -top-[25px] h-[50px] w-[48px] rotate-[-18deg] overflow-hidden rounded-[80%_15%_15%_20%] bg-[#c98559]">
            <div className="absolute bottom-0 right-1 h-[30px] w-[29px] rotate-[-4deg] rounded-[70%_15%_15%_20%] bg-[#e82787]/50" />
          </div>

          {/* Right ear */}
          <div className="absolute -right-[5px] -top-[25px] h-[50px] w-[48px] rotate-[18deg] overflow-hidden rounded-[15%_80%_20%_15%] bg-[#c98559]">
            <div className="absolute bottom-0 left-1 h-[30px] w-[29px] rotate-[4deg] rounded-[15%_70%_15%_15%] bg-[#e82787]/50" />
          </div>

          {/* Face */}
          <div className="absolute inset-x-0 top-0 h-full overflow-hidden rounded-[48%_48%_44%_44%]">
            {/* Eyes */}
            <span className="absolute left-[23px] top-[39px] size-2.5 rounded-full bg-[#163f60] sm:left-[27px] sm:top-[44px] sm:size-3" />
            <span className="absolute right-[23px] top-[39px] size-2.5 rounded-full bg-[#163f60] sm:right-[27px] sm:top-[44px] sm:size-3" />

            {/* Eye highlights */}
            <span className="absolute left-[24px] top-[39px] size-1 rounded-full bg-white sm:left-[28px] sm:top-[44px]" />
            <span className="absolute right-[24px] top-[39px] size-1 rounded-full bg-white sm:right-[28px] sm:top-[44px]" />

            {/* Nose */}
            <span className="absolute left-1/2 top-[53px] size-3 -translate-x-1/2 rotate-45 rounded-[40%] bg-[#e82787] sm:top-[59px] sm:size-3.5" />

            {/* Mouth */}
            <span className="absolute left-1/2 top-[61px] h-3 w-5 -translate-x-1/2 border-b-2 border-[#7b4a36] sm:top-[68px]" />

            {/* Whiskers */}
            <span className="absolute left-[-13px] top-[58px] h-px w-[28px] rotate-[5deg] bg-[#163f60]/35 sm:left-[-17px] sm:w-[34px]" />
            <span className="absolute left-[-13px] top-[68px] h-px w-[28px] rotate-[-5deg] bg-[#163f60]/35 sm:left-[-17px] sm:w-[34px]" />
            <span className="absolute right-[-13px] top-[58px] h-px w-[28px] rotate-[-5deg] bg-[#163f60]/35 sm:right-[-17px] sm:w-[34px]" />
            <span className="absolute right-[-13px] top-[68px] h-px w-[28px] rotate-[5deg] bg-[#163f60]/35 sm:right-[-17px] sm:w-[34px]" />
          </div>

          {/* Explorer hat */}
          <div className="absolute -top-[23px] left-1/2 z-30 h-[22px] w-[116px] -translate-x-1/2 -rotate-2 rounded-[50%] bg-[#e82787] shadow-sm sm:-top-[27px] sm:w-[130px]" />

          <div className="absolute -top-[42px] left-1/2 z-30 h-[31px] w-[70px] -translate-x-1/2 rounded-t-[70%] rounded-b-[25%] bg-[#163f60] sm:-top-[48px] sm:h-[35px] sm:w-[78px]" />

          {/* Hat band */}
          <div className="absolute -top-[19px] left-1/2 z-40 h-2.5 w-[82px] -translate-x-1/2 rounded-full bg-[#e8d38e] sm:-top-[22px] sm:w-[92px]" />
        </div>

        {/* Map held in paw */}
        <div className="absolute bottom-[24px] left-[-4px] z-30 h-[64px] w-[79px] rotate-[-9deg] rounded-[7px] border border-[#163f60]/10 bg-[#fffdf6] p-2 shadow-[0_8px_18px_rgba(22,63,96,0.12)] sm:bottom-[28px] sm:left-[-9px] sm:h-[72px] sm:w-[88px]">
          <div className="absolute left-2 top-2 h-1 w-10 rotate-[15deg] bg-[#e82787]/60" />
          <div className="absolute left-3 top-5 h-1 w-12 rotate-[-10deg] bg-[#163f60]/20" />
          <div className="absolute left-5 top-8 h-1 w-8 rotate-[8deg] bg-[#e82787]/45" />

          <div className="absolute right-3 top-3 flex size-4 items-center justify-center rounded-full bg-[#e82787]">
            <MapPin className="size-2.5 text-white" fill="currentColor" />
          </div>
        </div>

        {/* Feet */}
        <div className="absolute bottom-0 left-[43px] h-[40px] w-[23px] rotate-[5deg] rounded-full bg-[#c98559] sm:left-[49px] sm:h-[46px]" />
        <div className="absolute bottom-0 right-[43px] h-[40px] w-[23px] rotate-[-5deg] rounded-full bg-[#c98559] sm:right-[49px] sm:h-[46px]" />

        {/* Shoes */}
        <div className="absolute bottom-[-2px] left-[35px] h-[13px] w-[34px] rotate-[-8deg] rounded-full bg-[#163f60] sm:left-[40px]" />
        <div className="absolute bottom-[-2px] right-[35px] h-[13px] w-[34px] rotate-[8deg] rounded-full bg-[#163f60] sm:right-[40px]" />
      </div>

      {/* Compass */}
      <div className="absolute bottom-[38px] right-[7%] flex size-12 rotate-[10deg] items-center justify-center rounded-full border-[3px] border-[#163f60] bg-[#f7f5ef] shadow-[0_8px_20px_rgba(22,63,96,0.12)] sm:right-[10%] sm:size-14">
        <Compass className="size-6 text-[#e82787] sm:size-7" />

        <span className="absolute -bottom-1 -right-1 flex size-4 items-center justify-center rounded-full bg-[#e82787] text-[7px] font-black text-white">
          ?
        </span>
      </div>

      {/* Little location marker */}
      <div className="absolute bottom-[70px] left-[8%] flex size-8 items-center justify-center rounded-full bg-[#e82787] shadow-[0_7px_15px_rgba(232,39,135,0.2)] sm:left-[12%] sm:size-9">
        <MapPin className="size-3.5 text-white" fill="currentColor" />
      </div>
    </div>
  );
}

export default function NotFound() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#f7f5ef] text-[#163f60]">
      {/* ============================================================
          HEADER
         ============================================================ */}

      <header className="bg-[#0f3f61] text-white">
        <div className="mx-auto flex h-[70px] w-full max-w-[1440px] items-center justify-between px-5 sm:px-8 lg:px-12">
          <Link
            href="/"
            aria-label="Visit Koronadal home"
            className="flex items-center gap-2.5 rounded-md outline-none focus-visible:ring-2 focus-visible:ring-[#e82787] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0f3f61]"
          >
            <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-white text-[10px] font-black text-[#0f3f61]">
              CK
            </span>

            <span className="leading-none">
              <span className="block text-[13px] font-black tracking-tight">
                VISIT KORONADAL
              </span>

              <span className="mt-1 block text-[7px] font-bold uppercase tracking-[0.18em] text-white/60">
                CITY GOVERNMENT PORTAL
              </span>
            </span>
          </Link>

          <nav
            aria-label="404 navigation"
            className="hidden items-center gap-7 text-[10px] font-bold text-white/75 md:flex"
          >
            <Link href="/" className="transition hover:text-white">
              Home
            </Link>

            <Link
              href="/destinations"
              className="transition hover:text-white"
            >
              Destinations
            </Link>

            <Link
              href="/business-directory"
              className="transition hover:text-white"
            >
              DOT Listed
            </Link>

            <Link href="/transport" className="transition hover:text-white">
              Transport
            </Link>

            <Link href="/mice" className="transition hover:text-white">
              MICE
            </Link>

            <Link href="/events" className="transition hover:text-white">
              Events
            </Link>
          </nav>

          <Link
            href="/search"
            aria-label="Search Visit Koronadal"
            className="flex size-9 items-center justify-center rounded-full text-white/80 transition hover:bg-white/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#e82787]"
          >
            <Search className="size-4" />
          </Link>
        </div>
      </header>

      {/* ============================================================
          MAIN
         ============================================================ */}

      <main>
        {/* ============================================================
            INTRO
           ============================================================ */}

        <section className="px-5 pb-0 pt-14 text-center sm:px-8 sm:pt-18 lg:pt-20">
          <div className="mx-auto max-w-3xl">
            <div className="inline-flex items-center gap-3">
              <span className="h-px w-7 bg-[#e82787]" />

              <span className="text-[9px] font-extrabold uppercase tracking-[0.25em] text-[#e82787]">
                Exploration Interrupted
              </span>

              <span className="h-px w-7 bg-[#e82787]" />
            </div>

            <h1 className="mt-4 text-[clamp(2.6rem,6vw,4.8rem)] font-black leading-[0.92] tracking-[-0.06em] text-[#163f60]">
              Oops. We lost
              <br />
              the trail.
            </h1>

            <p className="mx-auto mt-5 max-w-[510px] text-[12px] leading-6 text-[#708697] sm:text-sm">
              Even our little explorer couldn&apos;t find this page. The route
              you followed doesn&apos;t lead anywhere in Visit Koronadal.
            </p>

            <div className="mt-7 flex flex-col items-center justify-center gap-2.5 sm:flex-row">
              <Link
                href="/"
                className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-[#e82787] px-7 text-[10px] font-extrabold text-white shadow-[0_9px_22px_rgba(232,39,135,0.18)] transition duration-200 hover:-translate-y-0.5 hover:bg-[#d91d78] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#e82787] focus-visible:ring-offset-2"
              >
                <ArrowLeft className="size-3.5" />
                Back to Home
              </Link>

              <Link
                href="/destinations"
                className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-[#163f60]/15 bg-white px-7 text-[10px] font-extrabold text-[#163f60] shadow-sm transition duration-200 hover:-translate-y-0.5 hover:border-[#163f60]/30 hover:bg-[#163f60]/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#e82787] focus-visible:ring-offset-2"
              >
                Explore Koronadal
                <ArrowRight className="size-3.5" />
              </Link>
            </div>
          </div>
        </section>

        {/* ============================================================
            CHARACTER ILLUSTRATION
           ============================================================ */}

        <section className="px-5 pt-7 sm:px-8 sm:pt-9">
          <ExplorerCat />

          <div className="-mt-1 flex items-center justify-center gap-2">
            <span className="size-1.5 rounded-full bg-[#e82787]" />

            <p className="text-[8px] font-extrabold uppercase tracking-[0.2em] text-[#718798] sm:text-[9px]">
              Our guide got a little lost
            </p>

            <span className="size-1.5 rounded-full bg-[#e82787]" />
          </div>
        </section>

        {/* ============================================================
            RECOVERY OPTIONS
           ============================================================ */}

        <section className="mx-auto w-full max-w-6xl px-5 pb-16 pt-10 sm:px-8 sm:pt-12 lg:px-12">
          <div className="mb-5 flex flex-col gap-1 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-[8px] font-extrabold uppercase tracking-[0.2em] text-[#e82787]">
                Continue Exploring
              </p>

              <h2 className="mt-1 text-xl font-black tracking-[-0.03em] text-[#163f60] sm:text-2xl">
                Pick another trail
              </h2>
            </div>

            <p className="max-w-xs text-[9px] leading-4 text-[#708697] sm:text-right">
              There&apos;s still plenty to discover around Koronadal.
            </p>
          </div>

          <div className="grid gap-3 lg:grid-cols-3">
            {RECOVERY_LINKS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group relative flex min-h-[178px] flex-col overflow-hidden rounded-2xl border border-[#163f60]/10 bg-white p-5 shadow-[0_7px_25px_rgba(22,63,96,0.045)] transition duration-200 hover:-translate-y-1 hover:border-[#e82787]/25 hover:shadow-[0_14px_35px_rgba(22,63,96,0.09)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#e82787] focus-visible:ring-offset-2"
              >
                <span className="absolute left-0 top-0 h-1 w-12 rounded-br-full bg-[#e82787] transition-all duration-200 group-hover:w-20" />

                <div className="flex items-center justify-between">
                  <span className="text-[9px] font-black tracking-[0.12em] text-[#163f60]/25">
                    {item.number}
                  </span>

                  <ArrowRight className="size-4 text-[#163f60]/25 transition-all duration-200 group-hover:translate-x-1 group-hover:text-[#e82787]" />
                </div>

                <div className="mt-auto">
                  <p className="text-[8px] font-extrabold uppercase tracking-[0.18em] text-[#e82787]">
                    {item.eyebrow}
                  </p>

                  <h3 className="mt-1.5 text-[15px] font-black tracking-[-0.02em] text-[#163f60]">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-[10px] leading-5 text-[#708697]">
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

        <section className="border-y border-[#163f60]/10 bg-[#eef0eb]">
          <div className="mx-auto flex w-full max-w-6xl flex-col gap-3 px-5 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-12">
            <div className="flex items-center gap-3">
              <span className="flex size-8 items-center justify-center rounded-full bg-[#e82787]/10 text-[#e82787]">
                <Compass className="size-4" />
              </span>

              <div>
                <p className="text-[8px] font-extrabold uppercase tracking-[0.18em] text-[#163f60]/45">
                  Navigation Status
                </p>

                <p className="mt-0.5 font-mono text-[9px] font-bold text-[#163f60]">
                  ROUTE_NOT_FOUND · 404
                </p>
              </div>
            </div>

            <p className="text-[8px] font-bold uppercase tracking-[0.14em] text-[#708697] sm:text-right">
              Visit Koronadal is still online
            </p>
          </div>
        </section>
      </main>

      {/* ============================================================
          FOOTER
         ============================================================ */}

      <footer className="bg-[#0f3f61] text-white">
        <div className="mx-auto w-full max-w-6xl px-5 py-8 sm:px-8 lg:px-12">
          <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">
            <div>
              <Link
                href="/"
                className="inline-flex items-center gap-2.5 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#e82787]"
              >
                <span className="flex size-8 items-center justify-center rounded-full bg-white text-[9px] font-black text-[#0f3f61]">
                  CK
                </span>

                <span>
                  <span className="block text-[10px] font-black tracking-tight">
                    VISIT KORONADAL
                  </span>

                  <span className="mt-0.5 block text-[6px] font-bold uppercase tracking-[0.18em] text-white/45">
                    CITY GOVERNMENT PORTAL
                  </span>
                </span>
              </Link>

              <p className="mt-4 max-w-xs text-[9px] leading-5 text-white/45">
                Discover destinations, establishments, events, transport, and
                tourism experiences in Koronadal.
              </p>
            </div>

            <div>
              <p className="text-[8px] font-extrabold uppercase tracking-[0.18em] text-[#e82787]">
                Explore
              </p>

              <div className="mt-3 flex flex-col gap-2 text-[9px] text-white/55">
                <Link href="/destinations" className="hover:text-white">
                  Destinations
                </Link>

                <Link
                  href="/business-directory"
                  className="hover:text-white"
                >
                  DOT Listed
                </Link>

                <Link href="/events" className="hover:text-white">
                  Events
                </Link>
              </div>
            </div>

            <div>
              <p className="text-[8px] font-extrabold uppercase tracking-[0.18em] text-[#e82787]">
                Information
              </p>

              <div className="mt-3 flex flex-col gap-2 text-[9px] text-white/55">
                <Link href="/transport" className="hover:text-white">
                  Transport
                </Link>

                <Link href="/mice" className="hover:text-white">
                  MICE
                </Link>

                <Link href="/reports" className="hover:text-white">
                  Reports
                </Link>
              </div>
            </div>

            <div>
              <p className="text-[8px] font-extrabold uppercase tracking-[0.18em] text-[#e82787]">
                Need a Way Back?
              </p>

              <p className="mt-3 text-[9px] leading-5 text-white/45">
                Search the portal to find the destination, establishment,
                event, or tourism information you were looking for.
              </p>

              <Link
                href="/search"
                className="mt-3 inline-flex items-center gap-2 rounded-full bg-[#e82787] px-4 py-2 text-[8px] font-extrabold text-white transition hover:bg-[#d91d78]"
              >
                Search Portal
                <ArrowRight className="size-3" />
              </Link>
            </div>
          </div>

          <div className="mt-8 border-t border-white/10 pt-4 text-[8px] text-white/30">
            © City Government of Koronadal. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}