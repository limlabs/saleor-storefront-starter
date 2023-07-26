import Image from "next/image";
import { parseJSONText } from "@/core/server/parseJSONText";
import { ProductPrice } from "./productPrice";
import { renderEditorJsObject } from "@/core/server/renderJSONText";
import { useProductTranslation } from "@/core/client/useProductTranslation";
import { IProductDetailsFragment } from "@/gql/sdk";

interface PageProps {
  channel: string;
  product: IProductDetailsFragment;
}

export function ProductHero({ product }: PageProps) {
  const info = useProductTranslation(product);
  const { thumbnail, pricing } = product;
  const description = parseJSONText(info.description ?? "");

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content lg:flex-row-reverse">
        <Image
          src={thumbnail?.url ?? ""}
          width={700}
          height={700}
          className="max-w-sm rounded-lg shadow-2xl"
          alt="product photo"
          priority
        />
        <div>
          <h1 className="text-5xl font-bold">{info.name}</h1>
          {description ? renderEditorJsObject(description) : null}
          {pricing ? <ProductPrice pricing={pricing} /> : null}
        </div>
      </div>
    </div>
  );
}
