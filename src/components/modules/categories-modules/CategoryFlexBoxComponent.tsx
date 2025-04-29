import React,{useState} from 'react';
import _Image from "/new-vectors/entertain.jpg";

interface CategoryFlexBoxComponentProps {id: number|string,title: string;}

const CategoryFlexBoxComponent: React.FC<CategoryFlexBoxComponentProps>=({title}) => {


    const [isClicked,setIsClicked]=useState(false);

    const handleClick=() => {
        setIsClicked(true);
        setTimeout(() => setIsClicked(false),300);
    };


    return (
        <div className={`w-1/2 h-[9rem] rounded-lg flex flex-col items-center hover:scale-105 duration-500 relative overflow-hidden p-0 ${isClicked? 'animate-click':''}`} onClick={handleClick}>
            <img src={_Image} alt="image" className='object-cover rounded-lg w-full h-full aspect-video brightness-50' />
            <h2 className='w-full text-lg tracking-tighter py-1.5 font-black bg-[var(--grid-box)] absolute text-[var(--text-primary)] -bottom-1 z-10'>
                {title}
            </h2>
            <div className='absolute inset-0 bg-[var(--flex-box)] opacity-30 rounded-lg'></div>
        </div>
    );
};

export default CategoryFlexBoxComponent;
