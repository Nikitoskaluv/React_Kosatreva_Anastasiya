import { List, ListItem, ListItemText, Button } from '@material-ui/core';
import DeleteIcon from '@mui/icons-material/Delete'
import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import IconButton from '@mui/material/IconButton';



export const ChatList = ({ chats, createNewChat, removeChat }) => {
    return (
        <Fragment>
            <Button variant="outlined" color="secondary" size="medium" style={{
                marginLeft: '20px'
            }}
                onClick={(ev) => createNewChat(ev)}>
                Добавить Чат
            </Button>
            <List >
                {chats.map((chat) => {
                    return (
                        <ListItem
                            key={chat.id}  >
                            <Link to={`/chats/${chat.id}`} style={{
                                textDecoration: 'none',
                                color: "Black",
                            }}>
                                <ListItemText primary={chat.name}>
                                </ListItemText>
                            </Link>
                            <IconButton aria-label="delete" style={{ marginLeft: '20px' }}
                                onClick={(e) => removeChat(e, chat.id)}>
                                <DeleteIcon />
                            </IconButton>
                        </ListItem>
                    )
                })}
            </List>
        </Fragment>

    );
}






