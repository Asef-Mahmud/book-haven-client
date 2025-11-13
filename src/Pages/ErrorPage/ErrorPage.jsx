import React from 'react';
import error from '../../assets/Error-404 construction worker repair.png'
import { Link } from 'react-router';


const ErrorPage = () => {
    return (
        <div className='p-5 flex flex-col justify-center mx-auto items-center gap-5 py-10 bg-base-100'>
            <img className='w-[480px] h-[400px]' src={error} alt="Error Page" />
            <h2 className='text-4xl font-bold text-error'>Page not Found</h2>
            <Link to='/'><button className='btn btn-primary text-accent rounded-4xl'>Go back</button></Link> 
        </div>
    );
};

export default ErrorPage;