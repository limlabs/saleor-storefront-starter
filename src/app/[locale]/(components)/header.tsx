import Image from "next/image";
import { useI18N } from "@/core/server/useI18N";
import { Link } from "./link";
import { CartIcon } from "./cartIcon";
import { LocaleMenu } from "./localeMenu";
import type { FC } from "react";
import type { Locale } from "@/i18n-config";

// TODO:
// - fetch locales for links
// - what to use for collections link?

interface RootLayoutHeaderProps {
  locale: Locale;
}

export const RootLayoutHeader: FC<RootLayoutHeaderProps> = ({ locale }) => {
  const t = useI18N(locale);

  return (
    <header className="flex flex-row text-lg items-center justify-between text-primary sm:px-4 lg:px-2">
      <div className="flex flex-row px-2">
        <Image src="/logo.svg" width={190} height={60} alt="LIMINAL logo" />
      </div>
      <nav className="w-3/5">
        <ul className="flex flex-row">
          <li>
            <Link href="/home" channel="">{t("header.home")}</Link>
          </li>
          <li className="ml-4 hover:text-secondary">
            <Link href="/c/all">{t("header.shop")}</Link>
          </li>
          <li className="ml-4 hover:text-secondary">
            <Link href="/about">
              {t("header.about")}
            </Link>
          </li>
        </ul>
      </nav>
      <LocaleMenu />
      <CartIcon />
    </header>
  );
};
