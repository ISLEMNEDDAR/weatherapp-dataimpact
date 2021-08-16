import { WEATHER_KEY_API, WEATHER_URL_API } from '../../configs'
import requestService from '../utils/request.util'
import { typecontent } from '../utils/type_content.util'
import { units } from '../data/weather-concepts'

const routeWeather = `${WEATHER_URL_API}/weather`
console.log(WEATHER_URL_API)
const getWeatherByCityAndCountry = async (city, country) => {
  const qDataToSend = `${city || ''}, ${country || ''}`
  const response = await requestService.getRequest(
    routeWeather,
    typecontent.noProtectedRoute(typecontent.json),
    {
      q: qDataToSend,
      units: units.metric,
      appid: WEATHER_KEY_API,
    },
  )
  console.log(response)
  return response
}

const getWeatherByCoordiante = async (lat, lon) => {
  const response = await requestService.getRequest(
    routeWeather,
    typecontent.noProtectedRoute(typecontent.json),
    {
      lat,
      lon,
      units: units.metric,
      appid: WEATHER_KEY_API,
    },
  )
  console.log(response)
  return response
}

const weatherService = {
  getWeatherByCityAndCountry,
  getWeatherByCoordiante,
}
export default weatherService
