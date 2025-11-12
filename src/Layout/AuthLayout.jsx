import React from 'react';
import Navbar from '../Components/Navbar/Navbar';
import { Outlet } from 'react-router';
import Footer from '../Components/Footer/Footer';
import { Toaster } from 'react-hot-toast';

const AuthLayout = () => {
    return (
        <div className='font'>
            <Outlet></Outlet>
            <Toaster position="bottom-right" reverseOrder={false}/>
        </div>
    );
};

export default AuthLayout;