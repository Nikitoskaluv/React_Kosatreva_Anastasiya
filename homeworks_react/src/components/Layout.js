import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';


const navigation = [
    {
        path: '/',
        title: 'Home',
    },
    {
        path: '/profile',
        title: 'Profile',
    },
    {
        path: '/chats',
        title: 'Chats',
    },
    {
        path: '/news',
        title: 'News',
    },
    {
        path: '/signup',
        title: 'Registration'
    },
    {
        path: '/login',
        title: 'LOGIN'
    },



]

export default function Layout({ children }) {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static"  >
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} >
                        <div className="linkBox">
                            {navigation.map(({ title, path }) => {
                                return (<Link key={title} style={{
                                    textDecoration: 'none',
                                    color: "#fff"
                                }} to={path}>{title}</Link>)
                            })}
                        </div>
                    </Typography>
                </Toolbar>
            </AppBar>
            <div>{children}</div>

        </Box >


    );
}

