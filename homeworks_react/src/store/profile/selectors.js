export const getProfile = (state) => state.profile;

export const getName = (state) => getProfile(state).name;

export const getShowName = (state) => getProfile(state).isShowName;