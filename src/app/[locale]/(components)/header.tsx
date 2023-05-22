import Image from "next/image";
import { useTranslations } from "@/core/server/useTranslations";
import { Link } from "./link";
import { CartIcon } from "./cartIcon";
import { LocaleMenu } from "./localeMenu";
import { FC, Suspense } from "react";
import type { Locale } from "@/locale-config";
import { CartIconWithCount } from "./cartIconWithCount";

interface RootLayoutHeaderProps {
  locale: Locale;
}

export const RootLayoutHeader: FC<RootLayoutHeaderProps> = ({ locale }) => {
  const t = useTranslations(locale);

  return (
    <header className="flex flex-row text-lg items-center justify-between text-primary sm:px-4 lg:px-2">
      <nav className="navbar bg-base-100 p-0">
        <div className="navbar-start gap-4">
          <Image
            className="mr-5"
            src="/logo.svg"
            width={190}
            height={60}
            alt="LIMINAL logo"
          />
          <Link href="/home" channel="">
            {t("header.home")}
          </Link>
          <Link href="/c/all" className="hover:text-secondary">
            {t("header.shop")}
          </Link>
          <Link href="/about" className="hover:text-secondary">
            {t("header.about")}
          </Link>
        </div>
        <div className="navbar-end gap-4">
          <LocaleMenu />
          <CartIconWithCount />
        </div>
      </nav>
    </header>
  );
};
