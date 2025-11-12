import React from 'react';
import Navbar from '../Components/Navbar/Navbar';
import { Outlet } from 'react-router';
import Footer from '../Components/Footer/Footer';
import { Toaster } from 'react-hot-toast';

const Root = () => {
    return (
        <div className='font'>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Toaster position="bottom-right" reverseOrder={false}/>
            <Footer></Footer>
        </div>
    );
};

export default Root;