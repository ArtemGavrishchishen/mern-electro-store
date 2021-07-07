import { useMediaQuery } from 'react-responsive'

export const Desktop = ({ children }) => {
  const isDesktop = useMediaQuery({ minWidth: 1024 })
  return isDesktop ? children : null
}

export const Tablet = ({ children }) => {
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1023 })
  return isTablet ? children : null
}

export const TabletAndDesktop = ({ children }) => {
  const isDesktop = useMediaQuery({ minWidth: 1024 })
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1023 })

  if (isDesktop || isTablet) {
    return children
  } else {
    return null
  }
}

export const Mobile = ({ children }) => {
  const isNotMobile = useMediaQuery({ minWidth: 768 })

  if (isNotMobile) {
    return null
  } else {
    return children
  }
}

export const isMobile = () => {
  const isNotMobile = useMediaQuery({ minWidth: 768 })

  if (isNotMobile) {
    return false
  } else {
    return true
  }
}

export const isMobileMini = () => {
  const isNotMobileMini = useMediaQuery({ minWidth: 576 })

  if (isNotMobileMini) {
    return false
  } else {
    return true
  }
}
