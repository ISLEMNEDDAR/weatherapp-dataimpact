import dayWeatherActions from './action'

const initialState = {
  listDayswWeather: [],
  loading: false,
  error: null,
}

export default function userReducers(state = initialState, action) {
  switch (action.type) {
    case dayWeatherActions.SET_STATE:
      return { ...state, ...action.payload }
    default:
      return state
  }
}
