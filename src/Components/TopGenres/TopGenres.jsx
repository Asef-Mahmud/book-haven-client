import React from 'react';
import Marquee from "react-fast-marquee";

const TopGenres = () => {
    const genres = [
    { name: "Fantasy", img: "/genres/fantasy.jpg" },
    { name: "Mystery", img: "/genres/mystery.jpg" },
    { name: "Romance", img: "/genres/romance.jpg" },
    { name: "Thriller", img: "/genres/thriller.jpg" },
    { name: "Sci-Fi", img: "/genres/scifi.jpg" },
    { name: "Adventure", img: "/genres/adventure.jpg" },
  ];
    return (
     <div className="bg-accent-content text-accent py-6 rounded-xl shadow-lg">
      <h2 className="text-4xl font-bold mb-4 text-center">Top Genres</h2>

      <Marquee gradient={false} speed={40} pauseOnHover={true}>
        {genres.map((genre, index) => (
          <div
            key={index}
            className="mx-6 flex flex-col items-center hover:scale-105 transition-transform duration-300"
          >
            <img
              src={genre.img}
              alt={genre.name}
              className="w-24 h-24 rounded-full object-cover border-2 border-secondary shadow-md"
            />
            <p className="mt-2 font-semibold">{genre.name}</p>
          </div>
        ))}
      </Marquee>
    </div>
    );
};

export default TopGenres;