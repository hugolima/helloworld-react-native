export const CHANGE_USERINFO_ACTION = 'HOME/CHANGE_USERINFO';
export const CHANGE_MESSAGE_ACTION = 'LAYOUT/CHANGE_MESSAGE';

export const changeUserInfo = (userInfo) => ({
  type: CHANGE_USERINFO_ACTION,
  userInfo,
});

export const changeMessage = (message) => ({
  type: CHANGE_MESSAGE_ACTION,
  message,
});

export const changeMessageDelay = (message) => (dispatch) => {
  dispatch(changeMessage(message))
  setTimeout(() => {
    dispatch(changeMessage({}))
  }, 7000)
};
