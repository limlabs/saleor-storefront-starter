import { cache } from "react";
import { ILanguageCodeEnum } from "@/gql/sdk";
import { Locale, localeConfig } from "@/locale-config";
import { Context } from "vm";
import { cookies } from "next/headers";

export const getLanguageCode = (locale?: Locale) => {
  let parsedLocale = locale;

  if (!parsedLocale) {
    const rawLocale = cookies().get("STOREFRONT_LOCALE");
    if (
      typeof rawLocale?.value === "string" &&
      localeConfig.locales[rawLocale.value as Locale]
    ) {
      parsedLocale = rawLocale.value as Locale;
    } else {
      parsedLocale = localeConfig.defaultLocale;
    }
  }

  return parsedLocale.toUpperCase().replace("-", "_") as ILanguageCodeEnum;
};

/**
 * https://prismic.io/blog/advanced-nextjs-server-context
 */
export const getLocaleContext = cache(() => {
  const map = new Map();
  map.set("locale", localeConfig.defaultLocale as Locale);
  return map;
});

interface LocaleProps {
  params: {
    locale: Locale;
  };
}

export function withTranslations<Context extends LocaleProps>(
  serverComponent: (ctx: Context) => Promise<JSX.Element> | JSX.Element,
) {
  return (context: Context) => {
    const localeCtx = getLocaleContext();
    localeCtx.set("locale", context.params.locale);
    return serverComponent(context);
  };
}

export function withLanguage(
  serverComponent: (ctx: Context) => Promise<JSX.Element> | JSX.Element,
) {
  return (context: Context) => {
    const localeCtx = getLocaleContext();
    localeCtx.set("language", context.params.locale);
    return serverComponent(context);
  };
}
