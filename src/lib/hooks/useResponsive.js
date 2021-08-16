import { useMediaQuery } from 'react-responsive'

const useResponsive = () => {
  const isDesktop = useMediaQuery({ query: '(min-width: 769px)' })
  const isTablet = useMediaQuery({ query: '(min-width: 426px) and (max-width: 768px)' })
  const isMobile = useMediaQuery({ query: '(max-width: 425px)' })
  const isMobileTablet = useMediaQuery({ query: '(max-width:  768px)' })
  const isTabletDesktop = useMediaQuery({ query: '(min-width: 426px)' })

  return {
    isDesktop,
    isTablet,
    isMobile,
    isMobileTablet,
    isTabletDesktop,
  }
}

export default useResponsive
