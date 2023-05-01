import 'server-only';

const i18n = {
    'en-us': async ()=> (await import(`../../dictionaries/en.json`)).default,
    'es-mx': async ()=> (await import(`../../dictionaries/es.json`)).default,
}

export type Locale = keyof typeof i18n;

export const getI18N = async (locale: Locale) => i18n[locale]();