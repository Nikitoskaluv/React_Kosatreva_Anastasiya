import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { auth } from '../../services/firebase';
import { useDispatch } from 'react-redux';
import { setUser } from '../../store/profile/actions';
import { useHistory } from "react-router-dom";

export const SignUp = () => {
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
        setError("");

        try {
            let response = await auth.createUserWithEmailAndPassword(email, password);
            console.debug('Firebase singup response:', response);
            dispatch(setUser(response.user))
            history.push('/profile');
        } catch (error) {
            console.error(error)

            setError(error.message);
        }
    }

    return (
        <div className='registration_container'>
            <h1>Регистрация</h1>
            <Box
                component="form"
                sx={{
                    '& .MuiTextField-root': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="off"
                onSubmit={handleSubmit}
            >
                <div> <TextField
                    required
                    id="outlined-required"
                    label="Обязательно"
                    type="email"
                    defaultValue="E-mail"
                    onChange={handleEmailChange}
                />
                    <TextField
                        id="outlined-password-input"
                        label="Password"
                        type="password"
                        autoComplete="current-password"
                        onChange={handlePassChange}
                    /></div>

                <Button variant="outlined" type="submit" >Подтвердить</Button>
                <div>
                    {error && <p>{error}</p>}
                </div>
                <hr />
                <p>
                    Уже зарегистрированы? <Link to="/login">Войти</Link>
                </p>

            </Box>

        </div>
    )
}
