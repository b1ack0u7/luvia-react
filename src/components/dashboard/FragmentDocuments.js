import React from 'react'

export const FragmentDocuments = ({text, icon, bgcolor, number, extra}) => {
    return (
        <div className='flex flex-col justify-center items-center text-center w-[150px] h-[150px] bg-white rounded-[15px]'>
            <div className={`flex w-[40px] h-[40px] rounded-full ${bgcolor} justify-center items-center mb-5`}> 
                <i className={`${icon} ${extra}`}/>
            </div>

            <p className='font-semibold'>{number}</p>
            <p className='text-[#7D7D7D]'>{text}</p>
        </div>
    )
}
