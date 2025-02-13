import { FaPlus } from "react-icons/fa";
import Context from "../../context";
import { useContext } from "react";

function ProductCard({ products, openModal }) {
  const { cartItems, setCartItems } = useContext(Context);

  const handleCart = () => {
    const check = cartItems.find((item) => item.id === products.id);
    if (check) {
      const newCart = cartItems.map((item) =>
        item.id === products.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
      setCartItems(newCart);
      return;
    }
    setCartItems([...cartItems, { ...products, quantity: 1 }]);
  };

  return (
    <div
      className="product-card border rounded-md border-gray-200 hover:bg-gray-200 cursor-pointer"
      onClick={() => openModal(products)} // Open modal on card click
    >
      <div className="flex justify-between items-center gap-4 p-4">
        <div className="flex flex-col gap-2">
          <h1 className="text-[20px] font-[600]">{products.name}</h1>
          <h2 className="text-[16px] font-[400]">{products.price}</h2>
          <p className="text-[14px] font-[300] ">{products.des}</p>
        </div>
        <div className="h-[100px] rounded-md relative">
          <img
            className="h-full object-contain rounded-md"
            src={products.image}
            alt="card image"
          />
          <span
            className="absolute top-2 right-2 w-9 h-9 rounded-full bg-orange-500 flex justify-center items-center cursor-pointer"
            onClick={handleCart}
          >
            <FaPlus size={25} color="white" />
          </span>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
