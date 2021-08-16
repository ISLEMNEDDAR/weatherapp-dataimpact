import coordianteeAction from './action'

const initialState = {
  lat: null,
  lon: null,
}

export default function userReducers(state = initialState, action) {
  switch (action.type) {
    case coordianteeAction.SET_STATE:
      return { ...state, ...action.payload }
    default:
      return state
  }
}
