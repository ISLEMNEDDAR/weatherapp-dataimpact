import { useDispatch } from 'react-redux'
import { dispatchAction } from '../utils/dispatch.util'
import weatherActions from '../redux/weather/action'
import dayWeatherActions from '../redux/daysWeather/action'
import { searchByObject } from '../data/weather-concepts'
import coordianteeAction from '../redux/coordinate/action'
import Selectors from '../redux/selectors'

const useSearchByCor = (location, error) => {
  const dispatch = useDispatch()
  const { coordinateSelector } = Selectors()
  const searchWithCurrent = () => {
    if (location && !error) {
      console.log(coordinateSelector)
      const lat = location.latitude.toFixed(4)
      const lon = location.longitude.toFixed(4)
      console.log(lat)
      console.log(lon)
      console.log(
        Number(lat) === Number(coordinateSelector.lat) &&
          Number(lon) === Number(coordinateSelector.lon),
      )
      if (
        Number(lat) === Number(coordinateSelector.lat) &&
        Number(lon) === Number(coordinateSelector.lon)
      ) {
        return { errorLocation: false }
      }
      dispatch(coordianteeAction.updateCooriante(lat, lon))
      dispatch(
        dispatchAction(weatherActions.GET_WEATHER, {
          coordinates: { lat, lon },
          searchBy: searchByObject.coordinates,
        }),
      )
      dispatch(
        dispatchAction(dayWeatherActions.GET_WEATHER, {
          coordinates: { lat, lon },
          searchBy: searchByObject.coordinates,
        }),
      )
      return { errorLocation: false }
    }
    console.log('error')
    return { errorLocation: true, message: "Can't get your current location" }
  }
  return {
    searchWithCurrent,
  }
}

export default useSearchByCor
