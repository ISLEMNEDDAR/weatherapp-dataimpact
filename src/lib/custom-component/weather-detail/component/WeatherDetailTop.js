import React from 'react'
import moment from 'moment'
import { useDispatch } from 'react-redux'
import StyledText from '../../../../components/StyledText'
import { weightFont } from '../../../styles/style'
import Selectors from '../../../redux/selectors'
import Loading from '../../../../components/loader/Loading'
import { toastError } from '../../../utils/toast.util'
import weatherActions from '../../../redux/weather/action'
import useResponsive from '../../../hooks/useResponsive'

function WeatherDetailTop() {
  // hooks
  const { weatherSelector } = Selectors()
  const dispatch = useDispatch()
  const responsive = useResponsive()

  // renders
  const renderNamePaysAndate = weather => {
    const { city, country } = weather
    const date = moment(new Date()).format('dddd, MMMM Do YYYY')
    return (
      <div className="flex fdc aic jcc">
        <h3 className="raleway fs23">
          {city}, {country}
        </h3>
        <StyledText
          text={date}
          weightText={weightFont.medium}
          sizeText={18}
          classnametext="black"
        />
      </div>
    )
  }

  const renderCurrentWeather = weather => {
    const temperateur = Math.round(weather.temperature)
    const description = weather.description || ''
    return (
      <div className="flex f1 jcc aic">
        <div className="flex jcc aic fs55">
          <i className={`green ${weather.icon_class}`} />
        </div>
        <div className="flex aic jcc fdc padl25">
          <h3 className="raleway-bold fs45">{temperateur}&deg;C</h3>
          <span className="raleway-medium fs20 txtac">{description}</span>
        </div>
      </div>
    )
  }

  const renderListOfindicator = weather => {
    const high = `${weather.temperature_max}°`
    const wind = `${weather.wind_speed}mph`
    const low = `${weather.temperature_min}°`
    const humidity = `${weather.humidity}%`
    const listKPIWeather = [
      { type: 'High', value: high },
      { type: 'Wind', value: wind },
      { type: 'Low ', value: low },
      { type: 'Humidity', value: humidity },
    ]
    return (
      <div className={`flex f1 aic jcc ${responsive.isMobile ? 'mart15' : ''}`}>
        <div className="row">
          {listKPIWeather.map(kpi => {
            const kpiType = kpi.type
            const kpiValue = kpi.value
            return (
              <div
                key={`${kpiType}-${kpiValue}`}
                className="col-md6 col-sm6 col-xs6 padv10 flex fdc jcc aic"
              >
                <h4 className="raleway-medium fs20 padb5">{kpiValue}</h4>
                <span className="raleway fs15">{kpiType}</span>
              </div>
            )
          })}
        </div>
      </div>
    )
  }

  if (weatherSelector.error) {
    toastError(weatherSelector.error.message)
    dispatch(weatherActions.updateError(null))
  } else {
    return (
      <>
        {weatherSelector.loading ? (
          <Loading minHeight={150} />
        ) : (
          <>
            {!weatherSelector.weather.temperature || weatherSelector.weather === null ? (
              <div className="flex minh150 jcc aic">
                <p> Choisie une ville</p>
              </div>
            ) : (
              <div className="padv5">
                {renderNamePaysAndate(weatherSelector.weather)}
                <div className={`flex ${responsive.isMobile ? 'fdc' : 'fdr'} f2 marv35`}>
                  {renderCurrentWeather(weatherSelector.weather)}
                  {renderListOfindicator(weatherSelector.weather)}
                </div>
              </div>
            )}
          </>
        )}
      </>
    )
  }
}

export default WeatherDetailTop
