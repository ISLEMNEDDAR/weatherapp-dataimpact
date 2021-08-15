import { dispatchAction } from '../../utils/dispatch.util'

const weatherActions = {
  SET_STATE: 'weather/SET_STATE',
  GET_WEATHER: 'weather/GET_WEATHER',
  updateError: err => {
    return dispatchAction(weatherActions.SET_STATE, {
      error: err,
    })
  },
  updateWeather: weather => {
    return dispatchAction(weatherActions.SET_STATE, {
      weather,
    })
  },
}

export default weatherActions
