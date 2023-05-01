import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const locales = ['en-us', 'es-mx'];
const DEFAULT_LOCALE = 'en-us';
const LOCALE_REGEX = /^\/[a-z]{2}-[a-z]{2,}/;

export function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl;
    const locale = pathname.match(LOCALE_REGEX)?.[0];
    if (locale && locales.some(l => `/${l}` === locale)) return;

    return NextResponse.redirect(
        new URL(locale ?
            pathname.replace(locale, DEFAULT_LOCALE) :
            `/${DEFAULT_LOCALE}/${pathname}`, request.url)
    );

}

export const config = {
    // Skip all paths that should not be internationalized
    matcher: ['/((?!api|_next|.*\\..*).*)']
};