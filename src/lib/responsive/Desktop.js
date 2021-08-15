import { useMediaQuery } from 'react-responsive'

const Desktop = ({ children }) => {
  const isDesktop = useMediaQuery({ minWidth: 769 })
  return isDesktop ? children : null
}

export default Desktop
