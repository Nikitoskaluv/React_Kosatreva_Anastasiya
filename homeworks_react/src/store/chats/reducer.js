import { ADD_CHAT, DELETE_CHAT } from "./actions";
// const initialState = {
//     chatList: [],
// };

// let initialChats = [];
// const createChat = (i) => ({
//     id: nanoid(4),
//     name: `Chat ${i}`,
//     title: `Сообщения из чата ${i}`
// })

// for (let i = 1; i <= 7; i++) {
//     initialChats[i] = createChat(i);
//     console.log(initialChats[i].id)
// }

const initialState = {
    chatList: [
        { id: '1', name: 'Чат 1' },
        { id: '2', name: 'Чат 2' },
        { id: '3', name: 'Чат 3' },
        { id: '4', name: 'Чат 4' },
        { id: '5', name: 'Чат 5' },
        { id: '6', name: 'Чат 6' },
        { id: '7', name: 'Чат 7' },
    ],
}


export const chatsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_CHAT:
            return {
                ...state,
                chatList: [...state.chatList, action.payload]
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



