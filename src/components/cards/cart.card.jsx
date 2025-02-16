import { useContext } from "react";
import { FaTrash } from "react-icons/fa";
import { FiMinus, FiPlus } from "react-icons/fi";
import Context from "../../context";

function CartCard({ products }) {
  const { cartItems, setCartItems } = useContext(Context);

  const removeCart = (id) => {
    const newCart = cartItems.filter((item) => item.id !== id);
    setCartItems(newCart);
  };

  const increment = (id) => {
    const newCart = cartItems.map((item) =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    );
    setCartItems(newCart);
  };

  const decrement = (id) => {
    const newCart = cartItems.map((item) =>
      item.id === id && item.quantity > 1
        ? { ...item, quantity: item.quantity - 1 }
        : item
    );
    setCartItems(newCart);
  };

  return (
    <div className="border rounded-md border-gray-200 hover:bg-gray-200 cursor-pointer p-3 sm:p-4 md:p-5">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        {/* Product Info */}
        <div className="flex flex-col gap-1 sm:gap-2 flex-1">
          <h1 className="text-sm sm:text-base md:text-lg font-semibold">
            {products.name}
          </h1>
          <h2 className="text-xs sm:text-sm md:text-base font-medium text-gray-700">
            ${products.price}
          </h2>

          {/* Quantity Controls */}
          <div className="flex items-center gap-2 mt-2">
            <button
              onClick={() => decrement(products.id)}
              className="border border-gray-400 hover:border-black w-6 h-6 sm:w-8 sm:h-8 flex items-center justify-center rounded-md"
            >
              <FiMinus className="text-[14px] font-[600]" />
            </button>

            <span className="border cursor-default border-black w-6 h-6 sm:w-8 sm:h-8 flex items-center justify-center text-sm sm:text-base font-semibold">
              {products.quantity}
            </span>

            <button
              onClick={() => increment(products.id)}
              className="border border-gray-400 hover:border-black w-6 h-6 sm:w-8 sm:h-8 flex items-center justify-center rounded-md"
            >
              <FiPlus className="text-[15px] font-[600]" />
            </button>
          </div>
        </div>

        {/* Product Image & Delete Button */}
        <div className="relative flex-shrink-0">
          <img
            className="h-[80px] sm:h-[100px] md:h-[120px] max-w-[100px] sm:max-w-[140px] md:max-w-[160px] object-contain rounded-md"
            src={products.image}
            alt="Product"
          />
          <button
            onClick={() => removeCart(products.id)}
            className="absolute top-[-10px] right-[-10px] bg-red-500 hover:bg-red-600 text-white p-2 rounded-full shadow-md"
          >
            <FaTrash size={14} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartCard;
