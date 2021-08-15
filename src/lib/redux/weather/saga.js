import { all, takeLatest, put, call } from 'redux-saga/effects'
import weatherActions from './action'
import { dispatchAction } from '../../utils/dispatch.util'
import weatherService from '../../services/weather.service'
import { searchByObject } from '../../data/weather-concepts'
import { mapDataToWeatherObject } from '../../dto/dataToObjetWeather'
import coordianteeAction from '../coordinate/action'

export function* GET_WEATHER(payload) {
  try {
    const {
      payload: { city, coordinates, searchBy },
    } = payload
    yield put(dispatchAction(weatherActions.SET_STATE, { loading: true }))
    let response
    switch (searchBy) {
      case searchByObject.coordinates:
        response = yield call(
          weatherService.getWeatherByCoordiante,
          coordinates.lat,
          coordinates.lon,
        )
        break
      case searchByObject.city:
        response = yield call(weatherService.getWeatherByCityAndCountry, city)
        break
      default:
        response = yield call(weatherService.getWeatherByCityAndCountry, city)
        break
    }
    const { error, data } = response
    if (error) {
      yield put(weatherActions.updateError(data))
    } else {
      const weather = mapDataToWeatherObject(data)
      const { lon, lat } = data.coord
      yield put(coordianteeAction.updateCooriante(lat, lon))
      yield put(weatherActions.updateWeather(weather))
    }
    yield put(dispatchAction(weatherActions.SET_STATE, { loading: false }))
  } catch (err) {
    console.log(err)
  }
}

export default function* rootSaga() {
  yield all([takeLatest(weatherActions.GET_WEATHER, GET_WEATHER)])
}
