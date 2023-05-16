import { Fragment } from "react";
import { IMenuItemFragment, IMenuFragment } from "@/gql/sdk";
import { getMenuTranslation } from "./getMenuTranslation";
import Collapse from "@/app/daisyui/collapse";

interface Submenu extends IMenuItemFragment {
  children?: IMenuItemFragment[] | null;
}

function renderCategory(item: IMenuItemFragment) {
  const { name } = getMenuTranslation(item);
  const children = (item as Submenu).children?.map(renderCategory) ?? [];
  if (children?.length) {
    return (
      <Collapse
        key={item.category?.id}
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
    <li key={item.category?.id}>
      <a>{name}</a>
    </li>
  );
}

export function renderMenuItems(menu?: IMenuFragment | null) {
  if (!menu) return null;

  return <Fragment>{menu.items?.map(renderCategory)}</Fragment>;
}
