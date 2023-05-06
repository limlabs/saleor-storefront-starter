import { i18n } from "./i18n-config";;

export const dictionaries = Object.fromEntries(
    Object.keys(i18n.locales).map(
        (key) => [key, async () => (await import(`@/dictionaries/${key}.json`)).default]));
