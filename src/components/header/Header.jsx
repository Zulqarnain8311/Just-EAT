

import { Button } from '@mui/material';
import Logo from '../../assets/logo.svg';
import { MdOutlineMenu } from "react-icons/md";
import HeaderModal from './headerModal/headerModal';
import { useState } from 'react';

function Header() {
    const [open, setOpen] = useState(false);
    

    return (
        <>
            <header className="sticky top-0 z-50 bg-white dark:bg-gray-900 filter drop-shadow-[0_10px_15px_rgba(0,0,0,0.1)]">
                <div className="header py-4">
                    <div className="container flex items-center justify-between">
                        <div className="header-left-side h-[40px]">
                            <img src={Logo} className='h-full' alt="Logo" />
                        </div>
                        <div className="header-right-side flex items-center gap-4">
                            <Button variant="text" className='w-[37px] !min-w-[37px] h-[37px] !rounded-full !text-black'>
                                <div className='w-[30px] !min-w-[30px] h-[30px] !rounded-full overflow-hidden flex items-center justify-center'>
                                    <img className='w-full h-full object-cover' src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Flag_of_Italy.svg/1500px-Flag_of_Italy.svg.png" alt="flags" />
                                </div>
                            </Button>
                            <Button onClick={() => open ? setOpen(false) : setOpen(true)} variant="text" className='w-[37px] !min-w-[37px] h-[37px] !rounded-full !text-black'>
                                <div className='w-[30px] !min-w-[30px] h-[30px] !rounded-full overflow-hidden flex items-center justify-center'>
                                    <MdOutlineMenu className='text-[26px]' />
                                </div>
                            </Button>
                        </div>
                    </div>
                </div>
            </header>
            <HeaderModal open={open} setOpen={setOpen} />
        </>
    )
}


export default Header;