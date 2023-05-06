export const i18n = {
    defaultLocale: "en-us",
    locales: {
        'en-us': "English 🇺🇸",
        'es-mx': "Español 🇲🇽",
        "fr-fr": "Français 🇫🇷",
        "it-it": "Italiano 🇮🇹",
    }
} as const;


export type I18NConf = typeof i18n;
export type Locale = keyof typeof i18n['locales'];