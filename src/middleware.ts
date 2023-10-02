import { NextResponse } from "next/server";
import { localeConfig } from "./locale-config";
import type { NextRequest } from "next/server";

const locales = Object.keys(localeConfig.locales);
const defaultLocale = localeConfig.defaultLocale;

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
  return (!locale || locales.every((loc) => `/${loc}` !== locale));
}

function findURLLocale(request: NextRequest) {
  const { pathname } = request.nextUrl;
  return pathname.match(LOCALE_REGEX)?.[0];
}

export function middleware(request: NextRequest) {
  const locale = findURLLocale(request);

  if (!locale || isInvalidLocale(locale)) {
    const userLocale = getLocale(request);
    const { pathname, search } = request.nextUrl;
    const localeURL = `/${userLocale}/${pathname}`;

    return NextResponse.redirect(
      new URL(localeURL + search, request.url),
    );
  }

  if (!request.cookies.get("STOREFRONT_LOCALE")) {
    request.cookies.set("STOREFRONT_LOCALE", locale);

    const headers = {
      "Set-Cookie": `NEXT_LOCALE=${locale}; Path=/; HttpOnly`,
    };

    return NextResponse.next({ headers });
  }
}

export const config = {
  // Skip all paths that should not be internationalized
  /*
   * Match all request paths except for the ones starting with:
   * - api (API routes)
   * - _next/static (static files)
   * - _next/image (image optimization files)
   * - favicon.ico (favicon file)
   */
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|.*\\..*).*)"],
};
