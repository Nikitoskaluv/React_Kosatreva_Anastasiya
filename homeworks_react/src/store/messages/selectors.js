
export const getMessageListFromChat = chatId => state => {
    return state.chats.chatList.filter(ch => ch.id === chatId)[0].messages
};

