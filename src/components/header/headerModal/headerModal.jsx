import { Button, Dialog } from "@mui/material";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// icons
import { IoBusinessOutline, IoCloseOutline, IoStorefrontOutline } from "react-icons/io5";
import { CiDiscount1 } from "react-icons/ci";
import { CiCircleInfo } from "react-icons/ci";
import { MdOutlineDeliveryDining } from "react-icons/md";



function HeaderModal({ open, setOpen }) {
    const [fullWidth, setFullWidth] = useState(false);

    useEffect(() => {
        const mediaQuery = window.matchMedia('(min-width: 768px)');
        const handleMediaChange = (event) => {
          if (event.matches) {
              setFullWidth(false);
            } else {
              setFullWidth(true);
          }
        };
    
        mediaQuery.addEventListener('change', handleMediaChange);
    
        handleMediaChange(mediaQuery);
    
        return () => {
          mediaQuery.removeEventListener('change', handleMediaChange);
        };
      }, []);

    return (
        <Dialog 
        open={open} 
        onClose={() => setOpen(false)}
        fullScreen={fullWidth}
        >
            <div className='bg-white p-4 md:w-[400px] w-full flex flex-col gap-4'>
                <div className="row_1 flex items-center justify-between">
                    <h2 className="text-[18px] font-[500]">Il mio account</h2>

                    <span onClick={() => setOpen(false)} tabIndex="-1" className="bg-none hover:bg-[rgba(0,0,0,0.2)] cursor-pointer p-1 rounded-full">
                        <IoCloseOutline className="text-[22px]" />
                    </span>
                </div>
                <div className="row32 flex items-center gap-4 mt-4">
                    <div className="w-[50%]">
                        <Button className="w-full !bg-[#EDE9E5] hover:!bg-[rgb(216,212,208)] !text-[#000] !font-[600] !text-[14px] !rounded-full">Accedi</Button>
                    </div>
                    <div className="w-[50%]">
                        <Button className="w-full !bg-[#F36805] hover:!bg-[rgb(243,73,5)] !text-[#fff] !font-[600] !rounded-full">Crea un account</Button>
                    </div>
                </div>
                <div className="row_3">
                    <ul className="mt-2 border-b pb-2 border-[rgba(0,0,0,0.1)]">
                        <li className="p-2 hover:bg-[rgba(0,0,0,0.1)]">
                            <Link to="/cartefedeltà" className="text-[16px] font-[500] flex items-center gap-2"><CiDiscount1 className="text-[22px]" /> Carte Fedeltà</Link>
                        </li>
                        <li className="p-2 hover:bg-[rgba(0,0,0,0.1)]">
                            <Link to="/cartefedeltà" className="text-[16px] font-[500] flex items-center gap-2"><CiCircleInfo className="text-[22px]" /> Ti serve aiuto?</Link>
                        </li>
                    </ul>
                    <ul className="mt-2">
                        <li className="p-2 hover:bg-[rgba(0,0,0,0.1)]">
                            <Link to="/cartefedeltà" className="text-[16px] font-[500] flex items-center gap-2"><MdOutlineDeliveryDining className="text-[22px]" />Diventa rider</Link>
                        </li>
                        <li className="p-2 hover:bg-[rgba(0,0,0,0.1)]">
                            <Link to="/cartefedeltà" className="text-[16px] font-[500] flex items-center gap-2"><IoBusinessOutline className="text-[22px]" /> Just Eat for business</Link>
                        </li>
                        <li className="p-2 hover:bg-[rgba(0,0,0,0.1)]">
                            <Link to="/cartefedeltà" className="text-[16px] font-[500] flex items-center gap-2"><IoStorefrontOutline className="text-[22px]" /> Diventa Partner</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </Dialog>
    )
}


export default HeaderModal;