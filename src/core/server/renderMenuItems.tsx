import { Fragment } from "react";
import { IMenuItem_PropsFragment, IMenu_PropsFragment } from "@/gql/sdk";
import { useMenuTranslation } from "./useMenuTranslation";
import Menu from "@/app/daisyui/menu";

interface Submenu extends IMenuItem_PropsFragment{
    children?: IMenuItem_PropsFragment[] | null;
}

function renderCategory(item: IMenuItem_PropsFragment ) {
  const { name } = useMenuTranslation(item);
  const children = (item as Submenu).children?.map(renderCategory) ??[];
  return <li key={item.category?.id}>
    <a>{name}</a>
    <Menu className="bg-base-100">
    {children}
    </Menu>
    </li>;
}

export function renderMenuItems(menu?: IMenu_PropsFragment | null) {
  if (!menu) return null;

  return <Fragment>{menu.items?.map(renderCategory)}</Fragment>;
}
