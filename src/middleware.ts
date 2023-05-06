import { NextResponse } from "next/server";
import { i18n } from "./i18n-config";
import type { NextRequest } from "next/server";

const locales = Object.keys(i18n.locales);
const defaultLocale = i18n.defaultLocale;

const LOCALE_REGEX = /^\/[a-z]{2}-[a-z]{2,}/;

/**
 * TODO: negotiate fallback locale here
 * @param request 
 * @returns 
 */
function getLocale(request: NextRequest) {
    return defaultLocale;
}

function isInvalidLocale(locale?: string) {
    return (!locale || locales.every(loc => `/${loc}` !== locale));
}

function findURlLocale(request: NextRequest) {
    const { pathname } = request.nextUrl;
    return pathname.match(LOCALE_REGEX)?.[0];
}

export function middleware(request: NextRequest) {

    let locale = findURlLocale(request);

    if (isInvalidLocale(locale)) {
        const userLocale = getLocale(request);
        const { pathname, search } = request.nextUrl;
        const localeURL = `/${userLocale}/${pathname}`;

        return NextResponse.redirect(
            new URL(localeURL + search, request.url)
        );
    } 
}

export const config = {
    // Skip all paths that should not be internationalized
    matcher: ['/((?!api|_next|.*\\..*).*)']
};