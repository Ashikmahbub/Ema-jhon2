import React, { createContext} from 'react';
import app from '../Firebase/firebase.init';
import {createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword} from 'firebase/auth';
 
 export const AuthContext = createContext();
 const auth = getAuth(app);

 
 
const UserContext = ({children}) => {
    const [user,setUser] =[];
    const createUser = (email,password) =>{
        return  createUserWithEmailAndPassword(auth,email,password)
    }
    const loginUser =(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password);
    }
    const authInfo = {user,createUser,loginUser}
    return (
        <AuthContext.Provider value={authInfo}>
            {children}

        </AuthContext.Provider>
    );
 };
 
 export default UserContext;