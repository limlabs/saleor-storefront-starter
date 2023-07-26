import React, { useState } from "react";

const QuanitityCounter: React.FC = () => {
  const [quantity, setQuantity] = useState(1);

  const DecreaseQuantity = () => {
    setQuantity(quantity - 1);
  };

  const IncreaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  return (
    <div className="flex items-center pt-3">
      <button className="px-2 py-1 rounded-l text-black bg-gray-400" onClick={DecreaseQuantity}>
        -
      </button>
      <span className="px-2 text-black">{quantity}</span>
      <button className="px-2 py-1 rounded-r text-black bg-gray-400" onClick={IncreaseQuantity}>
        +
      </button>
    </div>
  );
};

export default QuanitityCounter;