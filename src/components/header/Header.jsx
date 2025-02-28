import { Button } from "@mui/material";
import logo from "../../assets/logo-pizza.png";
import { MdOutlineMenu } from "react-icons/md";
import {
  AiOutlineHome,
  AiOutlineInfoCircle,
  AiOutlinePhone,
} from "react-icons/ai";
import HeaderModal from "./headerModal/headerModal";
import { useState } from "react";
import { Link } from "react-router-dom";

function Header() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-50 bg-gray-300/30 dark:bg-gray-900/30 shadow-md backdrop-blur-sm">
        <div className="py-2 px-4 md:px-6">
          <div className="container mx-auto flex items-center justify-between">
            {/* Logo Section */}
            <div className="h-[40px] flex items-center">
              <img src={logo} className="h-20 w-20 object-cover" alt="Logo" />
            </div>
            {/* Centered Navigation Links and Icons */}
            <div className="flex flex-1 justify-center items-center gap-4 text-black dark:text-white">
              <div className="hidden md:flex items-center gap-4">
                <Link
                  to="/"
                  className="relative px-4 py-1.5 text-sm font-medium text-gray-900 bg-gray-200 rounded-full shadow-sm transition-all duration-300 hover:scale-105 hover:shadow-md hover:bg-gray-300"
                >
                  Home
                </Link>
                <Link
                  to="/about"
                  className="relative px-4 py-1.5 text-sm font-medium text-gray-900 bg-gray-200 rounded-full shadow-sm transition-all duration-300 hover:scale-105 hover:shadow-md hover:bg-gray-300"
                >
                  About Us
                </Link>
                <Link
                  to="/contact"
                  className="relative px-4 py-1.5 text-sm font-medium text-gray-900 bg-gray-200 rounded-full shadow-sm transition-all duration-300 hover:scale-105 hover:shadow-md hover:bg-gray-300"
                >
                  Contact Us
                </Link>
              </div>
              {/* Mobile Navigation Icons */}
              <div className="flex md:hidden items-center gap-4">
                <Link to="/">
                  <AiOutlineHome className="text-[24px]" />
                </Link>
                <Link to="/about">
                  <AiOutlineInfoCircle className="text-[24px]" />
                </Link>
                <Link to="/contact">
                  <AiOutlinePhone className="text-[24px]" />
                </Link>
              </div>
            </div>
            {/* Flag and Menu Button on Right Side */}
            <div className="flex items-center gap-4">
              <Button
                variant="text"
                className="w-[37px] !min-w-[37px] h-[37px] !rounded-full !text-black"
              >
                <div className="w-[30px] h-[30px] rounded-full overflow-hidden flex items-center justify-center">
                  <img
                    className="w-full h-full object-contain"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Flag_of_Italy.svg/1500px-Flag_of_Italy.svg.png"
                    alt="flag"
                  />
                </div>
              </Button>
              <Button
                onClick={() => setOpen(!open)}
                variant="text"
                className="w-[37px] !min-w-[37px] h-[37px] !rounded-full !text-black"
              >
                <div className="w-[30px] h-[30px] rounded-full flex items-center justify-center">
                  <MdOutlineMenu className="text-[26px]" />
                </div>
              </Button>
            </div>
          </div>
        </div>
      </header>
      {/* Responsive Menu Modal */}
      {open && <HeaderModal open={open} setOpen={setOpen} />}
    </>
  );
}

export default Header;
