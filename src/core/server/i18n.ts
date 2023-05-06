"use server";

const i18n = {
    'en-us': async () => (await import(`../../dictionaries/en-us.json`)).default,
    'es-mx': async () => (await import(`../../dictionaries/es-mx.json`)).default,
};

export type Locale = keyof typeof i18n;


function _geti18NProp(path: string){
    const pathParts = path.split('.');

    // for()

}
export async function getI18N(locale: Locale) {
    return i18n[locale]?.();
}