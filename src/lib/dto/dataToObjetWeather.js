import weatherIcons from '../data/weather-icons.json'

const commonExtraction = (data, mapped) => {
  if (data.main.temp_min && data.main.temp_max) {
    mapped.temperature_max = data.main.temp_max
    mapped.temperature_min = data.main.temp_min
  }
  if (data.weather[0].icon) {
    mapped.icon = data.weather[0].icon
  }
  if (data.dt_txt) {
    mapped.dt_txt = data.dt_txt
  }
  Object.keys(mapped).forEach(key => mapped[key] === undefined && delete data[key])
  return mapped
}

export const mapDataToWeatherObject = data => {
  const mapped = {
    city: data.name,
    country: data.sys.country,
    date: data.dt * 1000,
    humidity: data.main.humidity,
    icon_id: data.weather[0].id,
    icon_class: (data.weather[0].id && `wi wi-${weatherIcons[data.weather[0].id].icon}`) || '',
    temperature: data.main.temp,
    pressure: data.main.pressure,
    description: data.weather[0].description,
    wind_speed: Math.round(data.wind.speed * 3.6), // convert from m/s to km/h
    condition: data.cod,
  }

  if (data.main.temp_min && data.main.temp_max) {
    mapped.temperature_max = data.main.temp_max
    mapped.temperature_min = data.main.temp_min
  }
  return commonExtraction(data, mapped)
}

export const mapDataToWeatherObjectTiny = data => {
  const mapped = {
    date: data.dt * 1000,
    icon_id: data.weather[0].id,
    icon_class: (data.weather[0].id && `wi wi-${weatherIcons[data.weather[0].id].icon}`) || '',
    temperature: data.main.temp,
    description: data.weather[0].description,
  }
  return commonExtraction(data, mapped)
}
export default {
  mapDataToWeatherObject,
}
