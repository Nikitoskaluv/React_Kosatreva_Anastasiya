import React, { useState } from "react";
import { ChatList } from "../../components/ChatList";
import { Route, Switch } from "react-router";
import MessagesFromChat from "../../components/MessagesFromChat";
import { nanoid } from 'nanoid';



let initialChats = [];

const createChat = (i) => ({
    id: nanoid(4),
    name: `Chat ${i}`,
    title: `Сообщения из чата ${i}`
})

for (let i = 1; i <= 7; i++) {
    initialChats[i] = createChat(i);
    console.log(initialChats[i].id)
}

const Chats = () => {

    const [chats, setChats] = useState(initialChats);

    return (
        <div className="App">
            <ChatList chats={chats} />
            <Switch>
                <Route render={(props) => (
                    <MessagesFromChat {...props} chats={chats} />
                )} exact path="/chats/:chatId" />
            </Switch>
        </div>
    )
}
export default Chats;