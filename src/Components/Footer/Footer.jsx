import React, { useContext } from 'react';
import { AuthContext } from '../../Context/AuthProvider';
import { Link } from 'react-router';
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebook, FaYoutube, FaYoutubeSquare } from 'react-icons/fa';

const Footer = () => {

    const {user} = useContext(AuthContext)


    return (
        <div>
            <footer className="bg-base-100 text-primary p-6 text-center border-t-3 border-t-accent py-20">
                <p className='mb-5'>© 2025 The Book Haven. All rights reserved.</p>

                <ul className="flex justify-center gap-4 mt-2">
                    <li><a href=""><FaXTwitter /></a></li>
                    <li><a href=""><FaYoutube/></a></li>
                    <li><a href=""><FaFacebook/></a></li>
                    
                </ul>

                <ul className="flex justify-center gap-4 mt-3">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/all-books">All Books</Link></li>
                    {user && <li><Link to="/add-book">Add Book</Link></li>}
                    {user && <li><Link to="/my-books">My Books</Link></li>}
                    {!user && <li><Link to="/auth/login">Login</Link></li>}
                </ul>
                <p className="mt-5 italic">“Every story matters. Keep exploring.”</p>
            </footer>
        </div>
    );
};

export default Footer;