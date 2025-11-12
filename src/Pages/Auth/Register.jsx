import React, { useContext, useState } from 'react';
import { AuthContext } from '../../Context/AuthProvider';
import { RiLockPasswordFill } from 'react-icons/ri';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router';
import { Toaster } from 'react-hot-toast';
import { bookToast } from '../../Utils/booktoast';
import design from '../../assets/coolbackgrounds-particles-flare.png'



    const quotes = [
            "Even the greatest heroes fumble on the first page. Try again, reader.",
            "Passwords, like plots, need a twist — uppercase and lowercase!",
            "A strong story begins with a strong password.",
            "Even the best authors edit their first drafts. So can you."
        ];


const Register = () => {

    const {setUser, createUser, googleSignInUser, updateUser} = useContext(AuthContext)

    // States
    const [passVisible, setPassVisible] = useState(false)
    const [error, setError] = useState('')
    const [errorQuote, setErrorQuote] = useState('')

    // Navigate
    const navigate = useNavigate()

    // Register
    const handleRegister = (event) => {
        event.preventDefault()
        const form = event.target;
        
        const userName = form.name.value;
        const image = form.image.value;
        const email = form.email.value;
        const password = form.password.value;

        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;

        if(!passwordRegex.test(password)){
            setError('Password must be at least 6 characters long and include both uppercase and lowercase letters.')
            const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
            setErrorQuote(randomQuote)
            return
        }

        // CREATE USER
        createUser(email, password)
        .then(result => {
            const user = result.user;
            // Update USER INFO
            updateUser({displayName: userName, photoURL: image}).then(()=> {
                setUser({...user, displayName: userName, photoURL: image})
                // console.log(user)
            })
            .catch(error => {
            bookToast.error(error)
            setUser(user)
            })
            bookToast.success('Registration Successful!')
            setTimeout(()=> navigate('/'), 1000)
            
            // console.log(user)
        })

        .catch(error => {
            const errorMessage = error.message;
            bookToast.error(errorMessage)
        })

        event.target.reset()
    }


    // Google Sign In
    const handleGoogleSignIn = () => {
        googleSignInUser()
        .then((result) => {
            const user = result.user;
            setUser(user)
            console.log(user)
            bookToast.success('Google SignUp successful!')
        })
        
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            bookToast.error(errorCode, errorMessage)
        })

    }
    


    // Show Password
    const handleShowPassword = () => {
        setPassVisible(!passVisible)
    }

    return (
        <div className='flex flex-col gap-3 lg:flex-row lg:gap-0 justify-center items-center py-20 px-5 md:px-10 lg:px-15 mx-auto max-w-[1600px]' style={{ backgroundImage: `url(${design})`}}>
                <div className="card w-full max-w-sm h-auto shrink-0 shadow-2xl border-2 border-secondary py-10 p-5 bg-primary rounded-l-4xl">
                    <h2 className='font-semibold text-2xl text-center text-white mt-20'>Register Your Account</h2>
                    <p className='p-10 border-l-4 text-secondary bg-neutral mt-10 mb-20 leading-relaxed text-justify'>Every great story begins with a single page… and every great reader begins with a single account. Register now to open the doors to your own library and keep your favorite tales at your fingertips</p>

                    {
                            errorQuote && <p className='text-sm p-5 mb-6 mt-0 border-t-4 font-bold border-error text-error bg-neutral italic'>"{errorQuote}"</p>
                    }

                </div>

            <div className="card w-full max-w-sm max-h-[700px] shrink-0 shadow-2xl border-2 rounded-r-4xl border-secondary lg:border-l-secondary lg:border-t-secondary  lg:border-white lg:rounded-r-4xl py-10 lg:border-r-20 p-5 bg-primary">

                <div className="card-body flex justify-between">
                    <form onSubmit={handleRegister}>
                        <fieldset className="fieldset">

                        {/* User Name */}
                        <label className="label text-white">User Name</label>
                        <input type="text" className="input outline-white border-white" name='name' placeholder="Your Name" required/>

                        {/* Photo Url */}
                        <label className="label text-white">Photo URL</label>
                        <input type="text" className="input outline-white border-white" name='image' placeholder="Your Photo URL"/>
                        
                        {/* Email */}
                        <label className="label text-white">Email</label>
                        <input type="email" className="input outline-white border-white" name='email' placeholder="Your Email" required/>

                        {/* Password */}
                        <label className="label text-white">Password</label>
                        <div>
                             <input 
                             type= {passVisible ? "text" : "password"} 
                             className="input outline-white border-white relative" 
                             name='password' 
                             placeholder="Your Password" 
                             required/>

                            <button type='button' onClick={handleShowPassword} className='btn btn-ghost btn-xs absolute right-12 top-78 '>{passVisible ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}</button>
                        </div>
                       

                        {
                            error && <p className='text-sm py-3 text-white'><RiLockPasswordFill className='mb-1'></RiLockPasswordFill>{error}</p>
                        }
                        <button type='submit' className="btn btn-neutral mt-4 text-secondary font-bold">Register</button>

                        {/* Google */}
                            <button onClick={handleGoogleSignIn} className="btn mt-3 bg-white hover:bg-base-200 text-black border-[#e5e5e5]">
                                <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                                Continue with Google
                            </button>

                        <p className='font-semibold text-center pt-5 text-white'>Already Have An Account ? <Link className='text-white hover:underline hover:font-extrabold' to='/auth/login'>Login</Link></p>
                        
                        </fieldset>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;