import React from 'react'
import StyledText from '../../../../components/StyledText'
import { weightFont } from '../../../styles/style'
import weatherIcons from '../../../data/weather-icons.json'
import RenderListDayForcast from './RenderListDayForcast'
import Default from '../../../responsive/Default'
import useResponsive from '../../../hooks/useResponsive'

function ForcastDayWeatherItem({ nextDayWeather, showDetails, index, listToforcast }) {
  const responsive = useResponsive()
  const { day } = nextDayWeather
  const values = `${nextDayWeather.min}° - ${nextDayWeather.max}°`
  return (
    <>
      <div
        aria-hidden
        key={Math.random(12000)}
        className={`hover_item_forcast flex wall ${
          responsive.isMobile ? 'f2' : 'f3'
        } padv15 aic curptr padh5`}
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
        <div className={`flex f1 ${responsive.isMobile ? 'jcc aic' : ''}`}>
          <i
            className={`first_blue wi wi-${weatherIcons[nextDayWeather.mostUserIcon].icon} fs25`}
          />
        </div>
        <Default>
          <div className="flex f1">
            <StyledText
              text={values}
              weightText={weightFont.medium}
              sizeText={18}
              classnametext="black"
            />
          </div>
        </Default>
      </div>
      {nextDayWeather.open ? (
        <>
          <RenderListDayForcast nextDayWeather={nextDayWeather} />
        </>
      ) : null}
    </>
  )
}

export default ForcastDayWeatherItem
