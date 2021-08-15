import { useState, useEffect } from 'react'

const useCurrentLocation = (options = {}) => {
  const [location, setLocation] = useState(null)
  const [error, setError] = useState(null)

  const handleSuccess = pos => {
    const { latitude, longitude } = pos.coords
    setLocation({
      latitude,
      longitude,
    })
  }
  const handleError = e => {
    setError(e.message)
  }
  useEffect(() => {
    const { geolocation } = navigator
    if (!geolocation) {
      setError('')
      return
    }
    geolocation.getCurrentPosition(handleSuccess, handleError, options)
  }, [options])
  return { location, error }
}

export default useCurrentLocation
