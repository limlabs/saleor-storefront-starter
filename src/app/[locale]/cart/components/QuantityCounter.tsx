import React, { useState } from "react";

const QuanitityCounter: React.FC = () => {
  const [quantity, setQuantity] = useState(1);

  const DecreaseQuantity = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  const IncreaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  return (
    <div className="flex items-center pt-3">
      <button className="px-2 py-1 border border-primary" onClick={DecreaseQuantity}>
        -
      </button>
      <span className="px-2">{quantity}</span>
      <button className="px-2 py-1 border border-primary" onClick={IncreaseQuantity}>
        +
      </button>
    </div>
  );
};

export default QuanitityCounter;