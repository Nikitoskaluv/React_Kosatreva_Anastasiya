import { ADD_MESSAGES, REMOVE_MESSAGES_BY_ID } from "./actions";

export const initialState = {
  messageList: {},
};

export const messagesReducer = (state = initialState, action) => {
  switch (action?.type) {
    case ADD_MESSAGES: {
      const { messages, chatId } = action.payload;

      // const newMessages = { ...state.messageList };
      // const chatMessages = newMessages[chatId] || [];

      // let isMessageExist = chatMessages.filter(msg => msg.id === message.id).length;

      // newMessages[chatId] = isMessageExist ? [...chatMessages] : [...(chatMessages), message,]
      return { messageList: messages }
    }

    case REMOVE_MESSAGES_BY_ID: {
      const { chatId } = action.payload;
      if (!state.messageList.hasOwnProperty(chatId)) {
        return state;
      }
      const newMessages = { ...state.messageList };
      delete newMessages[chatId];
      return {
        messageList: newMessages
      }
    }
    default:
      return state;
  }
};




