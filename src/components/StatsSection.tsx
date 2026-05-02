import { getTranslations } from "next-intl/server";

export async function StatsSection() {
  const t = await getTranslations("Stats");

  const metrics = [
    { id: 1, label: t("metric1Label") },
    { id: 2, label: t("metric2Label") },
    { id: 3, label: t("metric3Label") },
    { id: 4, label: t("metric4Label") },
  ];

  return (
    <section className="border-y border-stone-200 bg-stone-50 py-16">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="text-center">
          <span className="inline-block rounded-full border border-amber-300/60 bg-amber-100/60 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-amber-800">
            {t("sectionEyebrow")}
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            {t("sectionTitle")}
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-slate-600">
            {t("sectionSubtitle")}
          </p>
        </div>

        <dl className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {metrics.map((m) => (
            <div
              key={m.id}
              className="rounded-2xl border border-stone-200 bg-white p-6 text-center shadow-sm"
            >
              <dt className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                {m.label}
              </dt>
              <dd className="mt-3 text-2xl font-bold text-slate-300">
                {t("comingSoon")}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
