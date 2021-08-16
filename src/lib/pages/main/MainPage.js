import React, { useEffect, useMemo } from 'react'
import Search from '../../custom-component/search/Search'
import ContentHeader from '../../custom-component/content-header/ContentHeader'
import WeatherDetail from '../../custom-component/weather-detail/WeatherDetail'
import MapComponent from '../../custom-component/map/MapComponent'
import useCurrentLocation from '../../hooks/useCurrentLocation'
import useSearchByCor from '../../hooks/useSearchByCor'
import DefaultSmall from '../../responsive/DefaultSmall'
import Desktop from '../../responsive/Desktop'
import RenderContainerInMobile from '../../../components/containers/RenderContainerInMobile'

function MainPage() {
  // variables
  const geolocationOptions = useMemo(() => {
    return {
      timeout: 1000 * 60,
    }
  }, [])

  // hooks
  const { location, error } = useCurrentLocation(geolocationOptions)

  const searchByCoordinate = useSearchByCor(location, error)

  useEffect(() => {
    console.log(error)
    if (location) {
      searchByCoordinate.searchWithCurrent()
    }
  }, [location, error]) // eslint-disable-line react-hooks/exhaustive-deps

  // function

  // render
  const renderSearch = () => {
    return (
      <div className="flex wall">
        <Search location={{ location, error }} searchByCoordinate={searchByCoordinate} />
      </div>
    )
  }

  const renderMap = () => {
    return (
      <div className="flex wall">
        <MapComponent zoom={13} />
      </div>
    )
  }

  const renderWeatherDetail = () => {
    return <WeatherDetail />
  }

  return (
    <div className="wall">
      <div className="padh10">
        <ContentHeader />
      </div>
      <Desktop>
        <div className="flex f2 wall marv20">
          <div className="flex f1 fdc wall">
            {renderSearch()}
            {renderMap()}
          </div>
          <div className="flex f1">{renderWeatherDetail()}</div>
        </div>
      </Desktop>
      <DefaultSmall>
        <RenderContainerInMobile>{renderSearch()}</RenderContainerInMobile>
        <RenderContainerInMobile>{renderWeatherDetail()}</RenderContainerInMobile>
        <RenderContainerInMobile>{renderMap()}</RenderContainerInMobile>
      </DefaultSmall>
    </div>
  )
}

export default MainPage
