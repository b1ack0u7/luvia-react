import React from 'react';

export const Sidebar = () => {

    return (
        <div className="sidebar fixed top-0 bottom-0 lg:left-0 p-2 px-6 w-[300px] overflow-y-auto text-center bg-gray-900">
            <div className="text-gray-100 text-xl">
                <div className='p-2.5 mt-1 flex items-center justify-between'>
                    <div className='flex items-center'>
                        <i className='bi bi-app-indicator px-2 py-1 bg-blue-600 rounded-md'></i> 
                        <h1 className='font-bold text-gray-200 text-[15px] ml-3'>Menu</h1>    
                    </div>

                    <i className='bi bi-x ml-20 cursor-pointer lg:hidden'></i>
                </div>
                <hr className='my-2 border-gray-600'/>
            </div>

            {/* <div className='p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white'>
                <i className='bi bi-house-door-fill'></i>
                <span className='text-[15px] ml-4 text-gray-200'>Inicio</span>
            </div> */}

            <div className=' mt-3 flex justify-between'>
                <div className='p-2.5 pl-4 mr-4 flex w-full rounded-md cursor-pointer hover:bg-blue-600/70 text-white'>
                    <i className='bi bi-house-door-fill'></i>
                    <span className='text-[15px] ml-4 text-gray-200'>Inicio</span>
                </div>

                <div className='w-[4px] h-auto my-2 rounded-lg bg-red-400'/>
            </div>

            <div className=' mt-3 flex justify-between'>
                <div className='p-2.5 pl-4 mr-4 flex w-full rounded-md cursor-pointer hover:bg-blue-600/70 text-white'>
                    <i className='bi bi-search'></i>
                    <span className='text-[15px] ml-4 text-gray-200'>Buscar</span>
                </div>

                <div className='w-[4px] h-auto my-2 rounded-lg bg-red-400'/>
            </div>

            <hr className='my-2 border-gray-600'/>            
        </div>
    )
};
