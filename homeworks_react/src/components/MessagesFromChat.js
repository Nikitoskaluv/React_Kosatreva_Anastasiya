
import React, { useState, useEffect, useCallback, useRef } from "react";
import { TextField, Button, } from '@material-ui/core';
import { Redirect, useParams } from "react-router";




const MessagesFromChat = ({ chats }) => {
    const { chatId } = useParams();
    console.log("args", chatId);
    const [messageList, setMessageList] = useState([]);
    const [text, setText] = useState('');
    const [name, setName] = useState('');

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


    const sendMessage = useCallback((author, message) => {
        const copyMessageList = [...messageList]
        copyMessageList.push({
            name: author,
            text: message
        })
        setMessageList(copyMessageList);
    }, [messageList]);


    const clearForm = () => {
        setName('');
        setText('')
    }

    useEffect(() => {
        const objectToCheck = messageList[messageList.length - 1];
        if (messageList.length === 0) {
            return
        }
        else if (objectToCheck.name === "Чат-бот") {
            return
        } else {
            const timerBot = setTimeout(() => {
                sendMessage("Чат-бот", `Привет ${objectToCheck.name}`)
            }, 2000);
            return () => {
                clearTimeout(timerBot);
            }
        }
    }, [messageList, sendMessage]);


    if (!chats.find((ch) => ch && ch.id === chatId)) {
        return <Redirect to='/chats' />
    }

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
            <div className="messageField">
                <h2>

                </h2>
                <ul className="messageBlock">
                    {messageList.map((message, index) => {
                        return <li key={index}><h3>{message.name}</h3><p>{message.text}</p></li>
                    })}
                </ul>

            </div>

        </div>)
}


export default MessagesFromChat;

