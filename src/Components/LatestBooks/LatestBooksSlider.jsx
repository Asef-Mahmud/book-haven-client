import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";

const LatestBooksSlider = ({latestBooks}) => {
    
    return (
        <div>
            <Swiper
                effect="coverflow"
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={3}
                loop={true}
                navigation={true}
                coverflowEffect={{
                    rotate: 30,
                    stretch: 0,
                    depth: 200,
                    modifier: 1,
                    slideShadows: false,
                }}
                modules={[Navigation, EffectCoverflow]}
                className="w-full max-w-5xl mx-auto py-10"
                >
                {latestBooks.map((book) => (
                    <SwiperSlide
                    key={book._id}
                    className="w-[180px] sm:w-[200px] md:w-[260px]"
                    >
                    <img
                        src={book.coverImage}
                        alt={book.title}
                        className="rounded-xl shadow-lg mx-auto hover:scale-105 duration-300 h-48 md:h-64 object-cover"
                    />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default LatestBooksSlider;