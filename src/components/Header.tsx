import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { Wordmark } from "./Wordmark";
import { LocaleSwitcher } from "./LocaleSwitcher";

export async function Header() {
  const t = await getTranslations("Header");

  return (
    <header className="sticky top-0 z-50 border-b border-stone-200 bg-stone-50/85 backdrop-blur-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-4 py-3 lg:px-8">
        <Link
          href="/"
          className="flex items-center gap-2 text-xl"
          aria-label="RESolare"
        >
          <Wordmark className="text-2xl" />
        </Link>

        <nav className="hidden items-center gap-6 text-sm font-medium text-slate-700 md:flex">
          <Link
            href="/annunci"
            className="hover:text-amber-600 transition-colors"
          >
            {t("navAnnunci")}
          </Link>
          <Link
            href="/proprietari"
            className="hover:text-amber-600 transition-colors"
          >
            {t("navTerreni")}
          </Link>
          <Link
            href="/sviluppatori"
            className="hover:text-amber-600 transition-colors"
          >
            {t("navSviluppatori")}
          </Link>
        </nav>

        <div className="flex items-center gap-3">
          <LocaleSwitcher />
          <Link
            href="/accedi"
            className="hidden text-sm font-medium text-slate-700 hover:text-amber-600 md:inline-block"
          >
            {t("signIn")}
          </Link>
          <Link
            href="/registrati"
            className="rounded-lg bg-slate-900 px-4 py-2 text-sm font-medium text-white shadow-sm transition-colors hover:bg-slate-700"
          >
            {t("signUp")}
          </Link>
        </div>
      </div>
    </header>
  );
}
