
import React, { useState, useEffect } from "react";
import { TextField, Button, } from '@material-ui/core';
import { useParams } from "react-router";
import { useSelector } from "react-redux";
import { getMessageListFromChat } from '../store/messages/selectors';
import { useDispatch } from "react-redux";
import { addMessageWithThunk } from "../store/messages/actions";
import { MessagesRender } from "./MessagesRender";
import { nanoid } from 'nanoid';
import { onTrackingAddMessageWithThunk, onTrackingRemoveMessageWithThunk, offTrackingRemoveMessageWithThunk, offTrackingAddMessageWithThunk } from "../store/messages/actions";


export const createMessage = (text) => ({


    message: text,
    id: nanoid(4),
})
export const MessagesFromChat = () => {
    const { chatId } = useParams();
    const [text, setText] = useState('');
    const dispatch = useDispatch();
    const messagesFromChat = useSelector(getMessageListFromChat(chatId));



    const onChangeText = (event) => {
        setText(event.target.value)
    }

    const onSubmit = (event) => {
        event.preventDefault();
        sendMessage(text);
        clearForm();
    }

    const sendMessage = (message) => {
        dispatch(addMessageWithThunk(chatId, message))
    }
    useEffect(() => {
        dispatch(onTrackingAddMessageWithThunk(chatId));
        dispatch(onTrackingRemoveMessageWithThunk(chatId))
        return () => {
            dispatch(offTrackingRemoveMessageWithThunk);
            dispatch(offTrackingAddMessageWithThunk);
        }
    }, [])

    const clearForm = () => {
        setText('')
    }

    return (
        <div className="wrapper">
            <div>Чат:{chatId}</div>
            <form onSubmit={onSubmit} action=''>
                <div className="formWrapper">
                    <TextField id="outlined-text" label="Сообщение" variant="outlined" required onChange={onChangeText} value={text} className="input" margin="normal"
                    />
                    <Button variant="contained" type="submit" color="secondary">Отправить</Button>
                </div>
            </form>
            <MessagesRender list={messagesFromChat} />
        </div>)
}
export default MessagesFromChat;

