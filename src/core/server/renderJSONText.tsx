import { EditorJSBlock, EditorJSObject } from "@/app/types";

function renderEditorJSBlock(block: EditorJSBlock) {
  switch (block.type) {
    case "paragraph":
      return (
        <p
          key={block.id}
          dangerouslySetInnerHTML={{ __html: block.data.text }}
        />
      );
    default:
      return null;
  }
}

export function renderEditorJsObject(editorJSObj: EditorJSObject) {
  return editorJSObj.blocks.map(renderEditorJSBlock);
}
