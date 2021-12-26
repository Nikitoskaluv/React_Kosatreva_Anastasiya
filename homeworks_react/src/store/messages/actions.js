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