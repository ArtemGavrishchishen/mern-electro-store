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
  const isDesktop = useMediaQuery({ minWidth: 1024 })
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1023 })

  if (isDesktop || isTablet) {
    return null
  } else {
    return children
  }
}

export const isMobile = () => {
  const isDesktop = useMediaQuery({ minWidth: 1024 })
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1023 })

  if (isDesktop || isTablet) {
    return false
  } else {
    return true
  }
}
