import { format } from "date-fns";

import { calculateEndDate } from "@/lib/business-days";
import type { Locale } from "@/types";

interface CountryPlanningGuideProps {
  locale: Locale;
  countryCode: string;
  countryName: string;
  year: number;
  holidayCount: number;
}

export function CountryPlanningGuide({
  locale,
  countryCode,
  countryName,
  year,
  holidayCount,
}: CountryPlanningGuideProps) {
  const isSpanish = locale === "es";
  const startDate = new Date();
  const example = calculateEndDate({
    startDate,
    businessDays: 10,
    countryCode,
    includeSaturdays: false,
  });
  const exampleStart = format(startDate, "yyyy-MM-dd");
  const exampleEnd = format(example.endDate, "yyyy-MM-dd");

  return (
    <section className="rounded-xl border border-grey-200 bg-grey-50 p-6 space-y-5">
      <div>
        <h2 className="text-lg font-semibold text-grey-900">
          {isSpanish
            ? `Planificar plazos en ${countryName}`
            : `Planning deadlines in ${countryName}`}
        </h2>
        <p className="mt-2 text-sm leading-7 text-grey-600">
          {isSpanish
            ? `Esta página combina una calculadora interactiva con el calendario disponible para ${countryName} en ${year}. Es útil cuando un plazo se expresa en días laborables y no en días naturales.`
            : `This page combines an interactive calculator with the available ${year} calendar for ${countryName}. It is useful when a deadline is expressed in business days rather than calendar days.`}
        </p>
      </div>

      <div className="grid gap-3 sm:grid-cols-3">
        <div className="rounded-lg bg-white p-4">
          <p className="text-xs font-medium uppercase tracking-wide text-grey-500">
            {isSpanish ? "Calendario" : "Calendar"}
          </p>
          <p className="mt-1 text-lg font-bold text-grey-900">{year}</p>
        </div>
        <div className="rounded-lg bg-white p-4">
          <p className="text-xs font-medium uppercase tracking-wide text-grey-500">
            {isSpanish ? "Festivos cargados" : "Holidays loaded"}
          </p>
          <p className="mt-1 text-lg font-bold text-grey-900">{holidayCount}</p>
        </div>
        <div className="rounded-lg bg-white p-4">
          <p className="text-xs font-medium uppercase tracking-wide text-grey-500">
            {isSpanish ? "Regla inicial" : "Default rule"}
          </p>
          <p className="mt-1 text-lg font-bold text-grey-900">
            {isSpanish ? "Lun–Vie" : "Mon–Fri"}
          </p>
        </div>
      </div>

      <div className="rounded-lg border border-primary-100 bg-white p-4">
        <h3 className="font-semibold text-grey-900">
          {isSpanish ? "Ejemplo reproducible" : "Reproducible example"}
        </h3>
        <p className="mt-2 text-sm leading-7 text-grey-600">
          {isSpanish
            ? `Con la configuración predeterminada, sumar 10 días laborables desde ${exampleStart} produce ${exampleEnd}. El resultado excluye fines de semana y los festivos que coincidan con el intervalo.`
            : `With the default settings, adding 10 business days from ${exampleStart} produces ${exampleEnd}. The result excludes weekends and holidays that fall within the interval.`}
        </p>
      </div>

      <div className="text-sm leading-7 text-grey-600">
        <h3 className="font-semibold text-grey-900">
          {isSpanish ? "Antes de usar el resultado" : "Before using the result"}
        </h3>
        <ul className="mt-2 list-disc space-y-1 pl-5">
          <li>
            {isSpanish
              ? "Confirma si necesitas un calendario nacional, regional o sectorial."
              : "Confirm whether you need a national, regional, or industry calendar."}
          </li>
          <li>
            {isSpanish
              ? "Comprueba si tu organización considera laborables los sábados."
              : "Check whether your organization treats Saturdays as working days."}
          </li>
          <li>
            {isSpanish
              ? "Para contratos, banca o cumplimiento, contrasta la fecha con la autoridad aplicable."
              : "For contracts, banking, or compliance, verify the date with the relevant authority."}
          </li>
        </ul>
      </div>
    </section>
  );
}
