import { FC } from "react";

interface SaleorContentBlockBase {
  id: string;
}

interface ParagraphBlock extends SaleorContentBlockBase {
  type: "paragraph";
  data: {
    text: string;
  };
}

type SaleorContentBlock = ParagraphBlock;

interface SaleorContentBlockData {
  time: number;
  blocks: SaleorContentBlock[];
}

interface ProductDescriptionProps {
  description: string | null | undefined;
}

export const ProductDescription: FC<ProductDescriptionProps> = ({
  description,
}) => {
  let content: SaleorContentBlockData | null = null;
  try {
    content = JSON.parse(description ?? '""') as SaleorContentBlockData;
  } catch (err) {
    console.error("Error parsing JSON: ", err);
  }

  if (!content) {
    console.warn("Missing or invalid product description content");
    return null;
  }

  return (
    <div>
      {content.blocks.map((block) => {
        switch (block.type) {
          case "paragraph":
            return (
              <div
                key={block.id}
                dangerouslySetInnerHTML={{ __html: block.data.text }}
              />
            );
          default:
            return null;
        }
      })}
    </div>
  );
};
