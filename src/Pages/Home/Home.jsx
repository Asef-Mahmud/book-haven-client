import React from 'react';
import About from '../../Components/About/About';
import Banner from '../../Components/Banner/Banner';


const Home = () => {
    return (
        <>
        <header>
            <Banner></Banner>
        </header>

        <section className='max-w-[1600px] mx-auto'>
            
        </section>


        {/* About the Book haven */}
        <section className='max-w-[1600px] mx-auto'>
            <About></About>
        </section>
    </>
  );
};

export default Home;