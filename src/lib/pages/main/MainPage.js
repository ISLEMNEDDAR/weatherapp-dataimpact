import React from 'react'
import Search from '../../custom-component/search/Search'
import ContentHeader from '../../custom-component/content-header/ContentHeader'
import WeatherDetail from '../../custom-component/weather-detail/WeatherDetail'
import MapComponent from '../../custom-component/map/MapComponent'

function MainPage() {
  return (
    <div className="wall">
      <div className="padh10">
        <ContentHeader />
      </div>
      <div className="flex f2 wall marv20">
        <div className="flex f1 fdc wall">
          <div className="flex wall">
            <Search />
          </div>
          <div className="flex wall">
            <MapComponent zoom={13} />
          </div>
        </div>
        <div className="flex f1">
          <WeatherDetail />
        </div>
      </div>
    </div>
  )
}

export default MainPage
