import { combineReducers } from 'redux'
import weathers from './weather/reducer'
import daysWeathers from './daysWeather/reducer'
import coordinates from './coordinate/reducer'

const reducers = () =>
  combineReducers({
    weathers,
    daysWeathers,
    coordinates,
  })

export default reducers
