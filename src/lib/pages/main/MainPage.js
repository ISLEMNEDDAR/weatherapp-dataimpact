import React, { useEffect, useMemo } from 'react'
import Search from '../../custom-component/search/Search'
import ContentHeader from '../../custom-component/content-header/ContentHeader'
import WeatherDetail from '../../custom-component/weather-detail/WeatherDetail'
import MapComponent from '../../custom-component/map/MapComponent'
import useCurrentLocation from '../../hooks/useCurrentLocation'
import useSearchByCor from '../../hooks/useSearchByCor'
import { toastError } from '../../utils/toast.util'
import { ACTIVATE_LOCALISATION, GEOLOCALISATION_DENIED } from '../../errors'

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
    if (location) {
      const { errorLocation, message } = searchByCoordinate.searchWithCurrent()
      if (errorLocation) {
        toastError(message)
      }
    } else if (error === GEOLOCALISATION_DENIED) {
      toastError(ACTIVATE_LOCALISATION)
    }
  }, [location, error]) // eslint-disable-line react-hooks/exhaustive-deps

  // function

  return (
    <div className="wall">
      <div className="padh10">
        <ContentHeader />
      </div>
      <div className="flex f2 wall marv20">
        <div className="flex f1 fdc wall">
          <div className="flex wall">
            <Search location={{ location, error }} searchByCoordinate={searchByCoordinate} />
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
