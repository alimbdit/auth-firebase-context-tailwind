import React, { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from "../firebase/firebase.config";

export const AuthContext = createContext(null);

const auth = getAuth(app);

const googleProvider = new GoogleAuthProvider()

const AuthProviders = ({ children }) => {

  const [loading, setLoading] = useState(true);

    const [user, setUser] = useState(null);
    const logOut = () => {
      return signOut(auth)
    }

    //on Auth state change with subscriber
    //  observe auth state change
    useEffect(()=>{
      const subscriber = onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser)
        setLoading(false)
      })
      return () => {
        subscriber();
      }
    }, [])

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    const googleSignIn = () => {
      return signInWithPopup(auth, googleProvider)
    }

    

  const authInfo = {
    user,
    loading,
    createUser,
    signIn,
    logOut,
    googleSignIn
  }

  return <AuthContext.Provider value={authInfo}>
    {children}
    </AuthContext.Provider>;
};

export default AuthProviders;
