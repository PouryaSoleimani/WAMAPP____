import React,{useState} from 'react';

interface CategoryBoxComponentProps {id: number; title: string; img: string;}

const CategoryGridBoxComponent: React.FC<CategoryBoxComponentProps>=({title,img}) => {

    const [isClicked,setIsClicked]=useState(false);

    const handleClick=() => {
        setIsClicked(true);
        setTimeout(() => setIsClicked(false),300);
    };

    return (
        <div className={`rounded-lg bg-[var(--grid-box)] hover:bg-[var(--gray)] text-[var(--text-primary)] flex flex-col justify-between duration-300 cursor-pointer pb-1 object-fill ${isClicked? 'animate-click':''}`} onClick={handleClick}    >
            <img src={img} alt="Category" width={95} className="rounded-t-lg object-contain w-full h-full" />
            <h2 className="font-semibold tracking-tighter">{title}</h2>
        </div>
    );
};

export default CategoryGridBoxComponent;