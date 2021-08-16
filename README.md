cette application utilise [OpenWeatherMap API](https://openweathermap.org/current) et [Leaflet maps](https://react-leaflet.js.org/docs/en/examples) 

## Features
- avoir la meteo pour une cite ou country.
- avoir la meteo pour la postion actual .
- avoir la meteo pour les prochain 5 jours.

## link
https://weatherappdataimpact.herokuapp.com/weather

##Deploy
using Gitlab Ci for the the creation of the simple pipeline
and deploy on heroku

## Code Metrics
using eslint and stylelint to have a one style on a project
using editorconfig because am using webStorm to have the same format in commits


## Env
```bash
  node -v
  v14.17.0
```

```bash
  npm -v
  6.14.13
```
## Setup
1. Clone the project:

  ```bash
  git colne https://github.com/ISLEMNEDDAR/weatherapp-dataimpact.git
  ```

2. Install dependencies:
> If you're using `npm` to install packages:

  ```bash
  npm install
  ```

3. Config the environment :

  ```bash
  // add .env file with the content
    REACT_APP_ENV = developement
    REACT_APP_WEATHER_KEY_API = 206e3de94beb3d886aad10d7d6fb6300
    REACT_APP_WEATHER_URL_API = https://api.openweathermap.org/data/2.5
  ```

3. Run the project:

  ```bash
  npm start
  ```

## Build & serve
1.  To build
  ```bash
    npm run build
  ```
2. To build

  ```bash
    npm run serve
  ```

## License

[Leaflet maps] [https://react-leaflet.js.org/docs/en/examples]

[OpenWeatherMap API] [https://openweathermap.org/current]
