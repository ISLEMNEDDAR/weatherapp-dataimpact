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
          <div className="flex wall jcsb marv10">
            <StyledText
              text={nextDayWeather.day}
              weightText={weightFont.medium}
              sizeText={18}
              classnametext="black"
            />
            <i className="first_blue wi wi-thunderstorm fs18" />
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
