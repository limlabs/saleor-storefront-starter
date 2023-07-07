import type { IMenuFragment } from "@/gql/sdk";

export type MenuItem = NonNullable<IMenuFragment["items"]>[number];
