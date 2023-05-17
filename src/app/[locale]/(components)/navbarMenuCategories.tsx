import Collapse from "@/app/daisyui/collapse";
import { getMenuTranslation } from "@/core/server/getMenuTranslation";
import type { FC } from "react";
import type { IMenuItemFragment } from "@/gql/sdk";

interface Submenu extends IMenuItemFragment {
  children?: IMenuItemFragment[] | null;
}
interface NavbarMenuCategoryProps {
  item: IMenuItemFragment;
}

export const NavbarMenuCategory: FC<NavbarMenuCategoryProps> = ({ item }) => {
  const { name } = getMenuTranslation(item);
  const children =
    (item as Submenu).children?.map((item) => (
      <NavbarMenuCategory key={item.category?.id} item={item} />
    )) ?? [];
  if (children?.length) {
    return (
      <Collapse
        classNameContent="pr-0 border-primary border-solid peer-checked:border-l-[1px]"
        classNameTitle="font-sm"
        plus
        title={name}
      >
        {children}
      </Collapse>
    );
  }
  return (
    <li>
      <a>{name}</a>
    </li>
  );
};
