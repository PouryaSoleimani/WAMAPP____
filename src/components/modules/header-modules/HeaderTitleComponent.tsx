import React from 'react'
interface HeaderTitleComponentProps {
    title: string
}

const HeaderTitleComponent: React.FC<HeaderTitleComponentProps> = ({title}) => {
    return (
        <div className='w-full flex justify-center items-center'>
            <h1 className='text-white font-black text-3xl bg-[var(--pink)] w-full px-4 mx-auto py-4 rounded-lg text-center'>{title}</h1>
        </div>
    )
}

export default HeaderTitleComponent