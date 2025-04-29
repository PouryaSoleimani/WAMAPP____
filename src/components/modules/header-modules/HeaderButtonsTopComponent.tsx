const HeaderButtonsTopComponent = () => {
    return (
        <div className='w-full my-3 flex items-center justify-center gap-3'>
            <button className='bg-[var(--header-button-bg)] text-[var(--text-primary)] text-[15px] font-semibold px-5 py-2.5 tracking-tighter rounded-lg hover:bg-zinc-500  hover:text-white duration-500 cursor-pointer'>لیست وام دهنده ها</button>
            <button className='bg-[var(--header-button-bg)] text-[var(--text-primary)] text-[15px] font-semibold px-5 py-2.5 tracking-tighter rounded-lg  hover:bg-[var(--pink)] hover:text-white duration-500 cursor-pointer'>همین حالا شروع کن</button>
        </div>
    );
};

export default HeaderButtonsTopComponent;