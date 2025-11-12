import React from 'react';
import { ProgressBar, Triangle } from 'react-loader-spinner';

const Loader = () => {
    return (
        <div className='flex justify-center items-center '>
            <Triangle
                visible={true}
                height="80"
                width="80"
                color="#5C4033"
                ariaLabel="triangle-loading"
                wrapperStyle={{}}
                wrapperClass=""
            />
        </div> 
    );
};

export default Loader;