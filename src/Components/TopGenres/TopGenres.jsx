import React, { use } from 'react';
import Marquee from "react-fast-marquee";


const dataPromise = fetch('https://book-haven-api-server-psi.vercel.app/all-books').then(response => response.json())

const TopGenres = () => {

  const genres = use(dataPromise)

    return (
     <div className="bg-accent-content text-accent py-10 md:py-20 px-5 md:px-10 shadow-lg">
      <h2 className="text-4xl font-bold text-center mb-5">Genres</h2>
      <p className='text-center mb-15'>Explore a wide variety of genres, each offering a unique adventure and story to enjoy.</p>
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
              className="w-30 h-30 rounded-full object-cover border-2 border-secondary shadow-md"
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