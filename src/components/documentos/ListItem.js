import React from 'react';

export const ListItem = ({id, name, creationDate, type}) => {
    return (
        <tr className='odd:bg-gray-100 even:bg-white'>
            <td className='p-3 text-sm text-gray-700 text-center'>{id}</td>
            <td className='p-3 text-sm text-gray-700 hover:text-blue-600 hover:underline cursor-pointer'>{name}</td>
            <td className='p-3 text-sm text-gray-700'>{creationDate}</td>
            <td className='p-3 text-sm text-gray-700'>{type}</td>
        </tr>
    )
};
