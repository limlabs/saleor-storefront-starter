import { FC } from "react";

import enUsTranlations from "@/dictionaries/en-us.json";
import esMxTranslations from "@/dictionaries/es-mx.json";
import frFrTranslations from "@/dictionaries/fr-fr.json";
import itItTranslations from "@/dictionaries/it-it.json";
import { Locale } from "@/locale-config";

export type TranslationKeyPrimary = keyof typeof enUsTranlations;
export type TranslationKeySecondary =
  | keyof (typeof enUsTranlations)["Home"]
  | keyof (typeof enUsTranlations)["Gallery"]
  | keyof (typeof enUsTranlations)["header"]
  | keyof (typeof enUsTranlations)["login"]
  | keyof (typeof enUsTranlations)["menu"]
  | keyof (typeof enUsTranlations)["metadata"]
  | keyof (typeof enUsTranlations)["allProducts"]
  | keyof (typeof enUsTranlations)["component"];

export type TranslationKey =
  `${TranslationKeyPrimary}.${TranslationKeySecondary}`;

type TranslationsDictionary = Partial<
  Record<
    TranslationKeyPrimary,
    Partial<Record<TranslationKeySecondary, string>>
  >
>;

const translationsMap: Record<Locale, TranslationsDictionary> = {
  "en-us": enUsTranlations,
  "es-mx": esMxTranslations,
  "fr-fr": frFrTranslations,
  "it-it": itItTranslations,
};

interface ServerTranslationProps {
  t: TranslationKey;
  locale: Locale;
}

export const ServerTranslation: FC<ServerTranslationProps> = ({
  t,
  locale,
}) => {
  const getTranslation = (
    translations: TranslationsDictionary,
    key: TranslationKey
  ): string => {
    const keys = key.split(".");
    let currentTranslation: any = translations;

    for (const key of keys) {
      if (currentTranslation[key]) {
        currentTranslation = currentTranslation[key as TranslationKeySecondary];
      } else {
        return key;
      }
    }

    return typeof currentTranslation === "string" ? currentTranslation : key;
  };

  const translations = translationsMap[locale as Locale];

  if (!translations) {
    return <>{t}</>; // if the locale is not available, return the key
  }

  return <>{getTranslation(translations, t)}</>;
};
