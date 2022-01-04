import { IS_SHOW_NAME, CHANGE_NAME } from "./actions";
const initialState = {
    name: '*',
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
        default:
            return state;
    }
}

