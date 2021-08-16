import React from 'react'
import { useDispatch } from 'react-redux'
import StyledText from '../../../../components/StyledText'
import { weightFont } from '../../../styles/style'
import Selectors from '../../../redux/selectors'
import Loading from '../../../../components/loader/Loading'
import weatherIcons from '../../../data/weather-icons.json'
import './WeatherNextDay.scss'
import dayWeatherActions from '../../../redux/daysWeather/action'
import dateUtil from '../../../utils/date.util'

function WeatherNextDays() {
  // hooks
  const dispatch = useDispatch()
  const { daysWeathersSelector } = Selectors()

  // functions
  const showDetails = (index, listToforcast) => {
    if (listToforcast[index].open) {
      listToforcast[index].open = false
    } else {
      for (let i = 0; i < listToforcast.length; i += 1) {
        listToforcast[i].open = i === index
      }
    }
    dispatch(dayWeatherActions.updateWeather(listToforcast))
  }

  // render
  const renderListDayForcast = nextDayWeather => {
    const { listForcastDaily } = nextDayWeather
    return (
      <div className="item_forecast padh15">
        {listForcastDaily.map(forcastDaily => {
          const hours = dateUtil.formatDateCustom(forcastDaily.date, 'h:mm A')
          const temperateur = `${forcastDaily.temperature}°`
          return (
            <div className="flex wall f3 padv15 aic ">
              <div className="flex f1 aic jcc">
                <StyledText
                  text={hours}
                  weightText={weightFont.medium}
                  sizeText={18}
                  classnametext="black"
                />
              </div>
              <div className="flex f1 aic jcc">
                <i className={`first_blue ${forcastDaily.icon_class} fs25`} />
              </div>
              <div className="flex f1 aic jcc">
                <StyledText
                  text={temperateur}
                  weightText={weightFont.medium}
                  sizeText={18}
                  classnametext="black"
                />
              </div>
            </div>
          )
        })}
      </div>
    )
  }

  if (daysWeathersSelector.loading) {
    return <Loading minHeight={150} />
  }
  const listToforcast = daysWeathersSelector.listDaysWeather
  if (listToforcast.length > 0) {
    return (
      <div className="padt25 padb15 ">
        {listToforcast.map((nextDayWeather, index) => {
          const { day } = nextDayWeather
          const values = `${nextDayWeather.min}° - ${nextDayWeather.max}°`
          return (
            <>
              <div
                aria-hidden
                key={Math.random(12000)}
                className="hover_item_forcast flex wall f3 padv15 aic curptr padh5"
                onClick={() => {
                  showDetails(index, listToforcast)
                }}
              >
                <div className="flex f1">
                  <StyledText
                    text={day}
                    weightText={weightFont.medium}
                    sizeText={18}
                    classnametext="black"
                  />
                </div>
                <div className="flex f1">
                  <i
                    className={`first_blue wi wi-${
                      weatherIcons[nextDayWeather.mostUserIcon].icon
                    } fs25`}
                  />
                </div>
                <div className="flex f1">
                  <StyledText
                    text={values}
                    weightText={weightFont.medium}
                    sizeText={18}
                    classnametext="black"
                  />
                </div>
              </div>
              {nextDayWeather.open ? renderListDayForcast(nextDayWeather) : null}
            </>
          )
        })}
      </div>
    )
  }
  return (
    <div>
      <p>No information pro</p>
    </div>
  )
}

export default WeatherNextDays
