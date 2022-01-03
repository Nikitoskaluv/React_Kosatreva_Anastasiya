
import React, { useState, useEffect, useRef } from "react";
import { TextField, Button, } from '@material-ui/core';
import { useParams } from "react-router";
import { useSelector } from "react-redux";
import { getMessageListFromChats } from '../store/messages/selectors';
import { useDispatch } from "react-redux";
import { addMessageWithThunk } from "../store/messages/actions";
import { MessagesRender } from "./MessagesRender";
import { nanoid } from 'nanoid';

export const createMessage = (name, text) => ({
    author: name,
    message: text,
    id: nanoid(4),
})
export const MessagesFromChat = () => {
    const { chatId } = useParams();
    const [text, setText] = useState('');
    const [name, setName] = useState('');
    const dispatch = useDispatch();
    const messagesFromChat = useSelector(getMessageListFromChats);
    const messagesForRender = messagesFromChat[chatId];



    const inputNameRef = useRef(null);
    useEffect((name) => {
        inputNameRef.current && inputNameRef.current.focus();
    }, [name])

    const onChangeName = (event) => {
        setName(event.target.value)
    }
    const onChangeText = (event) => {
        setText(event.target.value)
    }

    const onSubmit = (event) => {
        event.preventDefault();
        sendMessage(name, text);
        clearForm();
    }


    // const sendMessage = (author, message) => {
    //     const newMessage = createMessage(author, message);
    //     dispatch(addMessage(newMessage, chatId))
    // }
    const sendMessage = (author, message) => {
        dispatch(addMessageWithThunk(chatId, message, author))
    }


    const clearForm = () => {
        setName('');
        setText('')
    }

    // useEffect(() => {
    //     const objectToCheck = messageList[messageList.length - 1];
    //     if (messageList.length === 0) {
    //         return
    //     }
    //     else if (objectToCheck.name === "Чат-бот") {
    //         return
    //     } else {
    //         const timerBot = setTimeout(() => {
    //             sendMessage("Чат-бот", `Привет ${objectToCheck.name}`)
    //         }, 2000);
    //         return () => {
    //             clearTimeout(timerBot);
    //         }
    //     }
    // }, [messageList, sendMessage]);


    // if (!chats.find((ch) => ch && ch.id === chatId)) {
    //     return <Redirect to='/chats' />
    // }




    return (
        <div className="wrapper">
            <form onSubmit={onSubmit} action=''>
                <div className="formWrapper">
                    <TextField id="outlined-name" label="Имя" variant="outlined" required onChange={onChangeName} value={name} className="input" margin="normal"
                        inputRef={inputNameRef}
                    />

                    <TextField id="outlined-text" label="Сообщение" variant="outlined" required onChange={onChangeText} value={text} className="input" margin="normal"
                    />
                    <Button variant="contained" type="submit" color="secondary">Отправить</Button>
                </div>
            </form>
            <MessagesRender list={messagesForRender} />
        </div>)
}


export default MessagesFromChat;

