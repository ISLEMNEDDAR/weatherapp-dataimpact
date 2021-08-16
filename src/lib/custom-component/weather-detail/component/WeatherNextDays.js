import React from 'react'
import { useDispatch } from 'react-redux'
import Selectors from '../../../redux/selectors'
import Loading from '../../../../components/loader/Loading'
import './WeatherNextDay.scss'
import dayWeatherActions from '../../../redux/daysWeather/action'
import ForcastDayWeatherItem from './ForcastDayWeatherItem'

function WeatherNextDays() {
  // hooks
  const dispatch = useDispatch()
  const { daysWeathersSelector } = Selectors()
  const listToforcast = daysWeathersSelector.listDaysWeather
  // functions
  const showDetails = (index, listoforcast) => {
    if (listoforcast[index].open) {
      listoforcast[index].open = false
    } else {
      for (let i = 0; i < listToforcast.length; i += 1) {
        listoforcast[i].open = i === index
      }
    }
    dispatch(dayWeatherActions.updateWeather(listoforcast))
  }

  if (daysWeathersSelector.loading) {
    return <Loading minHeight={150} />
  }

  if (listToforcast.length > 0) {
    return (
      <div className="padt25 padb15 ">
        {listToforcast.map((nextDayWeather, index) => {
          return (
            <ForcastDayWeatherItem
              nextDayWeather={nextDayWeather}
              listToforcast={listToforcast}
              index={index}
              showDetails={showDetails}
            />
          )
        })}
      </div>
    )
  }

  return (
    <div className="minh150 flex aic jcc">
      <p>No Information Provided</p>
    </div>
  )
}

export default WeatherNextDays
