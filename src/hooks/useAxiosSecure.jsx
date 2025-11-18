import axios from 'axios';
import React, { useContext, useEffect } from 'react';
import { AuthContext } from '../Context/AuthProvider';
import { bookToast } from '../Utils/booktoast';


const instance = axios.create({
    baseURL: 'https://book-haven-api-server-psi.vercel.app'
})

const useAxiosSecure = () => {
    const {user} = useContext(AuthContext)
    // To reduce memory leak and to avoid repitition Request Interceptor
    // TOKEN In the Header
    useEffect(()=>{

        // request Interceptor
        const requestInterceptor = instance.interceptors.request.use(config => {
            const token = user.accessToken;
            if(token){
                config.headers.authorization = `Bearer ${token}`
            }
        return config
    });


        //Response interceptor
        const responseInterceptor = instance.interceptors.response.use(response => {
            return response;

        },  
        error => {
            if(status = 401 || status === 403){
                bookToast('Error')
            }
        }) 


        
    return() => {
        instance.interceptors.request.eject(requestInterceptor);
        instance.interceptors.response.eject(responseInterceptor);
    }


    },[user])

    return instance
};

export default useAxiosSecure;