import React from "react";
import { Route, Switch } from "react-router";
import MessagesFromChat from "../../components/MessagesFromChat";
import { useSelector } from 'react-redux';
import { getChatList } from '../../store/chats/selectors';
import { ChatListContainer } from "../../components/ChatListContainer";



const Chats = () => {
    const chats = useSelector(getChatList);

    return (
        <div className="App">
            <ChatListContainer chats={chats} />
            <Switch>
                <Route component={MessagesFromChat} exact path="/chats/:chatId" />
            </Switch>
        </div>
    )
}
export default Chats;