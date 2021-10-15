import React, { useEffect } from 'react';
import { useState } from 'react';
import initialAuthentication from '../Firebase/Firebase.init';
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged, createUserWithEmailAndPassword, sendEmailVerification, updateProfile } from "firebase/auth";

// call firebaseconfig
initialAuthentication();

const useFirebase = () => {
    const googleProvider = new GoogleAuthProvider();
    const auth = getAuth();

    const [user, setUser] = useState();
    const [name, setName] = useState('')
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const googleLogin = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                console.log(result.user)
                setUser(result.user)
            })
            .catch(error => { })
    };

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            }
        });
    }, []);

    const logOut = () => {
        signOut(auth)
            .then(() => {
                setUser({})
            })
    };

    const nameOnBlur = e => {
        setName(e.target.value)
    }

    const handleSignUp = e => {
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                // Email verification
                sendEmailVerification(auth.currentUser)
                    .then(result => {
                        console.log(result);
                    });
                // set user name
                updateProfile(auth.currentUser, {
                    displayName: name
                })
                    .then(result => { })
            }).catch(error => { })
    }

    return {
        user,
        googleLogin,
        logOut,
        nameOnBlur,
        handleSignUp
    };
};

export default useFirebase;