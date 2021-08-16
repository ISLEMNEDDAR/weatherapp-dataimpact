import React from 'react'
import StyledText from '../../../../components/StyledText'
import { weightFont } from '../../../styles/style'
import Selectors from '../../../redux/selectors'
import Loading from '../../../../components/loader/Loading'

function WeatherNextDays() {
  const { daysWeathersSelector } = Selectors()

  return (
    <>
      {daysWeathersSelector.loading ? (
        <Loading minHeight={150} />
      ) : (
        <div className="padt25 padb15 padh15">
          {daysWeathersSelector.listDaysWeather.map(nextDayWeather => {
            const { day } = nextDayWeather
            const values = `${nextDayWeather.min}° - ${nextDayWeather.max}°`
            return (
              <div key={Math.random(12000)} className="flex wall jcsb marv20 aic">
                <StyledText
                  text={day}
                  weightText={weightFont.medium}
                  sizeText={18}
                  classnametext="black"
                />
                <i className="first_blue wi wi-thunderstorm fs25" />
                <StyledText
                  text={values}
                  weightText={weightFont.medium}
                  sizeText={18}
                  classnametext="black"
                />
              </div>
            )
          })}
        </div>
      )}
    </>
  )
}

export default WeatherNextDays
