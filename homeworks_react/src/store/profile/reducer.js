import { IS_SHOW_NAME } from "./actions";
const initialState = {
    name: '*',
    isShowName: false
};

export const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case IS_SHOW_NAME:
            return {
                ...state,
                isShowName: !state.isShowName
            }
        default:
            return state;
    }
}

