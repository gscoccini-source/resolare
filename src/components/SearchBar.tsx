"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { useRouter } from "@/i18n/navigation";

const REGIONS = [
  "Abruzzo",
  "Basilicata",
  "Calabria",
  "Campania",
  "Emilia-Romagna",
  "Friuli-Venezia Giulia",
  "Lazio",
  "Liguria",
  "Lombardia",
  "Marche",
  "Molise",
  "Piemonte",
  "Puglia",
  "Sardegna",
  "Sicilia",
  "Toscana",
  "Trentino-Alto Adige",
  "Umbria",
  "Valle d'Aosta",
  "Veneto",
];

const MW_RANGES = [
  { value: "any", labelKey: "searchAnyMW" },
  { value: "0-1", label: "< 1 MWp" },
  { value: "1-10", label: "1 – 10 MWp" },
  { value: "10-50", label: "10 – 50 MWp" },
  { value: "50+", label: "50+ MWp" },
];

export function SearchBar() {
  const t = useTranslations("Hero");
  const router = useRouter();
  const [category, setCategory] = useState("all");
  const [region, setRegion] = useState("");
  const [mwRange, setMwRange] = useState("any");
  const [surface, setSurface] = useState("all");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const params = new URLSearchParams();
    if (category !== "all") params.set("category", category);
    if (region) params.set("region", region);
    if (mwRange !== "any") params.set("mw", mwRange);
    if (surface !== "all") params.set("surface", surface);
    const query = params.toString();
    router.push(`/annunci${query ? `?${query}` : ""}`);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl bg-white p-3 shadow-2xl shadow-black/20 ring-1 ring-black/5"
    >
      <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-[1.5fr_1fr_0.9fr_0.9fr_auto]">
        <label className="flex flex-col gap-1 rounded-lg px-3 py-2 hover:bg-stone-50">
          <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-500">
            {t("searchTitle")}
          </span>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="border-0 bg-transparent p-0 text-sm font-medium text-slate-900 focus:ring-0 focus:outline-none"
          >
            <option value="all">{t("searchCategoryAll")}</option>
            <option value="area">{t("searchCategoryArea")}</option>
            <option value="rtb">{t("searchCategoryRtb")}</option>
            <option value="cod">{t("searchCategoryCod")}</option>
            <option value="operating">{t("searchCategoryOperating")}</option>
            <option value="revamping">{t("searchCategoryRevamping")}</option>
          </select>
        </label>

        <label className="flex flex-col gap-1 rounded-lg px-3 py-2 hover:bg-stone-50 md:border-l md:border-stone-200">
          <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-500">
            Regione
          </span>
          <select
            value={region}
            onChange={(e) => setRegion(e.target.value)}
            className="border-0 bg-transparent p-0 text-sm font-medium text-slate-900 focus:ring-0 focus:outline-none"
          >
            <option value="">{t("searchRegion")}</option>
            {REGIONS.map((r) => (
              <option key={r} value={r}>
                {r}
              </option>
            ))}
          </select>
        </label>

        <label className="flex flex-col gap-1 rounded-lg px-3 py-2 hover:bg-stone-50 md:border-l md:border-stone-200">
          <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-500">
            {t("searchMW")}
          </span>
          <select
            value={mwRange}
            onChange={(e) => setMwRange(e.target.value)}
            className="border-0 bg-transparent p-0 text-sm font-medium text-slate-900 focus:ring-0 focus:outline-none"
          >
            {MW_RANGES.map((r) => (
              <option key={r.value} value={r.value}>
                {"label" in r ? r.label : t(r.labelKey)}
              </option>
            ))}
          </select>
        </label>

        <label className="flex flex-col gap-1 rounded-lg px-3 py-2 hover:bg-stone-50 md:border-l md:border-stone-200">
          <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-500">
            {t("searchSurface")}
          </span>
          <select
            value={surface}
            onChange={(e) => setSurface(e.target.value)}
            className="border-0 bg-transparent p-0 text-sm font-medium text-slate-900 focus:ring-0 focus:outline-none"
          >
            <option value="all">{t("searchSurfaceAll")}</option>
            <option value="roof">{t("searchSurfaceRoof")}</option>
            <option value="ground">{t("searchSurfaceGround")}</option>
            <option value="bess">{t("searchSurfaceBess")}</option>
          </select>
        </label>

        <button
          type="submit"
          className="flex h-12 items-center justify-center gap-2 rounded-xl bg-amber-500 px-6 text-sm font-bold text-white shadow-md transition-colors hover:bg-amber-600 md:h-auto"
        >
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M11 4a7 7 0 100 14 7 7 0 000-14zM21 21l-4.35-4.35" />
          </svg>
          {t("searchButton")}
        </button>
      </div>
    </form>
  );
}
