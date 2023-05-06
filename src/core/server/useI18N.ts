import { useHook } from "./useHook";
import { getI18N } from "./getI18N";
import type { Locale } from "@/i18n-config";

export const useI18N = (locale: Locale) => {
    return useHook('useI18N', getI18N(locale));
}