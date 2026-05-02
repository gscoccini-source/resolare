import { getTranslations, setRequestLocale } from "next-intl/server";

export default async function ListingsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("Listings");

  return (
    <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
      <header className="border-b border-stone-200 pb-8">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          {t("pageTitle")}
        </h1>
        <p className="mt-3 max-w-2xl text-base text-slate-600">
          {t("pageSubtitle")}
        </p>
      </header>

      <div className="mt-10 rounded-2xl border-2 border-dashed border-stone-300 bg-white p-12 text-center">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-amber-100 text-3xl">
          ☀️
        </div>
        <p className="mt-4 mx-auto max-w-md text-sm text-slate-600">
          {t("emptyState")}
        </p>
      </div>
    </div>
  );
}
