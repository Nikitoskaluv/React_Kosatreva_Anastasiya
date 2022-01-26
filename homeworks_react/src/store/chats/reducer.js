import { ADD_CHAT, DELETE_CHAT } from "./actions";
import { ADD_MESSAGES } from "../messages/actions";

export const initialState = {
    chatList: [],
}


export const chatsReducer = (state = initialState, action) => {
    switch (action?.type) {
        case ADD_CHAT:

            const exist = state.chatList.filter(item => item.id === action.payload.id).length;

            return {
                ...state,
                chatList: exist ? [...state.chatList] : [...state.chatList, action.payload]
            }
        case ADD_MESSAGES:

            const chats = state.chatList?.map(item => {
                if (item.id === action.payload.chatId) {
                    item.messages = action.payload.messages
                }
                return item;
            });

            return {
                ...state,
                chatList: [...chats]
            }
        case DELETE_CHAT:
            const newList = state.chatList.filter(item => item.id !== action.payload);
            return {
                ...state,
                chatList: newList
            }
        default:
            return state;
    }
}



