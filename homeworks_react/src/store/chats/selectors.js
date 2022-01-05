

export const getChats = (state) => state.chats;

export const getChatList = (state) => getChats(state).chatList;

export const getLastChat = (state) => getChatList(state)[getChatList(state).length - 1]
// export const getChatById = (chatId) => (state) => getChats(state).filter(chatId)
