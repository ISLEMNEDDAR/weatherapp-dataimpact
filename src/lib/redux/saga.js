import { all } from 'redux-saga/effects'
import weather from './weather/saga'
import daysWeather from './daysWeather/saga'

export default function* rootSaga() {
  yield all([weather(), daysWeather()])
}
