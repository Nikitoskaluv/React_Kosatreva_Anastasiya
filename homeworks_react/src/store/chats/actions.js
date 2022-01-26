import { chatsRef } from "../../services/firebase";
import { mapChatSnapshotToChat } from "../../helpers";

export const ADD_CHAT = "CHATS:ADD_CHAT";
export const DELETE_CHAT = 'CHATS:DELETE_CHAT';


export const addChat = (value) => {
    return {
        type: ADD_CHAT,
        payload: value
    }
};

export const deleteChat = (value) => {
    return {
        type: DELETE_CHAT,
        payload: value
    }
}

export const deleteChatWithThunk = (value) => () => {
    chatsRef.child(value).remove()
}

export const addChatWithThunk = (value) => () => {
    console.log('Puch new chat to firebase', value)
    chatsRef.push(value)
}

export const onTrackingAddChat = (dispatch) => {
    chatsRef.on('child_added', (snapshot) => {
        let chat = mapChatSnapshotToChat(snapshot);
        console.log('On new chat from firebase', chat)
        dispatch(addChat(chat));
    })
}
export const offTrackingAddChat = () => {
    chatsRef.off()
}
export const onTrackingDeleteChat = (dispatch) => {
    chatsRef.on('child_removed', (snapshot) => {
        dispatch(deleteChat(snapshot.key))
    })
}
export const offTrackingDeleteChat = () => {
    chatsRef.off()
}