'use client'
import { withTranslations } from "@/core/server/locale";
import type { Locale } from "@/locale-config";
import { FC, useState } from "react";
import shoe from "./shoe-balance.webp";
import appleJuice from "./apple-juice.webp";
import CartHeadline from "./components/CartHeadline";
import CartItem, { CartItemProps } from "./components/CartItem";
import OrderSummary from "./components/OrderSummary";


interface CartPageProps {
  params: {
    locale: Locale;
    channel: string;
  };
}

const ProductGrid = () => {
  const [products, setProducts] = useState<CartItemProps[]>([
    {
      productImage: shoe, 
      productLink: "https://saleor-storefront-starter-austin-liminal-liminal.vercel.app/en-us/default-channel/p/balance-trail-720",
      description: "Paul's Balance Shoes 420",
      price: "99.98",
      size: "36",
      color: "Blue",
      quantity: 1, 
    },
    {
      productImage: appleJuice, 
      productLink: "https://saleor-storefront-starter-austin-liminal-liminal.vercel.app/en-us/default-channel/p/apple-juice",
      description: "Apple Juice",
      price: "23.99",
      quantity: 1,
    },

  ])

  const totalPrice = products.reduce((acc, product) => acc + parseFloat(product.price), 0);

  const handleRemoveItem = (index: number) => {
    const updatedProducts = [...products];
    updatedProducts.splice(index, 1);
    setProducts(updatedProducts);
  };

  return (
    <div className="flex flex-col justify-between md:flex-row md:items-start">
      <div className="w-full md:max-w-3/4">
        <div className="grid grid-cols-1 gap-12 justify-center">
          {products.map((product, index) => (
            <CartItem
              key={index}
              {...product}
             onRemove={() => handleRemoveItem(index)}
           />
         ))}
        </div>
      </div>
    
      <div className="w-full md:max-w-1/4 justify-center">
        <OrderSummary totalPrice={totalPrice.toFixed(2)} />
      </div>
    </div>
  )
}

export default withTranslations<CartPageProps>((function CartPage() {
  return (
    <main className="container mx-auto my-auto pb-10 px-8 md:pl-4 md:pb-4">
      <CartHeadline />
      <ProductGrid />
    </main>
  );
}));

