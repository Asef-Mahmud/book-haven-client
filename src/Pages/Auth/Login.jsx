import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../../Context/AuthProvider';
import { bookToast } from '../../Utils/booktoast';
import design from '../../assets/coolbackgrounds-particles-flare.png'
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const Login = () => {

    const {user, setUser, googleSignInUser, signInUser} = useContext(AuthContext)

    // Redirects
    const navigate = useNavigate()
    const location = useLocation()

    // Password Visibility
    const [passVisible, setPassVisible] = useState(false)

    
    const handleShowPassword = () => {
        setPassVisible(!passVisible)
    }

    //User Login
    const handleUserLogin = (event) => {

        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        // Login
        signInUser(email, password)
        .then((result)=>{
            const user = result.user
            bookToast.success('Login Successful!')
            setUser(user)
            setTimeout(()=> {navigate(`${location.state ? location.state : '/'}`)}, 1000)
            
        })

        .catch((error)=> {
            const errorCode = error.code;
            const errorMessage = error.message;
            bookToast.error(errorCode, errorMessage)
        })
    }


    // Google Sign In
        const handleGoogleSignIn = () => {
            googleSignInUser()
            .then((result) => {
                const user = result.user;
                setUser(user)
                bookToast.success('Google SignIn successful!')
            })
            
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                bookToast.error(errorCode, errorMessage)
            })
    
        }


    return (
        <div className='flex flex-col gap-3 lg:flex-row lg:gap-0 justify-center items-center py-20 px-5 md:px-10 lg:px-15 mx-auto max-w-[1600px]' style={{ backgroundImage: `url(${design})`}}>
                <div className="card w-full max-w-sm h-auto shrink-0 shadow-2xl border-2 border-secondary py-10 p-5 bg-primary rounded-l-4xl">
                    <h2 className='font-semibold text-2xl text-center text-white mt-20'>Login</h2>
                    <p className='p-10 border-l-4 text-secondary bg-neutral mt-10 mb-20 leading-relaxed text-justify'>Welcome back, reader! Open your library and continue exploring your favorite tales. Log in now to access your books and dive right into the stories you love.</p>
                </div>

            <div className="card w-full max-w-sm max-h-[700px] shrink-0 shadow-2xl border-2 rounded-r-4xl border-secondary lg:border-l-secondary lg:border-t-secondary  lg:border-white lg:rounded-r-4xl py-10 lg:border-r-20 p-5 bg-primary">

                <div className="card-body flex justify-between my-8">
                    <form onSubmit={handleUserLogin}>
                        <fieldset className="fieldset">
                        
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

                            <button type='button' onClick={handleShowPassword} className='btn btn-ghost btn-xs absolute right-12 top-43 '>{passVisible ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}</button>
                        </div>
                       
                       <div className="link-hover text-secondary hover:font-bold cursor-pointer">Forgot password?</div>

                        <button type='submit' className="btn btn-neutral mt-4 text-secondary font-bold">Login</button>

                        {/* Google */}
                            <button onClick={handleGoogleSignIn} className="btn mt-3 bg-white hover:bg-base-200 text-black border-[#e5e5e5]">
                                <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                                Continue with Google
                            </button>

                        <p className='font-semibold text-center pt-5 text-white'>Already Have An Account ? <Link className='text-white hover:underline hover:font-extrabold' to='/auth/register'>Register</Link></p>
                        
                        </fieldset>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;