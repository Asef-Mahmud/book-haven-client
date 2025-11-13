import React from 'react';
import About from '../../Components/About/About';
import Banner from '../../Components/Banner/Banner';
import TopGenres from '../../Components/TopGenres/TopGenres';
import BookOfWeek from '../../Components/BookOfWeek/BookOfWeek';


const Home = () => {
    return (
        <>
        <header className='max-w-[1600px] mx-auto'>
            <Banner></Banner>
 
        </header>

        {/* TOP GENRES */}
        <section className='max-w-[1600px] mx-auto py-10 lg:py-20'>
            <TopGenres></TopGenres>
        </section>

        {/* Book of the Week */}
        <section className='max-w-[1600px] mx-auto py-10 lg:py-20'>
            <BookOfWeek></BookOfWeek>
        </section>


        {/* About the Book haven */}
        <section className='mx-auto max-w-[1600px]'>
            <About></About>
        </section>
    </>
  );
};

export default Home;