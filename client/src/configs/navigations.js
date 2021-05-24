import { useSelector } from 'react-redux'
import get from 'lodash/get'

import routesPath from './routesPath'

export const useNavigations = () => {
  const state = useSelector(state => state)
  const isAdmin = get(state, 'user.isAdmin', false)

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
    return [...navigation, { name: 'Admin Panel', path: routesPath.ADMIN }]
  }

  return navigation
}

export const ordersNavigation = { name: 'Orders', path: routesPath.ORDERS }
export const cartNavigation = { name: 'Cart', path: routesPath.CART }
