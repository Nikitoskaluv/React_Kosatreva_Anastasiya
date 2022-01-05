import { createMessage } from "../../components/MessagesFromChat";
export const ADD_MESSAGE = 'MESSAGES:ADD_MESSAGE';
export const REMOVE_MESSAGES_BY_ID = 'MESSAGES:REMOVE_MESSAGES_BY_ID';


export const addMessage = (message, chatId) => ({
    type: ADD_MESSAGE,
    payload: {
        message,
        chatId,
    }
})

export const removeMessagesById = (chatId) => ({
    type: REMOVE_MESSAGES_BY_ID,
    payload: {
        chatId
    }
})

export const addMessageWithThunk = (chatId, message, author) => (dispatch) => {
    const newMessage = createMessage(author, message);
    dispatch(addMessage(newMessage, chatId));
    if (newMessage.author !== "Чат-бот") {
        const botMessage = createMessage("Чат-бот", `Привет ${newMessage.author}`)
        setTimeout(() => dispatch(addMessage(botMessage, chatId)), 2000);
    }
}