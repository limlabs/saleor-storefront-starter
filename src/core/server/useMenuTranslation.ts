import { cache } from "react"
import { IMenuItem_PropsFragment } from "@/gql/sdk"

export const useMenuTranslation = cache(<T extends IMenuItem_PropsFragment>(item: T) => {
    return {
        name: item.translation?.name ?? item.category?.name
    }
});