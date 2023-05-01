import React from 'react';
import Header from '../Shared/Header';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
    return (
        <div className='bg-gray-100'>
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;