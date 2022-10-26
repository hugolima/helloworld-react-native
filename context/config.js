import { AppStateStore } from './AppContext'
import { layoutReducer, userInfoReducer } from './reducer'

const ContextConfig = {
  reducers: (state, action) => {
    if (typeof action === 'function') {
      // Chamada assíncrona das actions que são functions.
      setTimeout(() => {
        action(AppStateStore.dispatch, state)
      }, 0)
      return state
    }

    const newState = {
      layout: layoutReducer(state.layout, action),
      userInfo: userInfoReducer(state.userInfo, action),
    }

    if (process.env.NODE_ENV !== 'production') {
      console.log('%c before: ' + JSON.stringify(state), 'color: gray')
      console.log('%c action: ' + JSON.stringify(action), 'color: blue')
      console.log('%c after: ' + JSON.stringify(newState), 'color: green')
    }

    return newState
  },
  initialState: {
    layout: {
      message: {},
    },
    userInfo: {
      loaded: false,
      user: {}
    },
  },
}

export default ContextConfig
