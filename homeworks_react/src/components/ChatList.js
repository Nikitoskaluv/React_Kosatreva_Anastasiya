import { List, ListItem, ListItemText } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';


export const ChatList = ({ chats }) => {

    return (
        <List >
            {chats.map((chat) => {
                return (

                    <ListItem
                        key={chat.id}  >
                        <Link to={`/chats/${chat.id}`} style={{
                            textDecoration: 'none',
                            color: "Black"
                        }}>
                            <ListItemText primary={chat.name}>
                            </ListItemText>
                        </Link>
                    </ListItem>


                )
            })}
        </List>

    );
}






