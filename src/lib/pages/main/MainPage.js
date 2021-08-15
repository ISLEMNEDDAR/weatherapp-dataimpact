import React from 'react'
import Search from '../../custom-component/search/Search'
import ContentHeader from '../../custom-component/content-header/ContentHeader'
import WeatherDetail from '../../custom-component/weather-detail/WeatherDetail'
import MapComponent from '../../custom-component/map/MapComponent'

function MainPage() {
  return (
    <div className="wall">
      <div>
        <ContentHeader />
      </div>
      <div className="flex fdr wall f2 marv20">
        <div className="flex f1 fdc wall">
          <div className="flex f1 wall">
            <Search />
          </div>
          <div className="flex f1">
            <MapComponent />
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
