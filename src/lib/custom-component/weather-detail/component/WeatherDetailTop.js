import React from 'react'
import moment from 'moment'
import StyledText from '../../../../components/StyledText'
import { weightFont } from '../../../styles/style'

const listKPIWeather = [
  {
    type: 'Height',
    value: '38.9°',
  },
  {
    type: 'Wind',
    value: '38.9°',
  },
  {
    type: 'Low ',
    value: '38.9°',
  },
  {
    type: 'Humidity',
    value: '38.9°',
  },
]

function WeatherDetailTop() {
  // renders
  const renderNamePaysAndate = () => {
    return (
      <div className="flex fdc aic jcc">
        <h3 className="raleway fs23">Paris, FR</h3>
        <StyledText
          text={moment(new Date()).format('dddd, MMMM Do YYYY, h:mm A')}
          weightText={weightFont.medium}
          sizeText={18}
          classnametext="black"
        />
      </div>
    )
  }

  const renderCurrentWeather = () => {
    return (
      <div className="flex f1 jcc aic">
        <div className="flex jcc aic fs55">
          <i className="green wi wi-thunderstorm" />
        </div>
        <div className="flex aic jcc fdc padl15">
          <h3 className="fs45">13°C</h3>
          <span className="raleway-medium">ClearSky</span>
        </div>
      </div>
    )
  }

  const renderListOfindicator = () => {
    return (
      <div className="flex f1 aic jcc">
        <div className="row">
          {listKPIWeather.map(kpi => {
            return (
              <div className="col-md6 col-sm6">
                <h4>{kpi.value}</h4>
                <span>{kpi.type}</span>
              </div>
            )
          })}
        </div>
      </div>
    )
  }

  return (
    <div className="padv5">
      {renderNamePaysAndate()}
      <div className="flex fdr f2 marv40">
        {renderCurrentWeather()}
        {renderListOfindicator()}
      </div>
    </div>
  )
}

export default WeatherDetailTop
