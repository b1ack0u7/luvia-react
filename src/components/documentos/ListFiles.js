import React, { useEffect, useReducer, useState } from 'react';
import { reducerFilter } from './hooks/reducerFilter';
import { ListItem } from './ListItem';

export const ListFiles = () => {
    const [selected, setSelected] = useState({name: "ID", ascending: true});
    
    const dataArr = [
        {
            id: 0,
            name: "Seguro medico",
            creationDate: "20/01/2020",
            type: "pdf"
        },
        {
            id: 1,
            name: "Documentos",
            creationDate: "20/05/2020",
            type: "pdf"
        },
        {
            id: 2,
            name: "Portafolio digital",
            creationDate: "05/10/2021",
            type: "pdf"
        }
    ];

    const [state, dispatch] = useReducer(reducerFilter, []);
    
    const handleFilter = (tag) => {
        const action = {
            type: 'None',
            payload: dataArr
        }

        switch (tag) {
            case 'ID':
                (selected.ascending ? action.type = 'ID_AS' : action.type = 'ID_DS')
                dispatch(action);
                break;

            case 'NM':
                (selected.ascending ? action.type = 'NM_AS' : action.type = 'NM_DS')
                dispatch(action);
                break;
                
            default:

        }
    }

    useEffect(() => {
        handleFilter(selected.name);
    }, [selected]);
    

    return (
        <div className='flex items-center justify-center w-4/5 p-6 rounded-md bg-white'>
            <div className='grid items-center w-full text-center bg-sky-100'>
                <div className='pb-10 px-6'>
                    <div className='flex place-content-between'>
                        <h1>Documentos</h1>
                        <button>Agregar documento</button>
                    </div>

                    
                    <div className='flex place-content-between bg-sky-200'>
                        <div className=''>
                            <i className='absolute bi bi-search z-20' />

                            <input
                                className='appearance-none h-14 pl-10 rounded z-0'
                                placeholder='Buscar'
                            />
                        </div>

                        <div className='flex'>
                            <p>Categoria</p>
                            <i className='bi bi-funnel'/>
                        </div>
                    </div>
                </div>


                <table className='rounded-md'>
                    <thead className='bg-white border-b-2 border-gray-600'>
                        <tr>
                            <th className='p-3 text-sm font-bold tracking-wide text-gray-500/90'>
                                ID
                                <i 
                                    className={'bi ml-1 cursor-pointer hover:text-sky-300 ' + 
                                        ((selected.name === "ID" && selected.ascending === true) ? 'bi-caret-down-fill' : 'bi-caret-up-fill')
                                    } 
                                    onClick={() => (selected.name === 'ID' ? setSelected({...selected, ascending: !selected.ascending}) : setSelected({name: 'ID', ascending: true}))}
                                />
                            </th>

                            <th className='p-3 text-sm font-bold tracking-wide text-gray-500/90'>
                                Nombre
                                <i 
                                    className={'bi ml-1 cursor-pointer hover:text-sky-300 ' +
                                        ((selected.name === 'NM' && selected.ascending === true) ? 'bi-caret-down-fill' : 'bi-caret-up-fill')
                                    }
                                    onClick={() => (selected.name === 'NM' ? setSelected({...selected, ascending: !selected.ascending}) : setSelected({name: 'NM', ascending: true}))}
                                />
                            </th>

                            <th className='p-3 text-sm font-bold tracking-wide text-gray-500/90'>
                                Fecha de creación
                            </th>

                            <th className='p-3 text-sm font-bold tracking-wide text-gray-500/90'>
                                Tipo
                            </th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            state.map((data) => (
                                <ListItem key={data.id} {...data}/>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
};
