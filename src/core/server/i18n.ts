import { cache } from 'react';

const config = {
    'en-us': {
        name: "English 🇺🇸",
        dict: 'en-us.json'
    },
    'es-mx': {
        name: "Spanish 🇲🇽",
        dict: 'es-mx.json'
    }
} as const;

const i18n = Object.fromEntries(
    Object.entries(config).map(
        ([name, value]) => [name, async () => (await import(`@/dictionaries/${value.dict}`)).default]));

export type Locale = keyof typeof config;

export const useI18N = cache(async (locale: Locale) => {
    const translations = await i18n[locale]?.();
    return (path: string) => {
        const pathParts = path.split('.');
        let prop = pathParts.pop();
        let namespace = translations;

        const error = `(${pathParts.join('.')}.${prop})`;

        for (let part of pathParts) {
            namespace = namespace[part];
            if (namespace !== undefined) continue;
            return error;
        }
        return namespace[prop as any] ?? error;
    }
});