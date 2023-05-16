import Menu from "@/app/daisyui/menu";
import MenuTitle from "@/app/daisyui/menu-title";
import { useTranslations } from "@/core/server/useTranslations";
import { NavbarMenuCategory } from "./navbarMenuCategories";
import { IMenuFragment } from "@/gql/sdk";
import type { FC } from "react";
import type { Locale } from "@/locale-config";

interface NavbarMenuProps {
  locale: Locale;
  menu?: IMenuFragment | null;
}

export const NavbarMenu: FC<NavbarMenuProps> = ({ locale, menu }) => {
  const t = useTranslations(locale);
  return (
    <Menu className="p-4 w-80 bg-base-100 text-base-content">
      <MenuTitle>{t("menu.categories")}</MenuTitle>
      {menu?.items
        ? menu.items.map((item) => (
            <NavbarMenuCategory key={item.category?.id} item={item} />
          ))
        : null}
    </Menu>
  );
};
