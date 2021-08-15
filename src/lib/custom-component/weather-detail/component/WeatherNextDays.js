import React from 'react'
import StyledText from '../../../../components/StyledText'
import { weightFont } from '../../../styles/style'

const listNextDaysWeather = [
  {
    day: 'sunday',
    icon: 'wi wi-thunderstorm',
    values: '28° - 28°',
  },
  {
    day: 'sunday',
    icon: 'wi wi-thunderstorm',
    values: '28° - 28°',
  },
  {
    day: 'sunday',
    icon: 'wi wi-thunderstorm',
    values: '28° - 28°',
  },
]

function WeatherNextDays() {
  return (
    <div className="padt25 padb15 padh15">
      {listNextDaysWeather.map(nextDayWeather => {
        return (
          <div key={Math.random(12000)} className="flex wall jcsb marv20 aic">
            <StyledText
              text={nextDayWeather.day}
              weightText={weightFont.medium}
              sizeText={18}
              classnametext="black"
            />
            <i className="first_blue wi wi-thunderstorm fs25" />
            <StyledText
              text={nextDayWeather.values}
              weightText={weightFont.medium}
              sizeText={18}
              classnametext="black"
            />
          </div>
        )
      })}
    </div>
  )
}

export default WeatherNextDays
