import { useSelector } from 'react-redux'

function Selectors() {
  const weatherSelector = useSelector(state => state.weathers)
  const daysWeathersSelector = useSelector(state => state.daysWeathers)
  const coordinateSelector = useSelector(state => state.coordinates)
  return {
    weatherSelector,
    daysWeathersSelector,
    coordinateSelector,
  }
}

export default Selectors
