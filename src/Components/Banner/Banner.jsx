import React from 'react';
import * as motion from "motion/react-client"
import { Link } from 'react-router';



const Banner = () => {
    return (
        <div className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-linear-to-r from-[#5C4033] to-[#D4A373]">
                <img
                    src="https://plus.unsplash.com/premium_photo-1677567996070-68fa4181775a?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Book Haven Background"
                    className="absolute inset-0 w-full h-full object-cover opacity-30"
                />

                {/* Animated content */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2 }}
                    className="relative z-10 text-center max-w-2xl px-5"
                >
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight drop-shadow-lg">
                    Welcome to <span className="text-accent">The Book Haven</span>
                    </h1>
                    <p className="text-base sm:text-lg text-[#FAF3E0] mb-8 leading-relaxed">
                    Where every page opens a new adventure — explore, collect, and share your favorite stories from our digital library.
                    </p>

                    <div className="flex justify-center gap-5">
                        <Link to="/all-books" className="btn btn-accent text-white font-extrabold px-8 hover:scale-105 duration-300 rounded-4xl">
                            Explore Books
                        </Link>
                        <Link to="/add-book" className="btn btn-outline border-white text-white hover:bg-white hover:text-[#5C4033] px-8 duration-300 rounded-4xl">
                            Add Your Book
                        </Link>
                    </div>
                </motion.div>

                {/* animation */}
                <motion.div
                    initial={{ y: 0 }}
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute bottom-10 text-white text-sm"
                >
                    📖 Start Your Story Today
                </motion.div>
            </div>
    );
};

export default Banner;