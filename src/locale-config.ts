export const localeConfig = {
    defaultLocale: "en-us",
    locales: {
        'en-us': "English 🇺🇸",
        'es-mx': "Español 🇲🇽",
        "fr-fr": "Français 🇫🇷",
        "it-it": "Italiano 🇮🇹",
    }
} as const;


export type LocaleConfig = typeof localeConfig;
export type Locale = keyof typeof localeConfig['locales'];