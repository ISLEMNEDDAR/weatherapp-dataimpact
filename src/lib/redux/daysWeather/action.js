import { dispatchAction } from '../../utils/dispatch.util'

const dayWeatherActions = {
  SET_STATE: 'dayWeather/SET_STATE',
  GET_WEATHER: 'dayWeather/GET_WEATHER',
  updateError: err => {
    return dispatchAction(dayWeatherActions.SET_STATE, {
      error: err,
    })
  },
  updateWeather: listDaysWeather => {
    return dispatchAction(dayWeatherActions.SET_STATE, {
      listDaysWeather,
    })
  },
}

export default dayWeatherActions
