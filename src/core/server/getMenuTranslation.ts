import { cache } from "react";
import { IMenuItemFragment } from "@/gql/sdk";

export const getMenuTranslation = cache(
  <T extends IMenuItemFragment>(item: T) => {
    return {
      name: item.translation?.name ?? item.category?.name,
    };
  }
);
