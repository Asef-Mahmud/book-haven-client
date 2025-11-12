import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from "../firebase/firebase.init";


export const AuthContext = createContext()

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider()

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)


    // Create User
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // Update user
    const updateUser = (updatedInfo) => {
        return updateProfile(auth.currentUser, updatedInfo);
    }


    // Login User
    const signInUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }


    // Logout User
    const signOutUser = () => {
        setLoading(true)
        return signOut(auth)
    }


    // Google SignIn
    const googleSignInUser = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }

    // Observer State
    
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            setLoading(false)
        })
        return() => {
            unsubscribe()
        }
    }, [])


    const authData = {
        createUser,
        signInUser,
        updateUser,
        signOutUser,
        googleSignInUser,
        user, 
        setUser,
        loading, 
        setLoading
    }


    return (
        <AuthContext.Provider value={authData}>{children}</AuthContext.Provider>
    );
};

export default AuthProvider;

