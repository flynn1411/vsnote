import React, {useEffect, useState} from "react";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { browserPopupRedirectResolver, browserSessionPersistence, getAuth, onAuthStateChanged, initializeAuth, GoogleAuthProvider } from "firebase/auth";
import {getFirestore} from 'firebase/firestore';
//import * as firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCNO4EJg_3xKaJpLiSdly2jZXIxzFzyNmY",
  authDomain: "vsnotes-86cd8.firebaseapp.com",
  projectId: "vsnotes-86cd8",
  storageBucket: "vsnotes-86cd8.appspot.com",
  messagingSenderId: "632379982667",
  appId: "1:632379982667:web:9cbb68b7c597950ca9dece"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const firestoreDB = getFirestore(firebaseApp);

const authF = initializeAuth(firebaseApp, {
    persistence: browserSessionPersistence,
    popupRedirectResolver: browserPopupRedirectResolver
});

const firebaseAuth = getAuth();
const googleProvider = new GoogleAuthProvider();

export const AuthContext = React.createContext();

export const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        onAuthStateChanged(firebaseAuth, (user)=>{
            if(user){
                const currentUser = user;
                setUser(currentUser)
                //console.log(currentUser);
            }else{
                console.log("No hay usuario")
            }
        })
    }, []);

    return(
        <AuthContext.Provider value={{user, googleProvider, firebaseAuth, firestoreDB, setUser}}>
            {children}
        </AuthContext.Provider>
    );
};