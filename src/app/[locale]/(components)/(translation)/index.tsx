"use client";

import { useApp } from "@/core/client/useApp";
import { localeConfig } from "@/locale-config";
import { FC } from "react";
import { ServerTranslation, TranslationKey } from "./serverTranslation";

interface TranslationProps {
  t: TranslationKey;
  foo?: string;
}

export const Translation: FC<TranslationProps> = ({ t, foo }) => {
  const { params } = useApp();
  const locale = params.locale ?? localeConfig.defaultLocale;
  return <ServerTranslation t={t} locale={locale} />;
};
