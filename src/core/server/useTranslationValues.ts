import { useTranslations } from "./useTranslations";
import type { FC } from "react";

type TranslationsDictionary<K extends string> = { [k in K]: string };

interface TranslationsProp<K extends string> {
  t: TranslationsDictionary<K>;
}
/**
 * Translations Function Component
 */
export type TFC<P, K extends string> = FC<P & TranslationsProp<K>>;

export const useTranslationValues = <Keys extends string>(
  translationKeys: readonly Keys[],
  namespace?: string,
) => {
  const t = useTranslations();
  const keys = namespace
    ? translationKeys.map((k) => `${namespace}.${k}`)
    : translationKeys;
  return Object.fromEntries(
    keys.map((k, idx) => [translationKeys[idx], t(k)])
  ) as { [k in (typeof translationKeys)[number]]: string };
};
