import { useState, useRef } from "react";
import { listing, menuItems } from "./productdata";
import ProductCard from "../cards/products.card"; // Ensure correct path
import { MdGroups, MdStarOutline, MdInfoOutline } from "react-icons/md";
import { PiListBulletsBold } from "react-icons/pi";
import { FaBicycle, FaSearch } from "react-icons/fa";
import Companydetails from "../companydetails";

function MenuModal({ menuItems, onClose, onSelectCategory }) {
  if (!Array.isArray(menuItems)) {
    return <div>Invalid menu data!</div>;
  }

  return (
    <div className="fixed inset-0 flex justify-center items-center z-50">
      <div className="bg-white p-5 rounded-lg max-w-lg w-full">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-bold">Menu Items</h2>
          <button onClick={onClose} className="text-red-500 text-xl font-bold">
            X
          </button>
        </div>
        <div className="mt-4">
          <ul className="list-disc pl-5">
            {menuItems.map((item, index) => (
              <li
                key={index}
                className="text-lg cursor-pointer  hover:bg-black hover:text-white"
                onClick={() => {
                  onSelectCategory(item); // Select the category
                  onClose(); // Close the modal
                }}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

function ProductsList() {
  const [activeCategory, setActiveCategory] = useState("Pizze Rosse");
  const [isModalOpen, setIsModalOpen] = useState(false); // Modal state
  const categoryRefs = useRef({});

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
    if (categoryRefs.current[category]) {
      categoryRefs.current[category].scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleModalToggle = () => {
    setIsModalOpen(!isModalOpen); // Toggle the modal
  };

  const handleSelectCategory = (category) => {
    handleCategoryClick(category); // Select the category when an item is clicked
  };

  return (
    <div className="products-list container pt-5 mt-3">
      {/* Header */}
      <div className="mt-2 flex flex-row justify-between">
        <h1 className="text-3xl font-[700] mt">Azzipizza Mica Pizza e Fichi</h1>
        <div className="flex flex-row justify-center gap-2">
          <div className="w-48 h-12 bg-transparent hover:bg-gray-300 rounded-4xl flex flex-row justify-center gap-2 items-center transition duration-300">
            <MdGroups size={24} className="text-orange-500" />
            <h2 className="text-[19px] font-[600]">Ordini di gruppo</h2>
          </div>
          <div className="w-12 h-12 bg-transparent hover:bg-gray-300 rounded-4xl flex flex-row justify-center items-center transition duration-300">
            <MdInfoOutline size={26} />
          </div>
        </div>
      </div>

      {/* Rating & Delivery */}
      <div className="flex flex-row items-center gap-5 mt-3">
        <div className="gap-1.5 flex flex-row items-center">
          <MdStarOutline size={24} className="text-amber-500" />
          <p>0 Recensioni</p>
        </div>
        <div className="w-22 h-8 rounded-[5px] bg-amber-600 flex flex-row justify-evenly items-center text-white">
          <FaBicycle size={24} />
          <p>Gratis</p>
        </div>
      </div>

      {/* Search Bar */}
      <div className="flex items-center border border-gray-300 rounded-3xl h-12 p-2 mt-5 hover:border-4 hover:border-sky-500">
        <FaSearch size={20} className="text-orange-500 ml-3 mr-3" />
        <input
          type="text"
          placeholder="Cerca il prodotto..."
          className="outline-none w-full text-gray-700"
        />
      </div>

      {/* Menu Items */}
      <div className="flex flex-row justify-between items-center mt-5">
        <div className="flex gap-1">
          {menuItems.map((item) => (
            <div
              key={item}
              className={`p-2 px-4 font-bold cursor-pointer transition duration-300 ${
                activeCategory === item
                  ? "bg-black text-white rounded-2xl"
                  : "text-black hover:bg-black hover:text-white hover:rounded-2xl"
              }`}
              onClick={() => handleCategoryClick(item)}
            >
              {item}
            </div>
          ))}
        </div>
        <div
          className="w-12 h-12 bg-gray-200 hover:bg-gray-300 rounded-[5px] flex flex-row justify-center items-center transition duration-300 cursor-pointer"
          onClick={handleModalToggle} // Open modal on click
        >
          <PiListBulletsBold size={25} />
        </div>
      </div>

      {/* Products by Category */}
      {menuItems.map((category) => (
        <div key={category} ref={(el) => (categoryRefs.current[category] = el)}>
          <h1 className="text-xl font-[600] mt-6">{category}</h1>
          {listing[category].length > 0 ? (
            <div className="flex flex-col gap-4 mt-4">
              {listing[category].map((item) => (
                <ProductCard key={item.id} products={item} />
              ))}
            </div>
          ) : (
            <p className="text-sm font-light text-gray-500 mt-2">
              No items available in this category.
            </p>
          )}
        </div>
      ))}

      <Companydetails />

      {/* Render Modal */}
      {isModalOpen && (
        <MenuModal
          menuItems={menuItems}
          onClose={handleModalToggle} // Close the modal
          onSelectCategory={handleSelectCategory} // Pass select functionality
        />
      )}
    </div>
  );
}

export default ProductsList;
