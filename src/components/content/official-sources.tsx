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
          ? "Estas son las fuentes oficiales de referencia utilizadas para revisar el calendario mostrado. La revisión confirma el alcance de cada fuente, pero no convierte automáticamente todos los festivos regionales o sectoriales en parte del calendario nacional."
          : "These are the official reference sources used to review the displayed calendar. The review confirms each source's scope, but it does not automatically make every regional or industry holiday part of the national calendar."}
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
                {isSpanish ? "Revisión:" : "Review:"}
              </span>{" "}
              {isSpanish
                ? `Sergio Fuentes revisó esta referencia el ${source.reviewedAt}. ${source.reviewNote}`
                : `Sergio Fuentes reviewed this reference on ${source.reviewedAt}. ${source.reviewNote}`}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
