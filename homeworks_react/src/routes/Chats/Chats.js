import React from "react";
import { ChatList } from "../../components/ChatList";
import { Route, Switch } from "react-router";
import MessagesFromChat from "../../components/MessagesFromChat";
import { useSelector } from 'react-redux';
import { getChatList } from '../../store/chats/selectors';
// import { setChat } from '../../store/chats/actions';



const Chats = () => {
    const chats = useSelector(getChatList);
    return (
        <div className="App">
            <ChatList chats={chats} />
            <Switch>
                <Route component={MessagesFromChat} exact path="/chats/:chatId" />
            </Switch>
        </div>
    )
}
export default Chats;