import Image from "next/image";
import { parseJSONText } from "@/core/server/parseJSONText";
import { ProductPrice } from "./productPrice";
import { renderEditorJsObject } from "@/core/server/renderJSONText";

interface PageProps {
  locale: string;
  channel: string;
  product: ProductDetails;
}

export function ProductHero({ locale, channel, product }: PageProps) {
  const { name, thumbnail, pricing } = product;
  const description = parseJSONText(product.description);

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content lg:flex-row-reverse">
        <Image
          src={thumbnail.url}
          width={700}
          height={700}
          className="max-w-sm rounded-lg shadow-2xl"
          alt="product photo"
        />
        <div>
          <h1 className="text-5xl font-bold">{name}</h1>
          {description ? renderEditorJsObject(description) : null}
          <ProductPrice pricing={pricing} />
        </div>
      </div>
    </div>
  );
}
