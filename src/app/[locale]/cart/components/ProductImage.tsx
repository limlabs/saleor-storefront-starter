import React from "react";
import Image from "next/image";

interface ProductImageProps {
  src: string;
  alt: string;
}

const ProductImage: React.FC<ProductImageProps> = ({ src, alt }) => {
  return (
    <div className="col-span-1 bg-neutral h-auto flex  flex-col rounded-md p-4">
      <div className="flex items-center">
        <Image src={src} alt={alt} width={200} height={200} />
      </div>
    </div>
  );
};

export default ProductImage;
