import { List, ListItem, ListItemText } from '@material-ui/core';
import React from 'react';

export const ChatList = () => {
    const chats = [
        {
            name: "Chat1",
            id: "1"
        },
        {
            name: "Chat2",
            id: "2"
        },
        {
            name: "Chat3",
            id: "3"
        },
        {
            name: "Chat4",
            id: "4"
        },
    ];

    return (
        <List >
            {chats.map((chat) => {
                return (
                    <ListItem
                        key={chat.id}>
                        <ListItemText primary={chat.name}>
                        </ListItemText>
                    </ListItem>
                )
            })}
        </List>
    );
}