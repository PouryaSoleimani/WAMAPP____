import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import Menu, { MenuProps } from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { BiPlus } from 'react-icons/bi'
import { CiCircleCheck } from 'react-icons/ci';

const StyledMenu = styled((props: MenuProps) => (
    <Menu
        elevation={0}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center', }}
        transformOrigin={{ vertical: 'top', horizontal: 'center', }}
        {...props}
    />
))(({ theme }) => ({
    '& .MuiPaper-root': {
        borderRadius: 20,
        marginTop: theme.spacing(1),
        border: "1px solid lightgray",
        minWidth: "90%",
        color: 'rgb(55, 65, 81)',
        padding: "10px 4px",
        boxShadow: 'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
        '& .MuiMenu-list': { padding: '0 0', },
        '& .MuiMenuItem-root': {
            '& .MuiSvgIcon-root': { fontSize: 18, color: theme.palette.text.secondary, marginRight: theme.spacing(1.5), },
            '&:active': {
                backgroundColor: alpha(theme.palette.primary.main, theme.palette.action.selectedOpacity,),
            },
        },
        ...theme.applyStyles('dark', {
            color: theme.palette.grey[300],
        }),
    },
}));

// COMPONENT

export function CreditsMenuList() {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLElement>) => { setAnchorEl(event.currentTarget); };
    const handleClose = () => { setAnchorEl(null); };

    return (
        <div className='w-full VazirBold'>
            <button
                id="demo-customized-button"
                aria-controls={open ? 'demo-customized-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
                className="bg-[var(--inner-bg)] w-full p-2 mt-2 rounded-full flex gap-6 items-center VazirLight tracking-tight text-[var(--text-secondary)] cursor-pointer text-sm">
                <BiPlus className="bg-[var(--inner-box-bg)] rounded-full p-1 w-6 h-6 border border-zinc-400" />تعداد اقساط خود را از ۱ تا ۱۲ ماه انتخاب کنید
            </button>
            <StyledMenu
                id="demo-customized-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
            >
                {Array.from({ length: 12 }).map((_, index) => (
                    <MenuItem key={crypto.randomUUID()} onClick={handleClose} disableRipple sx={{ display: "flex", alignItems: "center ", justifyContent: "space-between", bgcolor: "lightgray", margin: "5px", padding: "4px 20px", borderRadius: "30px" }}>
                        <span className='flex items-center justify-start gap-2 tracking-tight'> <CiCircleCheck /> بازبرداخت {(index + 1).toLocaleString()}  ماه </span>
                        <span className='VazirBold'>۸۵۶,۰۰۰ تومان</span>
                    </MenuItem>
                ))}

            </StyledMenu>
        </div >
    );
}

export default CreditsMenuList