import { IS_SHOW_NAME, CHANGE_NAME, SET_USER } from "./actions";
const initialState = {
    user: null,
    isShowName: false
};

export const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case IS_SHOW_NAME:
            return {
                ...state,
                isShowName: action.payload,
            }
        case CHANGE_NAME:
            return {
                ...state,
                name: action.payload
            }
        case SET_USER:
            return {
                ...state,
                user: action.payload
            }
        default:
            return state;
    }
}

