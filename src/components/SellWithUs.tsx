import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { IMG } from "@/lib/images";

export async function SellWithUs() {
  const t = await getTranslations("SellWithUs");

  return (
    <section className="bg-slate-900 py-20 text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 lg:grid-cols-2 lg:px-8 lg:items-center">
        {/* Left: testo */}
        <div>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            {t("title")}
          </h2>
          <p className="mt-4 max-w-xl text-base text-slate-300">
            {t("subtitle")}
          </p>

          <ul className="mt-8 space-y-3 text-sm">
            <li className="flex items-start gap-3">
              <span className="mt-0.5 flex h-5 w-5 flex-none items-center justify-center rounded-full bg-amber-500 text-[11px] font-bold text-white">
                ✓
              </span>
              <span className="text-slate-200">{t("bulletFree")}</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-0.5 flex h-5 w-5 flex-none items-center justify-center rounded-full bg-amber-500 text-[11px] font-bold text-white">
                ✓
              </span>
              <span className="text-slate-200">{t("bulletPremium")}</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-0.5 flex h-5 w-5 flex-none items-center justify-center rounded-full bg-amber-500 text-[11px] font-bold text-white">
                ✓
              </span>
              <span className="text-slate-200">{t("bulletNetwork")}</span>
            </li>
          </ul>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/proprietari"
              className="inline-flex h-11 items-center justify-center rounded-lg bg-amber-500 px-6 text-sm font-semibold text-white shadow-md transition-colors hover:bg-amber-600"
            >
              {t("ctaLand")}
            </Link>
            <Link
              href="/sviluppatori"
              className="inline-flex h-11 items-center justify-center rounded-lg border border-white/30 bg-white/5 px-6 text-sm font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/10"
            >
              {t("ctaPlant")}
            </Link>
          </div>
        </div>

        {/* Right: foto */}
        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl ring-1 ring-white/10 lg:aspect-[5/4]">
          <Image
            src={IMG.sellWithUs}
            alt=""
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
