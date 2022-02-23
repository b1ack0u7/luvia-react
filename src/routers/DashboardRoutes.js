import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Sidebar } from '../components/ui/Sidebar';
import { DashboardVW } from '../pages/DashboardVW';
import { DocumentosVW } from '../pages/DocumentosVW';
import { BuscarVW } from '../pages/BuscarVW';

export const DashboardRoutes = () => {
    return (
        <div className='flex h-full'>
            <Sidebar />
            
            <div className='w-full h-full'>
                <Routes>
                    <Route path="dashboard" element={<DashboardVW />} />
                    <Route path="documents" element={<DocumentosVW />} />
                    <Route path="search" element={<BuscarVW />} />

                    <Route path="/" element={<DashboardVW />} />
                </Routes>
            </div>
        </div>
    )
}
