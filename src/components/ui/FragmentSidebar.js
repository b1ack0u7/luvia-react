import React from 'react';
import { NavLink } from 'react-router-dom';

export const FragmentSidebar = ({path, text, icon}) => {

    return (
        <li>
            <NavLink to={path} className={({isActive}) => 'flex group ' + (isActive ? 'text-[#2341e9]' : 'text-[#959595]')}>
                <i className={`${icon} text-[20px] group-hover:text-[#238AE9] disabled:bg-red-400`}/>
                <p className='ml-4 text-[17px] 2xl:text-medium group-hover:text-[#565656]'>{text}</p>
            </NavLink>
        </li>   
    )
}
