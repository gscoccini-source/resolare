import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations();

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-br from-amber-50 via-stone-50 to-emerald-50">
        <div className="pointer-events-none absolute -top-32 -right-32 h-96 w-96 rounded-full bg-amber-200/40 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-emerald-200/40 blur-3xl" />
        <div className="relative mx-auto flex max-w-7xl flex-col items-center px-4 py-20 text-center lg:px-8 lg:py-28">
          <span className="inline-block rounded-full border border-amber-300/60 bg-amber-100/60 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-amber-800">
            {t("Hero.tagline")}
          </span>
          <h1 className="mt-5 max-w-4xl text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
            {t("Hero.title")}
          </h1>
          <p className="mt-5 max-w-2xl text-base text-slate-600 sm:text-lg">
            {t("Hero.subtitle")}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/annunci"
              className="inline-flex h-12 items-center justify-center rounded-lg bg-slate-900 px-6 text-sm font-semibold text-white shadow-sm transition-all hover:bg-slate-700 hover:shadow"
            >
              {t("Hero.ctaPrimary")}
            </Link>
            <Link
              href="/pubblica"
              className="inline-flex h-12 items-center justify-center rounded-lg border border-slate-300 bg-white px-6 text-sm font-semibold text-slate-900 shadow-sm transition-all hover:border-slate-400 hover:shadow"
            >
              {t("Hero.ctaSecondary")}
            </Link>
          </div>
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="mx-auto max-w-7xl px-4 py-20 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            {t("Categories.sectionTitle")}
          </h2>
          <p className="mt-4 text-base text-slate-600">
            {t("Categories.sectionSubtitle")}
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {/* RTB ATTIVO */}
          <article className="group relative flex flex-col rounded-2xl border-2 border-amber-300 bg-white p-6 shadow-sm transition-all hover:shadow-md">
            <div className="flex items-center justify-between">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-100 text-2xl">
                ⚡
              </div>
              <span className="rounded-full bg-emerald-100 px-2.5 py-1 text-xs font-semibold text-emerald-800">
                {t("Categories.statusActive")}
              </span>
            </div>
            <h3 className="mt-5 text-lg font-semibold text-slate-900">
              {t("Categories.rtbTitle")}
            </h3>
            <p className="mt-2 flex-1 text-sm text-slate-600">
              {t("Categories.rtbDescription")}
            </p>
            <Link
              href="/annunci"
              className="mt-5 inline-flex items-center text-sm font-semibold text-amber-700 transition-colors group-hover:text-amber-800"
            >
              {t("Categories.rtbCta")} →
            </Link>
          </article>

          {/* GREENFIELD WIP */}
          <article className="relative flex flex-col rounded-2xl border border-stone-200 bg-white p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-stone-100 text-2xl grayscale">
                🌾
              </div>
              <span className="rounded-full bg-stone-100 px-2.5 py-1 text-xs font-semibold text-stone-600">
                {t("Categories.statusUpcoming")}
              </span>
            </div>
            <h3 className="mt-5 text-lg font-semibold text-slate-700">
              {t("Categories.greenfieldTitle")}
            </h3>
            <p className="mt-2 flex-1 text-sm text-slate-500">
              {t("Categories.greenfieldDescription")}
            </p>
            <span className="mt-5 text-sm font-medium text-stone-400">
              {t("Categories.comingSoon")}
            </span>
          </article>

          {/* PLANTS WIP */}
          <article className="relative flex flex-col rounded-2xl border border-stone-200 bg-white p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-stone-100 text-2xl grayscale">
                🔋
              </div>
              <span className="rounded-full bg-stone-100 px-2.5 py-1 text-xs font-semibold text-stone-600">
                {t("Categories.statusUpcoming")}
              </span>
            </div>
            <h3 className="mt-5 text-lg font-semibold text-slate-700">
              {t("Categories.plantsTitle")}
            </h3>
            <p className="mt-2 flex-1 text-sm text-slate-500">
              {t("Categories.plantsDescription")}
            </p>
            <span className="mt-5 text-sm font-medium text-stone-400">
              {t("Categories.comingSoon")}
            </span>
          </article>
        </div>
      </section>

      {/* STAKEHOLDERS */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <h2 className="text-center text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            {t("Stakeholders.sectionTitle")}
          </h2>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {/* OWNER */}
            <div className="flex flex-col rounded-2xl border border-stone-200 bg-stone-50 p-7">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-100 text-emerald-700">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
              <h3 className="mt-4 text-xl font-semibold text-slate-900">
                {t("Stakeholders.ownerTitle")}
              </h3>
              <ul className="mt-4 flex-1 space-y-2.5 text-sm text-slate-700">
                <li className="flex gap-2">
                  <span className="text-emerald-600">✓</span>
                  {t("Stakeholders.ownerBullet1")}
                </li>
                <li className="flex gap-2">
                  <span className="text-emerald-600">✓</span>
                  {t("Stakeholders.ownerBullet2")}
                </li>
                <li className="flex gap-2">
                  <span className="text-emerald-600">✓</span>
                  {t("Stakeholders.ownerBullet3")}
                </li>
              </ul>
              <Link
                href="/proprietari"
                className="mt-6 inline-flex items-center text-sm font-semibold text-emerald-700 hover:text-emerald-800"
              >
                {t("Stakeholders.ownerCta")} →
              </Link>
            </div>

            {/* DEVELOPER */}
            <div className="flex flex-col rounded-2xl border border-stone-200 bg-stone-50 p-7">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-amber-100 text-amber-700">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M11 4a7 7 0 100 14 7 7 0 000-14zM21 21l-4.35-4.35" />
                </svg>
              </div>
              <h3 className="mt-4 text-xl font-semibold text-slate-900">
                {t("Stakeholders.developerTitle")}
              </h3>
              <ul className="mt-4 flex-1 space-y-2.5 text-sm text-slate-700">
                <li className="flex gap-2">
                  <span className="text-amber-600">✓</span>
                  {t("Stakeholders.developerBullet1")}
                </li>
                <li className="flex gap-2">
                  <span className="text-amber-600">✓</span>
                  {t("Stakeholders.developerBullet2")}
                </li>
                <li className="flex gap-2">
                  <span className="text-amber-600">✓</span>
                  {t("Stakeholders.developerBullet3")}
                </li>
              </ul>
              <Link
                href="/sviluppatori"
                className="mt-6 inline-flex items-center text-sm font-semibold text-amber-700 hover:text-amber-800"
              >
                {t("Stakeholders.developerCta")} →
              </Link>
            </div>

            {/* BUYER */}
            <div className="flex flex-col rounded-2xl border border-stone-200 bg-stone-50 p-7">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-sky-100 text-sky-700">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 3v18h18M7 14l3-3 4 4 5-5" />
                </svg>
              </div>
              <h3 className="mt-4 text-xl font-semibold text-slate-900">
                {t("Stakeholders.buyerTitle")}
              </h3>
              <ul className="mt-4 flex-1 space-y-2.5 text-sm text-slate-700">
                <li className="flex gap-2">
                  <span className="text-sky-600">✓</span>
                  {t("Stakeholders.buyerBullet1")}
                </li>
                <li className="flex gap-2">
                  <span className="text-sky-600">✓</span>
                  {t("Stakeholders.buyerBullet2")}
                </li>
                <li className="flex gap-2">
                  <span className="text-sky-600">✓</span>
                  {t("Stakeholders.buyerBullet3")}
                </li>
              </ul>
              <Link
                href="/annunci"
                className="mt-6 inline-flex items-center text-sm font-semibold text-sky-700 hover:text-sky-800"
              >
                {t("Stakeholders.buyerCta")} →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="mx-auto max-w-7xl px-4 py-20 lg:px-8">
        <h2 className="text-center text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          {t("HowItWorks.sectionTitle")}
        </h2>
        <ol className="mt-12 grid gap-8 md:grid-cols-3">
          <li className="flex flex-col">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-900 text-sm font-bold text-white">
              1
            </span>
            <h3 className="mt-4 text-lg font-semibold text-slate-900">
              {t("HowItWorks.step1Title")}
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              {t("HowItWorks.step1Description")}
            </p>
          </li>
          <li className="flex flex-col">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-900 text-sm font-bold text-white">
              2
            </span>
            <h3 className="mt-4 text-lg font-semibold text-slate-900">
              {t("HowItWorks.step2Title")}
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              {t("HowItWorks.step2Description")}
            </p>
          </li>
          <li className="flex flex-col">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-900 text-sm font-bold text-white">
              3
            </span>
            <h3 className="mt-4 text-lg font-semibold text-slate-900">
              {t("HowItWorks.step3Title")}
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              {t("HowItWorks.step3Description")}
            </p>
          </li>
        </ol>
      </section>
    </>
  );
}
