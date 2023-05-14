import { ILanguageCodeEnum } from "@/gql/sdk";
import type { Locale } from "@/locale-config";

export const getLanguageCode = (locale: Locale) => {
    return locale.toUpperCase().replace("-", "_") as ILanguageCodeEnum;
}