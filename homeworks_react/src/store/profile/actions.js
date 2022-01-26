
export const IS_SHOW_NAME = 'IS_SHOW_NAME';
export const CHANGE_NAME = 'PROFILE::CHANGE_NAME';
export const SET_USER = 'SET_USER'

export const changeName = (newName) => ({
    type: CHANGE_NAME,
    payload: newName,
});

export const showName = (isShowName) => ({
    type: IS_SHOW_NAME,
    payload: !isShowName,
})

export const setUser = (user) => ({
    type: SET_USER,
    payload: user,
})