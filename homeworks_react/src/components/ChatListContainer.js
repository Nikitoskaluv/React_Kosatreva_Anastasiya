import { addChatWithThunk, deleteChatWithThunk, offTrackingAddChat, offTrackingDeleteChat, onTrackingAddChat, onTrackingDeleteChat } from '../store/chats/actions';
import { useDispatch } from 'react-redux';
import { ChatList } from './ChatList';
import { useCallback, useEffect } from 'react';



export const ChatListContainer = ({ chats }) => {
    const dispatch = useDispatch();


    const removeChat = useCallback((e, chatId) => {
        dispatch(deleteChatWithThunk(chatId));
    }, [])

    useEffect(() => {
        dispatch(onTrackingAddChat);
        dispatch(onTrackingDeleteChat);
        return () => {
            dispatch(offTrackingAddChat);
            dispatch(offTrackingDeleteChat)
        }
    }, [])


    const createNewChat = useCallback(() => {
        const newChat = {
            name: `chat ${chats.length + 1}`,
            messages: {}
        }
        dispatch(addChatWithThunk(newChat));
    }, [chats])

    return (

        <ChatList
            removeChat={removeChat}
            createNewChat={createNewChat}
            chats={chats}
        />
    )
}