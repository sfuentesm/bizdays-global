import Link from "next/link";
import type { Locale } from "@/types";

interface EditorialTrustProps {
  locale: Locale;
}

export function EditorialTrust({ locale }: EditorialTrustProps) {
  const isSpanish = locale === "es";

  return (
    <section className="rounded-3xl border border-primary-100 bg-primary-50/60 p-6 sm:p-8">
      <h2 className="text-xl font-bold tracking-tight text-grey-900">
        {isSpanish ? "Quién mantiene estos datos" : "Who maintains this information"}
      </h2>
      <p className="mt-3 text-sm leading-7 text-grey-700 sm:text-base">
        {isSpanish
          ? "BizDays Global está desarrollado y mantenido por Sergio Fuentes, ingeniero de software titulado con experiencia profesional en desarrollo de aplicaciones. La aplicación usa la librería open source date-holidays para obtener los calendarios disponibles por país."
          : "BizDays Global is developed and maintained by Sergio Fuentes, a qualified software engineer with professional experience building applications. The application uses the open-source date-holidays library for the country calendars it supports."}
      </p>
      <p className="mt-3 text-sm leading-7 text-grey-700 sm:text-base">
        {isSpanish
          ? "No hacemos una comprobación manual independiente de cada fecha. Los calendarios pueden omitir festivos regionales, sectoriales o cambios recientes; por eso el resultado es una ayuda de planificación y no sustituye a la autoridad local."
          : "We do not independently verify every date manually. Calendars may omit regional or industry holidays, or miss recent changes, so the result is a planning aid and does not replace the relevant local authority."}
      </p>
      <div className="mt-5 flex flex-wrap gap-3 text-sm">
        <Link
          href={`/${locale}/about`}
          className="font-semibold text-primary-700 underline underline-offset-4"
        >
          {isSpanish ? "Conoce nuestra metodología" : "Read our methodology"}
        </Link>
        <a
          href="https://github.com/kodiecode/date-holidays"
          rel="noopener noreferrer"
          target="_blank"
          className="font-semibold text-primary-700 underline underline-offset-4"
        >
          {isSpanish ? "Ver la fuente de datos" : "View the data source"}
        </a>
      </div>
    </section>
  );
}
