import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router';
import logo from '../../assets/bookLogo.jpg'


const Navbar = () => {

    
    const [theme, setTheme] = useState(localStorage.getItem("theme") || "light")


    // Handle Theme
    useEffect(()=>{
        const html = document.querySelector('html')
        html.setAttribute("data-theme", theme)
        localStorage.setItem("theme", theme)
    }, [theme])

    const handleTheme = (checked) => {
        setTheme(checked ? "dark" : "light")
    }


    const links =  <>
        <NavLink to='/' className='nav-item'>Home</NavLink>
        <NavLink to='/all-books' className='nav-item'>All Books</NavLink>
        <NavLink to='/add-book' className='nav-item'>Add Book</NavLink>  
        <NavLink to='/my-books' className='nav-item'>My Books</NavLink>  
    </>

    return (
        <div>
            <div className="navbar shadow-sm px-5 md:px-10 lg:px-15 border-b border-primary">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden px-0">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 z-999 rounded-box mt-3 w-52 p-2 shadow mr-4 gap-3">
                            {
                                links
                            }
                            <div>
                                <input 
                                    onChange={(e)=>handleTheme(e.target.checked)}
                                    type="checkbox"
                                    defaultChecked={localStorage.getItem('theme') === "dark"}
                                    className=" toggle transition-all duration-300 ease-in-out border-primary bg-base-100 text-primary checked:border-primary checked:bg-base-100 checked:text-primary"
                                />
                            </div>
                        </ul>
                    </div>
                    <Link to="/" className="btn btn-ghost text-[16px] md:text-xl text-primary font-mono font-extrabold"><img className='animate-pulse w-5 md:w-10 object-cover rounded-full border-2 border-yellow-950' src={logo} alt="Logo of the Company" />Book-Haven</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 gap-5">
                    {
                        links
                    }
                    </ul>
                </div>
                <div className="navbar-end gap-1 md:gap-3 lg:gap-4">
                    {
                        (
                            <>
                            <Link to='/auth/login' className="btn w-18 md:w-20 lg:w-25 bg-primary rounded-4xl text-white">Login</Link>
                            <Link to='/auth/register' className="btn w-18 md:w-20 lg:w-25 bg-primary rounded-4xl text-white">Register</Link>
                            </>
                        )
                        
                    }
                    <div className='hidden md:block'>
                        <input 
                        onChange={(e)=>handleTheme(e.target.checked)}
                        type="checkbox"
                        defaultChecked={localStorage.getItem('theme') === "dark"}
                        className=" toggle transition-all duration-300 ease-in-out border-primary bg-base-100 text-primary checked:border-primary checked:bg-base-100 checked:text-primary"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;