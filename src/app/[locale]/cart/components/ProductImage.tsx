import React from "react";
import Image, { StaticImageData } from "next/image";

interface ProductImageProps {
  productImage: StaticImageData;
}

const ProductImage: React.FC<ProductImageProps> = ({ productImage }) => {
  return (
    <div className="col-span-1 bg-white h-auto flex  flex-col rounded-md p-4">
      <div className="flex items-center">
        <Image src={productImage} alt="Product Image" width={200} height={200} />
      </div>
    </div>
  );
};

export default ProductImage;