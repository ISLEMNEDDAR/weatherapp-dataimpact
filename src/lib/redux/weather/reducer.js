import weatherAction from './action'

const initialState = {
  weather: {},
  loading: false,
  error: null,
}

export default function userReducers(state = initialState, action) {
  switch (action.type) {
    case weatherAction.SET_STATE:
      return { ...state, ...action.payload }
    default:
      return state
  }
}
