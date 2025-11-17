import React, { use } from 'react';
import Marquee from "react-fast-marquee";


const dataPromise = fetch('http://localhost:3000/all-books').then(response => response.json())

const TopGenres = () => {

  const genres = use(dataPromise)

    return (
     <div className="bg-accent-content text-accent py-20  px-10 shadow-lg">
      <h2 className="text-4xl font-bold text-center mb-10">Top Genres</h2>
      <div className='border-l-4 border-r-4'>
        <Marquee gradient={false} speed={40} pauseOnHover={true}>
        {genres.map((genre, index) => (
          <div
            key={index}
            className="mx-6 flex flex-col items-center hover:scale-105 transition-transform duration-300"
          >
            <img
              src={genre.coverImage}
              alt={genre.genre}
              className="w-24 h-24 rounded-full object-cover border-2 border-secondary shadow-md"
            />
            <p className="mt-2 font-semibold">{genre.genre}</p>
          </div>
        ))}
      </Marquee>
      </div>
      
    </div>
    );
};

export default TopGenres;