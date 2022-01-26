import { chatsRef, messagesRef } from "../../services/firebase";


export const ADD_MESSAGES = 'MESSAGES:ADD_MESSAGES';
export const REMOVE_MESSAGES_BY_ID = 'MESSAGES:REMOVE_MESSAGES_BY_ID';


export const addMessages = (messages, chatId) => ({
    type: ADD_MESSAGES,
    payload: {
        messages,
        chatId,
    }
})

export const removeMessagesByChatId = (chatId) => ({
    type: REMOVE_MESSAGES_BY_ID,
    payload: {
        chatId
    }
})

export const addMessageWithThunk = (chatId, message) => () => {
    chatsRef.child(chatId).child('messages').push(message);
}

export const onTrackingAddMessageWithThunk = (chatId) => (dispatch) => {
    chatsRef.on('child_changed', (snapshot) => {
        console.log('messages from firebase', snapshot.val().messages, 'chatId', snapshot.key)
        dispatch(addMessages(snapshot.val().messages, snapshot.key))
    })
}

export const offTrackingAddMessageWithThunk = (chatId) => () => {
    messagesRef.child(chatId).child('messages').off()
}

export const onTrackingRemoveMessageWithThunk = (chatId) => (dispatch) => {
    messagesRef.child(chatId).child('messages').on('child_removed', (snapshot) => {
        dispatch(removeMessagesByChatId(chatId))
    })
}
export const offTrackingRemoveMessageWithThunk = (chatId) => () => {
    messagesRef.child(chatId).child('messages').off()
}