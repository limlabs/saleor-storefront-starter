import React from "react";

interface OrderSummaryProps {
  totalPrice: string;
}

const OrderSummary: React.FC<OrderSummaryProps> = ({ totalPrice }) => {
  const subtotal = (parseFloat(totalPrice) - 10).toFixed(2);

  return (
    <div className="bg-neutral h-auto inline-flex flex-wrap justify-center items-center mt-12 md:pt-2 md:pb-2 md:pr-2 md:pl-2 md:ml-8 md:mt-0">
      <div className="text-center font-roboto md:p-4">
        <h2 className="text-lg text-left font-bold">
          Order Summary
        </h2>
        <div className="flex justify-between pt-4">
          <p className="text-left">
            Original Price: 
          </p>
          <p className="text-right pl-20">
            ${totalPrice}
          </p>
        </div>

        <div className="flex justify-between text-accent">
          <p className="text-left">
            Discounts: 
          </p>
          <p className="text-right pl-20">
            $10.00
          </p>
        </div>

        <div className="flex justify-between">
          <p className="text-left">
            Shipping: 
          </p>
          <p className="text-right pl-20">
            Calculated at checkout
          </p>
        </div>

        <div className="flex flex-col pt-3">
          <div className="flex justify-between">
            <p className="text-left font-bold">
              Subtotal: 
            </p>
            <p className="text-right font-bold pl-20">
              ${subtotal}
            </p>
          </div>

         
          <div className="mt-4 text-center">
            <button  className="bg-primary hover:bg-primary-focus font-bold py-2 px-4">
              Checkout
            </button>
          </div>
        </div>
      
      </div>
    </div>
  );
};

export default OrderSummary;