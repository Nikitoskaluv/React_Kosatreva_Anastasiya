import './App.css';
import React, { useState, useEffect } from "react";


const App = (props) => {
  const [messageList, setMessageList] = useState([]);
  const [text, setText] = useState('');
  const [name, setName] = useState('');

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

  const sendMessage = (author, message) => {
    const copyMessageList = [...messageList];
    copyMessageList.name = author;
    copyMessageList.text = message;
    copyMessageList.push({
      name: copyMessageList.name,
      text: copyMessageList.text
    })
    setMessageList(copyMessageList);
  }
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
  }, [messageList]);


  return (<div className="App">
    <div className="wrapper">
      <form onSubmit={onSubmit} action=''>
        <div className="formWrapper">
          <input placeholder="Имя" type="text" onChange={onChangeName} value={name} />
          <input type="text" placeholder="Сообщение" onChange={onChangeText} value={text} />
          <button type="submit">Отправить</button>
        </div>
      </form>
      <div >
        {messageList.map((message) => {
          return <div className="messageBlock"><h3>{message.name}</h3><p>{message.text}</p></div>
        })}
      </div>
    </div>


  </div>)
}

export default App
















