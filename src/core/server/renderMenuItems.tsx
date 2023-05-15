import { Fragment } from "react";
import { IMenuItem_PropsFragment, IMenu_PropsFragment } from "@/gql/sdk";
import { useMenuTranslation } from "./useMenuTranslation";
import Collapse from "@/app/daisyui/collapse";

interface Submenu extends IMenuItem_PropsFragment {
  children?: IMenuItem_PropsFragment[] | null;
}

function renderCategory(item: IMenuItem_PropsFragment) {
  const { name } = useMenuTranslation(item);
  const children = (item as Submenu).children?.map(renderCategory) ?? [];
  if (children?.length) {
    return (
      <Collapse
        key={item.category?.id}
        classNameContent="pr-0 border-secondary  border-solid peer-checked:border-l-[1px]"
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

export function renderMenuItems(menu?: IMenu_PropsFragment | null) {
  if (!menu) return null;

  return <Fragment>{menu.items?.map(renderCategory)}</Fragment>;
}
