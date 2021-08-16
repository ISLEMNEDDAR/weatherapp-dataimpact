import { all, call, put, takeLatest } from 'redux-saga/effects'
import dayWeatherActions from './action'
import { dispatchAction } from '../../utils/dispatch.util'
import { searchByObject } from '../../data/weather-concepts'
import forcastService from '../../services/forecast.service'
import forcastUtil from '../../utils/app/forcast.util'

export function* GET_WEATHER(payload) {
  try {
    const {
      payload: { city, coordinates, searchBy },
    } = payload
    yield put(dispatchAction(dayWeatherActions.SET_STATE, { loading: true }))
    let response
    switch (searchBy) {
      case searchByObject.coordinates:
        response = yield call(
          forcastService.getForecastByCoordiante,
          coordinates.lat,
          coordinates.lon,
        )
        break
      case searchByObject.city:
        response = yield call(forcastService.getForcastByCityAndCountry, city)
        break
      default:
        response = yield call(forcastService.getForcastByCityAndCountry, city)
        break
    }
    const { error, data } = response
    if (error) {
      yield put(dayWeatherActions.updateError(data))
    } else {
      const listForcast = forcastUtil.getListForcast(data.list)
      yield put(dayWeatherActions.updateWeather(listForcast))
    }
    yield put(dispatchAction(dayWeatherActions.SET_STATE, { loading: false }))
  } catch (err) {
    console.log(err)
  }
}

export default function* rootSaga() {
  yield all([takeLatest(dayWeatherActions.GET_WEATHER, GET_WEATHER)])
}
