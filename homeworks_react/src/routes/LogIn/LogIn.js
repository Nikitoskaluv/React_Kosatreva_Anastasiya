import * as React from 'react';
// import Box from '@mui/material/Box';
// import TextField from '@mui/material/TextField';
// import Button from '@mui/material/Button';
// import { Link } from 'react-router-dom';
import { useState } from 'react';
import { auth } from '../../services/firebase';
import firebase from 'firebase';
import { useDispatch } from 'react-redux';
import { setUser } from '../../store/profile/actions';
import { useHistory } from "react-router-dom";
import { LoginForm } from './LoginFormRender';





export const LogIn = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const dispatch = useDispatch();
    const history = useHistory()
    const handlePassChange = (e) => {

        setPassword(e.target.value);
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('submit')
        setError("");

        if (!email.length && !password.length) {
            return
        }
        try {
            let responseLogin = await auth.signInWithEmailAndPassword(email, password);
            dispatch(setUser(responseLogin.user))
            history.push('/profile');
        } catch (error) {
            setError(error.message);
        }
    };

    const logOut = async () => {
        try {
            await firebase.auth().signOut();
            dispatch(setUser(null))
        } catch (error) {
            setError(error);
        }
    }

    return (
        <LoginForm
            handleSubmit={handleSubmit}
            logOut={logOut}
            handlePassChange={handlePassChange}
            handleEmailChange={handleEmailChange}
            error={error}
        />
    )
}