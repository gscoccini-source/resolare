import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { Wordmark } from "./Wordmark";

export async function Footer() {
  const t = await getTranslations("Footer");
  const year = new Date().getFullYear();

  return (
    <footer className="mt-16 border-t border-stone-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-12 lg:px-8">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <Wordmark className="text-2xl" />
            <p className="mt-3 max-w-sm text-sm text-slate-600">{t("tagline")}</p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-slate-900">
              {t("company")}
            </h4>
            <ul className="mt-3 space-y-2 text-sm text-slate-600">
              <li>
                <Link href="/chi-siamo" className="hover:text-amber-600">
                  {t("about")}
                </Link>
              </li>
              <li>
                <Link href="/contatti" className="hover:text-amber-600">
                  {t("contact")}
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-amber-600">
                  {t("blog")}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-slate-900">
              {t("legal")}
            </h4>
            <ul className="mt-3 space-y-2 text-sm text-slate-600">
              <li>
                <Link href="/termini" className="hover:text-amber-600">
                  {t("terms")}
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-amber-600">
                  {t("privacy")}
                </Link>
              </li>
              <li>
                <Link href="/cookies" className="hover:text-amber-600">
                  {t("cookies")}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-start justify-between gap-3 border-t border-stone-200 pt-6 text-xs text-slate-500 md:flex-row md:items-center">
          <span>© {year} RESolare. {t("rights")}</span>
          <span className="text-slate-400">resolare.it</span>
        </div>
      </div>
    </footer>
  );
}
