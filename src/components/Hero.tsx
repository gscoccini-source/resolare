import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { IMG } from "@/lib/images";
import { SearchBar } from "./SearchBar";

export async function Hero() {
  const t = await getTranslations("Hero");

  return (
    <section className="relative overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src={IMG.heroBackground}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        {/* Overlay scuro per leggibilità del testo */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-900/65 to-slate-900/80" />
      </div>

      <div className="relative mx-auto flex max-w-7xl flex-col items-center px-4 pt-20 pb-16 text-center text-white lg:px-8 lg:pt-28 lg:pb-24">
        <span className="inline-block rounded-full border border-amber-300/40 bg-amber-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-amber-300 backdrop-blur-sm">
          {t("tagline")}
        </span>
        <h1 className="mt-5 max-w-4xl text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
          {t("title")}
        </h1>
        <p className="mt-5 max-w-2xl text-base text-slate-200 sm:text-lg">
          {t("subtitle")}
        </p>

        {/* Search bar */}
        <div className="mt-10 w-full max-w-4xl">
          <SearchBar />
        </div>

        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <Link
            href="/annunci"
            className="inline-flex h-11 items-center justify-center rounded-lg bg-white/10 px-5 text-sm font-semibold text-white ring-1 ring-white/30 backdrop-blur-sm transition-colors hover:bg-white/20"
          >
            {t("ctaPrimary")}
          </Link>
          <Link
            href="/pubblica"
            className="inline-flex h-11 items-center justify-center rounded-lg bg-amber-500 px-5 text-sm font-semibold text-white shadow-md transition-colors hover:bg-amber-600"
          >
            {t("ctaSecondary")}
          </Link>
        </div>
      </div>
    </section>
  );
}
