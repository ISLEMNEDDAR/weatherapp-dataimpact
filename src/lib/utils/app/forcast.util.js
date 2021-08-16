import dateUtil from '../date.util'
import { mapDataToWeatherObjectTiny } from '../../dto/dataToObjetWeather'

const getMax = listForcast => {
  const maxListForecast = listForcast.map(forecast => {
    return forecast.temperature_max
  })
  return Math.max(...maxListForecast)
}

const getMin = listForcast => {
  const maxListForecast = listForcast.map(forecast => {
    return forecast.temperature_min
  })
  return Math.min(...maxListForecast)
}

// eslint-disable-next-line no-unused-vars
const mostUsedIcon = listForcastDaily => {
  const objectIconForcastDaily = {}
  listForcastDaily.forEach(dayForcast => {
    const iconId = dayForcast.icon_id
    objectIconForcastDaily[iconId] = objectIconForcastDaily[iconId]
      ? objectIconForcastDaily[iconId] + 1
      : 1
  })
  const keys = Object.keys(objectIconForcastDaily)
  let max = objectIconForcastDaily[keys[0]]
  let maxKey = keys[0]
  for (let i = 1; i < keys.length; i += 1) {
    const value = objectIconForcastDaily[keys[i]]
    if (value > max) {
      max = value
      maxKey = keys[i]
    }
  }
  return maxKey
}

const getListForcast = listForcastFromApi => {
  const listForcast = []
  let listForcastDaily = []
  let compteur = 0
  let lastKey = null
  listForcastFromApi.forEach(timeWeather => {
    const time = new Date(timeWeather.dt * 1000)
    const key = dateUtil.formatDate(time)
    if (lastKey !== key && compteur) {
      const max = getMax(listForcastDaily)
      const min = getMin(listForcastDaily)
      const day = dateUtil.formatDateCustom(listForcastDaily[0].dt_txt, 'dddd')
      const dayTime = dateUtil.formatDateCustom(listForcastDaily[0].dt_txt, 'DD/MM/YYYY')
      const mostUserIcon = mostUsedIcon(listForcastDaily)
      const obj = {
        listForcastDaily,
        max,
        min,
        day,
        dayTime,
        mostUserIcon,
      }
      listForcast.push(obj)
      listForcastDaily = []
    }
    const mapped = mapDataToWeatherObjectTiny(timeWeather)
    listForcastDaily.push(mapped)
    lastKey = key
    compteur = 1
  })
  return listForcast
}

const forcastUtil = {
  getListForcast,
}

export default forcastUtil
