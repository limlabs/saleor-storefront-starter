import { useI18N } from "./useI18N";
import type { FC } from "react";
import type { Locale } from "@/i18n-config";

type I18NObj<K extends string> = { [k in K]: string };

interface I18NProp<K extends string> {
    i18n: I18NObj<K>;
}

export type I18NFC<P, K extends string> = FC<P & I18NProp<K>>;

export const useI18NValues = <Keys extends string>(locale: Locale, i18nKeys: readonly Keys[], namespace?: string) => {
    const t = useI18N(locale);
    const keys = namespace ? i18nKeys.map(k => `${namespace}.${k}`) : i18nKeys;
    return Object.fromEntries(keys.map((k, idx) => [i18nKeys[idx], t(k)])) as { [k in typeof i18nKeys[number]]: string };
}