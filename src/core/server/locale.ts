import { ILanguageCodeEnum } from "@/gql/sdk";
import { Locale, localeConfig } from "@/locale-config";

export const getLanguageCode = (locale: Locale) => {
  return locale.toUpperCase().replace("-", "_") as ILanguageCodeEnum;
};

let locale: Locale = localeConfig.defaultLocale;

export const setLocale = (value: Locale) => {
  locale = value;
};

export const getLocale = () => {
  return locale;
};
