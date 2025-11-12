import React from 'react';
import design from '../../assets/coolbackgrounds-particles-flare.png'
import Loader from '../../Loader/Loader';

const Home = () => {
    return (
        <div style={{ backgroundImage: `url(${design})`}} className='font bg-cover mx-auto max-w-[1600px] py-52'>
            <h1>THIS IS HOME</h1>
            <Loader></Loader>
        </div>
    );
};

export default Home;