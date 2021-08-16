import React from 'react'
import CardContainer from '../../../components/containers/CardContainer'
import CustomSeparator from '../../../components/separator/CustomSeparator'
import WeatherDetailTop from './component/WeatherDetailTop'
import WeatherNextDays from './component/WeatherNextDays'

function WeatherDetail() {
  return (
    <div className="wall padh10">
      <CardContainer>
        <div className="pad15">
          <WeatherDetailTop />
          <CustomSeparator />
          <WeatherNextDays />
        </div>
      </CardContainer>
    </div>
  )
}

export default WeatherDetail
