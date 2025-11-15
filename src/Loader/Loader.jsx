import React from 'react';
import { ProgressBar, Triangle } from 'react-loader-spinner';

const Loader = () => {
    return (
        <div className='flex min-h-screen items-center justify-center'>
            <Triangle
                visible={true}
                height="100"
                width="100"
                color="var(--color-primary)"
                ariaLabel="triangle-loading"
                wrapperStyle={{}}
                wrapperClass=""
            />
        </div> 
    );
};

export default Loader;