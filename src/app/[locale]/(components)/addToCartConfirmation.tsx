import { FC } from "react";
import { createPortal } from "react-dom";

interface AddToCartConfirmationProps {
  open: boolean;
  onClose: () => void;
}

export const AddToCartConfirmation: FC<AddToCartConfirmationProps> = ({
  open,
  onClose,
}) => {
  "use client";

  const target = document.getElementById("modal-root");
  if (!target) return null;

  console.log("re rendering with state open: ", open);

  return createPortal(
    <>
      {open && (
        <div
          id="cartModal"
          className="fixed inset-0 flex items-center justify-center z-10"
        >
          <div className="bg-white w-64 p-4 rounded shadow">
            <h3 className="text-xl font-bold mb-2">Item added to cart</h3>
            <p className="text-gray-700">
              Your item has been added to the cart.
            </p>
            <button
              id="closeModalButton"
              className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded mt-4"
              onClick={onClose}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>,
    target,
    "addToCartConfirmation"
  );
};
