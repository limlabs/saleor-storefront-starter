type JSONString = string;

interface EditorJSBlock {
  id: string;
  data: {
    text: string;
  };
  type: "paragraph";
}

interface EditorJSObject {
  time: number;
  blocks: EditorJSBlock[];
}

export type MenuItem = NonNullable<
  import("@/gql/sdk").IMenuFragment["items"]
>[number];
