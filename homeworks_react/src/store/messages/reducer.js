import { ADD_MESSAGE, REMOVE_MESSAGES_BY_ID } from "./actions";

const initialState = {
  messageList: {},
};

export const messagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE: {
      const { message, chatId } = action.payload;

      const newMessages = { ...state.messageList };


      newMessages[chatId] = [...(newMessages[chatId] || []),
        message,
      ]
      return { messageList: newMessages }
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




