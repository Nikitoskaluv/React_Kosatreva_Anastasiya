

export const getChats = (state) => state.chats;

export const getChatList = (state) => getChats(state).chatList;

export const getLastChat = (state) => {
    let chLIst = getChatList(state);
    return chLIst[chLIst.length - 1]
}
// export const getChatById = (chatId) => (state) => getChats(state).filter(chatId)
