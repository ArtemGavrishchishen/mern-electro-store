import routesPath from './routesPath'

export const useNavigations = ({
  isAuthenticated = false,
  isAdmin = false,
}) => {
  const navigation = [
    {
      name: 'Home',
      path: routesPath.MAIN,
    },
    {
      name: 'Technics',
      path: routesPath.TECHNICS,
    },
  ]

  if (isAdmin) {
    return [
      ...navigation,
      { name: 'Orders', path: routesPath.ORDERS },
      { name: 'Admin Panel', path: routesPath.ADMIN },
    ]
  }

  if (isAuthenticated && !isAdmin) {
    return [...navigation, { name: 'Orders', path: routesPath.ORDERS }]
  }

  return navigation
}

export const cartNavigation = { name: 'Cart', path: routesPath.CART }
