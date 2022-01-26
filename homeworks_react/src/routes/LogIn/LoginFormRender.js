import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';


export const LoginFormTestIds = {
    submit: 'LoginForm-submit',
    emailField: 'LoginForm-emailField',
    passwordField: 'LoginForm-passwordField',
    logout: 'LoginForm-logOutButton'
}


export const LoginForm = ({ handleSubmit, logOut, handlePassChange, handleEmailChange, error, setContent }) => {
    return (
        <div className='registration_container'>
            <h1>Войти</h1>

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
                    inputProps={{ 'data-testid': 'LoginForm-emailField' }}
                    required={true}
                    id="outlined-required"
                    label="Обязательно"
                    type="email"
                    defaultValue="E-mail"
                    onChange={handleEmailChange}
                    className="email"
                />
                    <TextField
                        inputProps={{ 'data-testid': 'LoginForm-passwordField' }}
                        id="outlined-password-input"
                        label="Пароль"
                        type="password"
                        autoComplete="current-password"
                        onChange={handlePassChange}
                        className="password"
                    /></div>

                <Button variant="outlined" type="submit" data-testid="LoginForm-submit" >LOGIN</Button>
                <Button variant="outlined" style={{ marginTop: "10px" }} onClick={logOut} data-testid={LoginFormTestIds.logout} className="LogOutBTN">LOGOUT</Button>
                <div>
                    {error && <p>{error}</p>}
                </div>
                <hr />
                <p>
                    Еще не зарегистрированы?  <Link to="/signup">Зарегистрироваться</Link>
                </p>
            </Box>

        </div >)
}