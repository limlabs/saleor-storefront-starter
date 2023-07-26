import React from "react";

interface OrderSummaryProps {
  totalPrice: string;
}

const OrderSummary: React.FC<OrderSummaryProps> = ({ totalPrice }) => {
  const subtotal = (parseFloat(totalPrice) - 10).toFixed(2);

  return (
    <div className="bg-light-gray h-auto inline-flex flex-wrap rounded-md justify-center items-center pt-2 pb-2 pr-2 pl-2 mt-5">
      <div className="text-black text-center font-roboto">
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

        <div className="flex justify-between text-green-400">
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
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
              Checkout
            </button>
          </div>
        </div>
      
      </div>
    </div>
  );
};

export default OrderSummary;