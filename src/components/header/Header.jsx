import { Button } from "@mui/material";
import Logo from "../../assets/logo.svg";
import { MdOutlineMenu } from "react-icons/md";
import HeaderModal from "./headerModal/headerModal";
import { useState } from "react";

function Header() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-50 bg-white dark:bg-gray-900 shadow-md">
        <div className="py-4 px-4 md:px-6">
          <div className="container mx-auto flex items-center justify-between">
            {/* Logo Section */}
            <div className="h-[40px] flex items-center">
              <img src={Logo} className="h-full" alt="Logo" />
            </div>
            {/* Right Side */}
            <div className="flex items-center gap-4">
              {/* Language Button */}
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
              {/* Menu Button */}
              <Button
                onClick={() => setOpen(!open)}
                variant="text"
                className="w-[37px] !min-w-[37px] h-[37px] !rounded-full !text-black md:hidden"
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
      <HeaderModal open={open} setOpen={setOpen} />
    </>
  );
}

export default Header;
