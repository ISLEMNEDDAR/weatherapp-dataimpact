import { useMediaQuery } from 'react-responsive'

const Default = ({ children }) => {
  const isNotMobile = useMediaQuery({ minWidth: 426 })
  return isNotMobile ? children : null
}

export default Default
