require('dotenv').config()

const ENV = process.env.REACT_APP_ENV
const WEATHER_KEY_API = process.env.REACT_APP_WEATHER_KEY_API
const WEATHER_URL_API = process.env.REACT_APP_WEATHER_URL_API
export { ENV, WEATHER_KEY_API, WEATHER_URL_API }
