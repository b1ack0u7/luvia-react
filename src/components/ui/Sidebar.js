import React from 'react';
import { FragmentSidebar } from './FragmentSidebar';

export const Sidebar = () => {

    const pathData = [
        {key:'1', path:'/dashboard', text:'Dashboard', icon:'fi fi-rr-dashboard'},
        {key:'2', path:'/documents', text:'Documentos', icon:'fi fi-rr-box'},
        {key:'3', path:'/search', text:'Buscar', icon:'fi fi-rr-search'}
    ];

    return (
        <nav className='w-[200px] font-[Poppins]'>
            <p className='text-center font-medium text-black text-[30px] my-4'>Luvia</p>

            <div className='bg-slate-400/40 w-[90%] mx-auto h-[2px] rounded-lg'/>
            <div className='grid justify-center w-full mt-6'>
                <ul className='h-full grid place-content-center gap-y-8'>
                    {
                        pathData.map(item => (
                            <FragmentSidebar key={item.key} {...item}/>
                        ))
                    }
                </ul>
            </div>
        </nav>
    )

    // const [isOpen, setIsOpen] = useState(true);
    // const pathsArr = [
    //     {icon: "bi-house-door-fill", name: "Inicio", path: "/home", key: 1},
    //     {icon: "bi-search", name: "Buscar", path: "/search", key: 2},
    //     {icon: "bi-bar-chart-line-fill", name: "Status", path: "/stats", key: 3}
    // ];

    // return (
    //     <div className={`sidebar p-2 text-center bg-gray-900 duration-200 ${ isOpen ? "w-[230px] px-3" : "w-[70px]"}`}>
    //         <div className="text-gray-100 text-xl">
    //             {
    //                 isOpen ? 
    //                     <div className='p-2.5 mt-1 flex items-center justify-between'>
    //                         <div className='flex items-center'>
    //                             <i className='bi bi-app-indicator px-2 py-1 bg-blue-600 rounded-md'></i> 
    //                             <h1 className='font-bold text-gray-200 text-[15px] ml-3'>Menu</h1>    
    //                         </div>
                            
    //                         <button className='bi bi-list cursor-pointer transition duration-200 hover:text-green-400' onClick={() => setIsOpen(!isOpen)}/>
    //                     </div>
    //                 :
    //                     <button className='bi bi-list my-[16px] cursor-pointer transition duration-200 hover:text-green-400' onClick={() => setIsOpen(!isOpen)}/>
    //             }
    //         </div>

    //         <hr className='my-2 border-gray-600'/>
            
    //         {
    //             pathsArr.map( path => (
    //                 <IconFragment key={path.key} {...path} isOpen={isOpen} />
    //             ))
    //         }

    //         <hr className='my-2 border-gray-600'/>         
    //     </div>
    // )
};
