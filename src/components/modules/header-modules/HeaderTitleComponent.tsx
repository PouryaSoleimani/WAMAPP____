import React from 'react'
interface HeaderTitleComponentProps {
    textSize: string,
    title: string
}

const HeaderTitleComponent: React.FC<HeaderTitleComponentProps> = ({ title, textSize }) => {
    return (
        <div className='w-full flex justify-center items-center'>
            <h1 className={ `text-white font-black text-${textSize} bg-[var(--pink)] w-full px-4 mx-auto py-4 rounded-lg text-center VazirBold`}>{title}</h1>
        </div >
    )
}

export default HeaderTitleComponent