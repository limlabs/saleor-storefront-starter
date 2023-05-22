import { useHook } from "./useHook";
import { getTranslations } from "./getTranslations";
import type { Locale } from "@/locale-config";

export const useTranslations = (locale: Locale) => {
  return useHook("useTranslations", getTranslations(locale));
};
