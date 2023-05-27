import { cache } from "react";
import { ILanguageCodeEnum } from "@/gql/sdk";
import { Locale, localeConfig } from "@/locale-config";

export const getLanguageCode = (locale: Locale) => {
  return locale.toUpperCase().replace("-", "_") as ILanguageCodeEnum;
};

/**
 * https://prismic.io/blog/advanced-nextjs-server-context
 */
export const getLocaleContext = cache(() => {
  const map = new Map();
  map.set('locale', localeConfig.defaultLocale as Locale);
  return map;
});

interface LocaleParam {
  params: {
    locale: Locale;
  }
}

export function withTranslations<Context extends LocaleParam>(serverComponent: (ctx: Context) => (Promise<JSX.Element> | JSX.Element)) {
  return (context: Context) => {
    const localeCtx = getLocaleContext();
    localeCtx.set('locale', context.params.locale);
    return serverComponent(context);
  }
}
