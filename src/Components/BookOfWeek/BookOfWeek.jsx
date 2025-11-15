import React from 'react';
import weekBook from '../../assets/bookOfWeek.jpg'

const BookOfWeek = () => {
    return (
            <div className="hero bg-base-100 px-5 lg:px-10 font">
                <div className="hero-content flex-col lg:flex-row-reverse" data-aos="fade-bottom">
                    <img
                    src={weekBook}
                    className="w-full lg:max-w-sm mx-auto rounded-lg shadow-2xl"
                    />
                    <div className='mt-3 text-center md::mt-0 md:text-left' data-aos="fade-right">
                    <h1 className="text-4xl font-bold text-primary">Book of the Week</h1>
                    <p className="py-6 text-neutral">
                        "1929: Inside the Greatest Crash in Wall Street History--and How It Shattered a Nation" by Andrew Ross Sorkin, published in October 2025. It's a narrative non-fiction account of the 1929 stock market crash, detailing the euphoria, collapse, and aftermath through the lens of the key figures involved. 
                    </p>
                    <button className="btn btn-primary text-base-100 font-bold rounded-4xl">Get Started</button>
                    </div>
                </div>
            </div>
    );
};

export default BookOfWeek;