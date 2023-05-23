import React, { createContext, useEffect, useState} from 'react';
import app from '../Firebase/firebase.init';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut} from 'firebase/auth';
 
 export const AuthContext = createContext();
 const auth = getAuth(app);

 
 
const UserContext = ({children}) => {
    const [user,setUser] =useState(null);
    const [loading,setLoading] = useState(true);
     const createUser = (email,password) =>{
        return  createUserWithEmailAndPassword(auth,email,password)
    }
    const loginUser =(email,password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password);
         
    }
    const logOut =() =>{
        setLoading(true);
        return signOut(auth);
    }
    useEffect( () =>{
      const unSubscribe =  onAuthStateChanged(auth,currentUser =>{
            
            
        
            setUser(currentUser);
            setLoading(false);

          
        })
        return () => unSubscribe();

    })
    const authInfo = {user,createUser,loginUser,logOut,loading}
    return (
        <AuthContext.Provider value={authInfo}>
            {children}

        </AuthContext.Provider>
    );
 };
 
 export default UserContext;