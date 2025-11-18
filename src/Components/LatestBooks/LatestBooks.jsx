import React, { use } from 'react';
import LatestBooksSlider from './LatestBooksSlider';

const booksPromise = fetch('http://localhost:3000/books/latest-books').then(response => response.json())

const LatestBooks = () => {
    const latestBooks = use(booksPromise)

    return (
       <div className='my-10 md:my-20'>
        <div className='px-5'>
            <h1 className="text-4xl font-bold text-center mb-5 text-primary">
            Latest Books
            </h1>
            <p className="text-center text-primary mb-10">
                Discover the newest adventures! Browse the latest additions to our library and find your next favorite story.
            </p>
        </div>
        

        {/* Swiper Slider */}
        <LatestBooksSlider latestBooks={latestBooks}></LatestBooksSlider>
    </div>
    );
};

export default LatestBooks;