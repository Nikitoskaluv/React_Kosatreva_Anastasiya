import { List, ListItem, ListItemText, Button } from '@material-ui/core';
import DeleteIcon from '@mui/icons-material/Delete'
import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { deleteChat, addChat } from '../store/chats/actions';
import IconButton from '@mui/material/IconButton';
import { useDispatch } from 'react-redux';
import { getLastChat } from '../store/chats/selectors';
import { useSelector } from 'react-redux';
import { removeMessagesById } from '../store/messages/actions';


export const ChatList = ({ chats }) => {
    const dispatch = useDispatch();
    const chatList = useSelector(getLastChat);

    const removeChat = (e, chatId) => {
        dispatch(deleteChat(chatId));
        dispatch(removeMessagesById(chatId));
    }


    const createNewChat = () => {
        let lastChatId = +chatList.id
        const chatName = `Чат ${lastChatId + 1}`
        const newChat = {
            id: lastChatId + 1,
            name: chatName
        }

        dispatch(addChat(newChat));
    }

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






