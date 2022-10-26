import { CHANGE_MESSAGE_ACTION, CHANGE_USERINFO_ACTION } from './actions'

export const layoutReducer = (state, action) => {
  switch (action.type) {
    case CHANGE_MESSAGE_ACTION:
      return { ...state, message: action.message }

    default:
      return state
  }
}

export const userInfoReducer = (state, action) => {
  switch (action.type) {
    case CHANGE_USERINFO_ACTION:
      return { ...state, ...action.userInfo }

    default:
      return state
  }
}
