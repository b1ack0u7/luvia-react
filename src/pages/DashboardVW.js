import React from 'react';
import { FragmentDocuments } from '../components/dashboard/FragmentDocuments';
import { FragmentStats } from '../components/dashboard/FragmentStats';
// import { ListFiles } from '../components/documentos/ListFiles';

export const DashboardVW = () => {

    const statsFragment = [
        {text:'PDF', icon:'bi bi-file-earmark-pdf text-[#F03737]', bgcolor:'bg-[#F03737]/30', number:'172', extra:''},
        {text:'Images', icon:'fi fi-rr-picture text-[#37DAF0]', bgcolor:'bg-[#37DAF0]/30', number:'203', extra:'mt-[6px]'},
        {text:'Word', icon:'bi bi-file-earmark-word text-[#146CEF]', bgcolor:'bg-[#146CEF]/30', number:'503', extra:''},
        {text:'Excel', icon:'bi bi-file-earmark-excel text-[#00C714]', bgcolor:'bg-[#00C714]/30', number:'120', extra:''}
    ];

    return (
        <div className='h-screen font-[Poppins] bg-[#F0F0F6]'>
            <h1 className='text-[18px] text-[#494949] font-semibold pt-[3rem] pl-[2rem] pb-[2rem]'>Dashboard</h1>

            <div className='grid place-items-center '>
                <div className='grid grid-cols-4 gap-x-8 pb-[5rem]'>
                    {
                        statsFragment.map(item => (
                            <FragmentDocuments key={item.text} {...item}/>
                        ))
                    }
                </div>

                <FragmentStats />

                {/* <ListFiles /> */}
            </div>
        </div>
    )
}
