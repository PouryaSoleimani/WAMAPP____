import { Button, Drawer } from '@mui/material';
import { useState } from 'react';
import { FaBars } from 'react-icons/fa'
import HamburgerMenuContent from './HamburgerMenuContent';

const HamburgerMenu = () => {

    const [open, setOpen] = useState(false);

    const toggleDrawer = (newOpen: boolean) => () => {
        setOpen(newOpen);
    };

    return (
        <>
            <Button onClick={toggleDrawer(true)} style={{ backgroundColor: 'transparent', border: 'none', minWidth: 0, minHeight: 0 }}>
                <FaBars className="w-8 h-8 text-[var(--text-primary)]" />
            </Button>
            <Drawer open={open} onClose={toggleDrawer(false)} transitionDuration={300} translate='yes' className='bg-black/50 backdrop-blur-xl z-[1000]'>
                <div className="p-4 bg-[var(--main)] text-[var(--text-primary)] h-full overflow-scroll w-[230px]">
                    <HamburgerMenuContent />
                </div>
            </Drawer>
        </>
    )
}

export default HamburgerMenu
