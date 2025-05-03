import React, { useState, useEffect } from 'react';
import Lottie from 'lottie-react';

interface CategoryFlexBoxComponentProps {
  title: string;
  animationPath: string; // this should be a public URL or public folder path
}

const CategoryFlexBoxComponent: React.FC<CategoryFlexBoxComponentProps> = ({ title, animationPath }) => {
  const [isClicked, setIsClicked] = useState(false);
  const [animationData, setAnimationData] = useState<string>("");

  const handleClick = () => {
    setIsClicked(true);
    setTimeout(() => setIsClicked(false), 300);
  };

  useEffect(() => {
    const loadAnimation = async () => {
      try {
        const response = await fetch(animationPath);
        const data = await response.json();
        setAnimationData(data);
      } catch (error) {
        console.error('Error loading Lottie animation:', error);
      }
    };

    loadAnimation();
  }, [animationPath]);

  return (
    <button
      className={`w-1/2 h-[9rem] rounded-lg flex flex-col items-center hover:scale-105 duration-500 relative overflow-hidden p-0 ${isClicked ? 'animate-click' : ''}`}
      tabIndex={0}
      onClick={handleClick}
      onKeyDown={(e) => e.key === 'Enter' && handleClick()}
    >
      {animationData && <Lottie animationData={animationData} loop />}
      
      <h2 className='w-full text-lg tracking-tighter py-1.5 font-black bg-[var(--grid-box)] absolute text-[var(--text-primary)] -bottom-1 z-10'>
        {title}
      </h2>
      <div className='absolute inset-0 bg-[var(--flex-box)] opacity-30 rounded-lg'></div>
    </button>
  );
};

export default CategoryFlexBoxComponent;
