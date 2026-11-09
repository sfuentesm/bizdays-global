import type { CountryCode, Locale } from "@/types";

export interface OfficialHolidaySource {
  authority: string;
  url: string;
  scope: string;
  reviewNote: string;
}

interface LocalizedSourceText {
  scope: Record<Locale, string>;
  reviewNote: Record<Locale, string>;
}

const sourceText: Record<string, LocalizedSourceText> = {
  ES: {
    scope: {
      en: "Employment-law basis and annual labour-calendar publications.",
      es: "Base legal laboral y publicaciones anuales del calendario laboral.",
    },
    reviewNote: {
      en: "Annual national and autonomous-community publications still need to be checked before using this as a verification record.",
      es: "Las publicaciones anuales nacionales y autonómicas deben comprobarse antes de usar esto como registro de verificación.",
    },
  },
  US: {
    scope: {
      en: "Federal holidays for federal employees; state and private-employer calendars may differ.",
      es: "Festivos federales para empleados federales; los calendarios estatales y privados pueden diferir.",
    },
    reviewNote: {
      en: "This is not a complete state or private-sector calendar.",
      es: "No es un calendario completo para estados ni para el sector privado.",
    },
  },
  GB: {
    scope: {
      en: "Bank holidays for England and Wales, Scotland, and Northern Ireland.",
      es: "Festivos bancarios de Inglaterra y Gales, Escocia e Irlanda del Norte.",
    },
    reviewNote: {
      en: "The regional calendars must be compared with the country page's output.",
      es: "Los calendarios regionales deben compararse con los resultados de la página del país.",
    },
  },
  MX: {
    scope: {
      en: "Federal labour-law basis for mandatory rest days.",
      es: "Base federal de la legislación laboral para los días de descanso obligatorio.",
    },
    reviewNote: {
      en: "The annual list and any electoral or local holidays need a separate review.",
      es: "La lista anual y cualquier festivo electoral o local requieren una revisión separada.",
    },
  },
  FR: {
    scope: {
      en: "Legal holidays, including general, Alsace-Moselle, and overseas distinctions.",
      es: "Festivos legales, incluidas las diferencias generales, de Alsacia-Mosela y territoriales.",
    },
    reviewNote: {
      en: "Regional and professional holidays may require additional sources.",
      es: "Los festivos regionales y profesionales pueden requerir fuentes adicionales.",
    },
  },
  DE: {
    scope: {
      en: "German working-time law and the federal/state distinction for public holidays.",
      es: "Legislación alemana sobre tiempo de trabajo y diferencia entre festivos federales y regionales.",
    },
    reviewNote: {
      en: "Germany has state-specific holidays; a state calendar must be selected before claiming full coverage.",
      es: "Alemania tiene festivos específicos por estado; hay que seleccionar un calendario estatal antes de afirmar cobertura completa.",
    },
  },
  IT: {
    scope: {
      en: "National legal basis for public holidays.",
      es: "Base legal nacional de los festivos públicos.",
    },
    reviewNote: {
      en: "Local patron-saint holidays and regional rules need separate review.",
      es: "Los festivos patronales locales y las reglas regionales requieren una revisión separada.",
    },
  },
  BR: {
    scope: {
      en: "Federal legal basis for national holidays.",
      es: "Base legal federal de los festivos nacionales.",
    },
    reviewNote: {
      en: "State and municipal holidays are outside this national source and need separate review.",
      es: "Los festivos estatales y municipales quedan fuera de esta fuente nacional y requieren una revisión separada.",
    },
  },
};

const sources: Record<string, OfficialHolidaySource[]> = {
  ES: [
    {
      authority: "Boletín Oficial del Estado (BOE)",
      url: "https://www.boe.es/buscar/act.php?id=BOE-A-2015-11430",
      scope: sourceText.ES.scope.en,
      reviewNote: sourceText.ES.reviewNote.en,
    },
  ],
  US: [
    {
      authority: "U.S. Office of Personnel Management",
      url: "https://www.opm.gov/policy-data-oversight/pay-leave/federal-holidays/",
      scope: sourceText.US.scope.en,
      reviewNote: sourceText.US.reviewNote.en,
    },
  ],
  GB: [
    {
      authority: "GOV.UK",
      url: "https://www.gov.uk/bank-holidays",
      scope: sourceText.GB.scope.en,
      reviewNote: sourceText.GB.reviewNote.en,
    },
  ],
  MX: [
    {
      authority: "Cámara de Diputados de México",
      url: "https://www.diputados.gob.mx/LeyesBiblio/pdf/LFT.pdf",
      scope: sourceText.MX.scope.en,
      reviewNote: sourceText.MX.reviewNote.en,
    },
  ],
  FR: [
    {
      authority: "Service-Public.fr",
      url: "https://www.service-public.fr/particuliers/vosdroits/F2405?lang=en",
      scope: sourceText.FR.scope.en,
      reviewNote: sourceText.FR.reviewNote.en,
    },
  ],
  DE: [
    {
      authority: "Gesetze im Internet",
      url: "https://www.gesetze-im-internet.de/arbzg/__9.html",
      scope: sourceText.DE.scope.en,
      reviewNote: sourceText.DE.reviewNote.en,
    },
  ],
  IT: [
    {
      authority: "Normattiva",
      url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:legge:1949-05-27;260",
      scope: sourceText.IT.scope.en,
      reviewNote: sourceText.IT.reviewNote.en,
    },
  ],
  BR: [
    {
      authority: "Presidência da República — Planalto",
      url: "https://www.planalto.gov.br/ccivil_03/leis/l0662.htm",
      scope: sourceText.BR.scope.en,
      reviewNote: sourceText.BR.reviewNote.en,
    },
  ],
};

export function getOfficialHolidaySources(
  countryCode: CountryCode,
  locale: Locale
): OfficialHolidaySource[] {
  return (sources[countryCode.toUpperCase()] ?? []).map((source) => ({
    ...source,
    scope: sourceText[countryCode.toUpperCase()]?.scope[locale] ?? source.scope,
    reviewNote:
      sourceText[countryCode.toUpperCase()]?.reviewNote[locale] ??
      source.reviewNote,
  }));
}
