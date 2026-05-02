import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { IMG } from "@/lib/images";

type StatusKey = "RTB" | "Operating" | "Greenfield" | "Permitting";

const STATUS_STYLES: Record<StatusKey, string> = {
  RTB: "bg-amber-100 text-amber-900",
  Operating: "bg-emerald-100 text-emerald-900",
  Greenfield: "bg-stone-200 text-stone-800",
  Permitting: "bg-sky-100 text-sky-900",
};

const ITEMS = [
  { id: "p1", img: IMG.listingAgriPV, status: "RTB" as StatusKey },
  { id: "p2", img: IMG.listingRooftop, status: "Operating" as StatusKey },
  { id: "p3", img: IMG.listingGround, status: "RTB" as StatusKey },
  { id: "p4", img: IMG.listingResidential, status: "Operating" as StatusKey },
  { id: "p5", img: IMG.listingGreenfield, status: "Greenfield" as StatusKey },
  { id: "p6", img: IMG.listingUtility, status: "Permitting" as StatusKey },
];

export async function FeaturedListings() {
  const t = await getTranslations("Featured");

  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              {t("sectionTitle")}
            </h2>
            <p className="mt-3 text-base text-slate-600">
              {t("sectionSubtitle")}
            </p>
          </div>
          <Link
            href="/annunci"
            className="hidden whitespace-nowrap text-sm font-semibold text-amber-700 hover:text-amber-800 md:inline-flex"
          >
            {t("viewAll")} →
          </Link>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {ITEMS.map((item) => {
            const title = t(`items.${item.id}Title`);
            const region = t(`items.${item.id}Region`);
            const power = t(`items.${item.id}Power`);
            const price = t(`items.${item.id}Price`);
            const status = t(`items.${item.id}Status`);
            return (
              <Link
                key={item.id}
                href="/annunci"
                className="group flex flex-col overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-lg"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-stone-100">
                  <Image
                    src={item.img}
                    alt={title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <span
                    className={`absolute left-3 top-3 rounded-full px-2.5 py-1 text-xs font-semibold ${STATUS_STYLES[item.status]}`}
                  >
                    {status}
                  </span>
                  <span className="absolute right-3 top-3 rounded-full bg-black/60 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-white backdrop-blur-sm">
                    {t("exampleBadge")}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="text-base font-semibold text-slate-900 group-hover:text-amber-700">
                    {title}
                  </h3>
                  <div className="mt-2 flex items-center gap-1.5 text-sm text-slate-500">
                    <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a2 2 0 01-2.828 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    {region}
                  </div>
                  <div className="mt-4 flex items-end justify-between border-t border-stone-100 pt-4">
                    <div>
                      <div className="text-[10px] font-semibold uppercase tracking-wider text-slate-500">
                        Potenza
                      </div>
                      <div className="text-sm font-bold text-slate-900">
                        {power}
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-[10px] font-semibold uppercase tracking-wider text-slate-500">
                        Prezzo
                      </div>
                      <div className="text-sm font-bold text-amber-700">
                        {price}
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        <div className="mt-10 text-center md:hidden">
          <Link
            href="/annunci"
            className="inline-flex items-center text-sm font-semibold text-amber-700 hover:text-amber-800"
          >
            {t("viewAll")} →
          </Link>
        </div>
      </div>
    </section>
  );
}
