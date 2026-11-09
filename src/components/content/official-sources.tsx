import { getOfficialHolidaySources } from "@/lib/official-holiday-sources";
import type { CountryCode, Locale } from "@/types";

interface OfficialSourcesProps {
  countryCode: CountryCode;
  locale: Locale;
}

export function OfficialSources({
  countryCode,
  locale,
}: OfficialSourcesProps) {
  const isSpanish = locale === "es";
  const sources = getOfficialHolidaySources(countryCode, locale);

  return (
    <section className="rounded-xl border border-amber-200 bg-amber-50 p-6">
      <h2 className="text-lg font-semibold text-grey-900">
        {isSpanish
          ? "Fuentes oficiales propuestas"
          : "Proposed official sources"}
      </h2>
      <p className="mt-2 text-sm leading-7 text-grey-700">
        {isSpanish
          ? "Estas son las fuentes oficiales propuestas para revisar el calendario. Todavía no se han usado para afirmar que los registros mostrados estén verificados manualmente."
          : "These are the proposed official sources for reviewing the calendar. They have not yet been used to claim that the displayed records were manually verified."}
      </p>
      <div className="mt-4 space-y-4">
        {sources.map((source) => (
          <div key={source.url} className="rounded-lg bg-white p-4">
            <a
              href={source.url}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-primary-700 underline underline-offset-4"
            >
              {source.authority}
            </a>
            <p className="mt-2 text-sm leading-6 text-grey-600">
              <span className="font-medium text-grey-900">
                {isSpanish ? "Alcance:" : "Scope:"}
              </span>{" "}
              {source.scope}
            </p>
            <p className="mt-2 text-xs leading-5 text-grey-500">
              <span className="font-medium text-grey-900">
                {isSpanish ? "Pendiente:" : "Pending:"}
              </span>{" "}
              {source.reviewNote}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
