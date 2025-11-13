import React from 'react';
import weekBook from '../../assets/bookOfWeek.jpg'

const BookOfWeek = () => {
    return (
            <div className="hero bg-base-100 min-h-screen px-5 lg:px-10">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img
                    src={weekBook}
                    className="w-full lg:max-w-sm mx-auto rounded-lg shadow-2xl"
                    />
                    <div className='mt-3 text-center md::mt-0 md:text-left'>
                    <h1 className="text-5xl font-bold text-primary">Book of the Week</h1>
                    <p className="py-6">
                        "1929: Inside the Greatest Crash in Wall Street History--and How It Shattered a Nation" by Andrew Ross Sorkin, published in October 2025. It's a narrative non-fiction account of the 1929 stock market crash, detailing the euphoria, collapse, and aftermath through the lens of the key figures involved. 
                    </p>
                    <button className="btn btn-primary font-bold rounded-4xl">Get Started</button>
                    </div>
                </div>
            </div>
    );
};

export default BookOfWeek;