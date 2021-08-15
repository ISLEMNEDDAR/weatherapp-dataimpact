import { WEATHER_KEY_API, WEATHER_URL_API } from '../../configs'
import requestService from '../utils/request.util'
import { typecontent } from '../utils/type_content.util'
import { units } from '../data/weather-concepts'

const routeWeather = `${WEATHER_URL_API}/forecast`

const getForcastByCityAndCountry = async (city, country, cnt) => {
  const qDataToSend = `${city || ''}, ${country || ''}`
  const response = await requestService.getRequest(
    routeWeather,
    typecontent.noProtectedRoute(typecontent.json),
    {
      q: qDataToSend,
      units: units.metric,
      cnt: cnt || 7,
      appid: WEATHER_KEY_API,
    },
  )
  console.log(response)
  return response
}

const getForecastByCoordiante = async (lat, lon, cnt) => {
  const response = await requestService.getRequest(
    routeWeather,
    typecontent.noProtectedRoute(typecontent.json),
    {
      lat,
      lon,
      cnt: cnt || 7,
      units: units.metric,
      appid: WEATHER_KEY_API,
    },
  )
  console.log(response)
  return response
}

const forcastService = {
  getForcastByCityAndCountry,
  getForecastByCoordiante,
}
export default forcastService
