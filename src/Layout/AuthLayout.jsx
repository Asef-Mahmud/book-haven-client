import React from 'react';
import Navbar from '../Components/Navbar/Navbar';
import { Outlet } from 'react-router';
import Footer from '../Components/Footer/Footer';

const AuthLayout = () => {
    return (
        <div className='font'>
            <Outlet></Outlet>
        </div>
    );
};

export default AuthLayout;