import { Locale } from "@/locale-config";

import enUsTranlations from "@/dictionaries/en-us.json";
import esMxTranslations from "@/dictionaries/es-mx.json";
import frFrTranslations from "@/dictionaries/fr-fr.json";
import itItTranslations from "@/dictionaries/it-it.json";

type TranslationsValues = Record<string, Record<string, string>>;

const translationsMap: Record<Locale, TranslationsValues> = {
  "en-us": enUsTranlations,
  "es-mx": esMxTranslations,
  "fr-fr": frFrTranslations,
  "it-it": itItTranslations,
};

let requestLocale: Locale;

export const setRequestLocale = (locale: Locale) => {
  requestLocale = locale;
};

export const getRequestLocale = () => {
  return requestLocale;
};

export const useTranslations = () => {
  const currentLocale = getRequestLocale();
  return translationsMap[currentLocale];
};
