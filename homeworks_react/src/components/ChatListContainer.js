import { deleteChat, addChat } from '../store/chats/actions';
import { useDispatch } from 'react-redux';
import { getLastChat, getChats } from '../store/chats/selectors';
import { useSelector } from 'react-redux';
import { removeMessagesById } from '../store/messages/actions';
import { ChatList } from './ChatList';



export const ChatListContainer = ({ chats }) => {
    const dispatch = useDispatch();
    const lastChat = useSelector(getLastChat);
    console.log(lastChat);

    const smt = useSelector(getChats);
    console.log(smt);



    const removeChat = (e, chatId) => {
        dispatch(deleteChat(chatId));
        dispatch(removeMessagesById(chatId));
    }


    const createNewChat = () => {
        let lastChatId = +lastChat.id
        const chatName = `Чат ${lastChatId + 1}`
        const newChat = {
            id: lastChatId + 1,
            name: chatName
        }

        dispatch(addChat(newChat));
    }
    return (
        <ChatList
            removeChat={removeChat}
            createNewChat={createNewChat}
            chats={chats}
        />
    )
}