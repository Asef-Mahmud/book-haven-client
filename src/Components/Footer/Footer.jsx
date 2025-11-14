import React, { useContext } from 'react';
import { AuthContext } from '../../Context/AuthProvider';
import { Link } from 'react-router';
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebook, FaYoutube, FaYoutubeSquare } from 'react-icons/fa';
import logo from '../../assets/bookLogo.jpg'

const Footer = () => {

    const {user} = useContext(AuthContext)


    return (
        <div>
            <footer className="bg-base-100 text-primary p-5 text-center border-t-4 border-t-primary py-20 font-bold" data-aos="fade-up">
                <img className='mx-auto mb-4 w-10 md:w-15 object-cover rounded-full border-2 border-yellow-950 tracking-wide transition-all duration-300 hover:scale-110 hover:text-primary' src={logo} alt="Logo of the Company" />
                <p className='mb-5'>© 2025 The Book Haven. All rights reserved.</p>

                <ul className="flex justify-center gap-4 mt-2">
                    <li><a href="https://x.com/" target='_blank'><FaXTwitter className='w-6 h-6 opacity-75 hover:opacity-100 hover:scale-125 transition-all duration-300'/></a></li>
                    <li><a href="https://www.youtube.com/" target='_blank'><FaYoutube className='w-6 h-6 opacity-75 hover:opacity-100 hover:scale-125 transition-all duration-300'/></a></li>
                    <li><a href="https://www.facebook.com/" target='_blank'><FaFacebook className='w-6 h-6 opacity-75 hover:opacity-100 hover:scale-125 transition-all duration-300'/></a></li>
                    
                </ul>

                <ul className="flex flex-col md:flex-row justify-center gap-4 mt-3">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/all-books">All Books</Link></li>
                    {user && <li><Link to="/add-book">Add Book</Link></li>}
                    {user && <li><Link to="/my-books">My Books</Link></li>}
                    {!user && <li><Link to="/auth/login">Login</Link></li>}
                </ul>
                <p className="mt-5 italic text-sm opacity-75">“Every story matters. Keep exploring.”</p>
            </footer>
        </div>
    );
};

export default Footer;