import { useMediaQuery } from 'react-responsive'

const DefaultSmall = ({ children }) => {
  const isNotMobile = useMediaQuery({ maxWidth: 768 })
  return isNotMobile ? children : null
}

export default DefaultSmall
