import { FaPlus } from "react-icons/fa";
import Context from "../../context";
import { useContext } from "react";
import { FiMinus, FiPlus } from "react-icons/fi";
import { Button } from "@mui/material";

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
      item.id === id ? { ...item, quantity: item.quantity - 1 } : item
    );
    setCartItems(newCart);
  };

  return (
    <div className="product-card border rounded-md border-gray-200 hover:bg-gray-200 cursor-pointer">
      <div className="flex justify-between items-center gap-4 p-4">
        <div className="flex flex-col gap-2">
          <h1 className="text-[20px] font-[600]">{products.name}</h1>
          <h2 className="text-[16px] font-[400]">{products.price}</h2>
          <span className="flex items-center gap-2">
            <span
              onClick={() => decrement(products.id)}
              className="border border-[rgba(0,0,0,0.5)] hover:border-[#000] w-[20px] h-[20px] flex items-center justify-center"
            >
              <FiMinus className="cursor-default text-[14px] font-[600]" />
            </span>
            <span className="border cursor-default border-[#000] w-[20px] h-[20px] flex items-center justify-center text-[14px] font-[600] ">
              {products.quantity}
            </span>
            <span
              onClick={() => increment(products.id)}
              className="border border-[rgba(0,0,0,0.5)] hover:border-[#000] w-[20px] h-[20px] flex items-center justify-center"
            >
              <FiPlus className="cursor-default text-[15px] font-[600]" />
            </span>
          </span>
        </div>
        <div className="h-[100px] rounded-md relative">
          <img
            className="h-full object-contain rounded-md"
            src={products.image}
            alt="card image"
          />

          <span
            onClick={() => removeCart(products.id)}
            className="cursor-pointer absolute bg-white hover:bg-transparent border hover:text-white border-gray-200 p-2 rounded-full top-[-10px] right-[-10px]"
          >
            <FiMinus className="text-[15px]" />
          </span>
        </div>
      </div>
    </div>
  );
}

export default CartCard;
