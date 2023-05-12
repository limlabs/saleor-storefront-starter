import { localeConfig } from "./locale-config";;

export const dictionaries = Object.fromEntries(
    Object.keys(localeConfig.locales).map(
        (key) => [key, async () => (await import(`@/dictionaries/${key}.json`)).default]));
