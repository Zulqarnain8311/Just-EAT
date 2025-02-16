import { FaPlus } from "react-icons/fa";
import Context from "../../context";
import { useContext } from "react";

function ProductCard({ products, openModal }) {
  const { cartItems, setCartItems } = useContext(Context);

  const handleCart = (e) => {
    e.stopPropagation(); // Prevent modal from opening when clicking on the add button
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
      className="product-card border rounded-md border-gray-200 hover:bg-gray-200 cursor-pointer p-3 sm:p-4 md:p-5"
      onClick={() => openModal(products)} // Open modal on card click
    >
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        {/* Product Info */}
        <div className="flex flex-col gap-1 sm:gap-2 flex-1">
          <h1 className="text-base sm:text-lg md:text-xl font-semibold">
            {products.name}
          </h1>
          <h2 className="text-sm sm:text-base font-medium text-gray-700">
            ${products.price}
          </h2>
          <p className="text-xs sm:text-sm text-gray-600">{products.des}</p>
        </div>

        {/* Product Image & Add Button */}
        <div className="relative flex-shrink-0">
          <img
            className="h-[80px] sm:h-[100px] md:h-[120px] max-w-[120px] sm:max-w-[150px] md:max-w-[200px] object-contain rounded-md"
            src={products.image}
            alt="card image"
          />
          <span
            className="absolute top-2 right-2 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-orange-500 flex justify-center items-center cursor-pointer shadow-md"
            onClick={handleCart}
          >
            <FaPlus size={20} color="white" />
          </span>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
