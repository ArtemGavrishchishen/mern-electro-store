import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { useSelector } from 'react-redux'
import get from 'lodash/get'

import routesPath from './routesPath'

import AdminPage from '../pages/AdminPage'
import OrdersPage from '../pages/OrdersPage'

export const useRoutes = () => {
  const state = useSelector(state => state)
  const token = get(state, 'auth.token', null)
  const isAdmin = get(state, 'user.isAdmin', false)

  if (isAdmin) {
    return (
      <Switch>
        <Route path={routesPath.MAIN} exact>
          <div>MAIN_Page</div>
        </Route>

        <Route path={routesPath.TECHNICS} exact>
          <div>TECHNICS_Page</div>
        </Route>

        <Route path={routesPath.CART} exact>
          <div>CART_Page</div>
        </Route>

        <Route path={routesPath.ORDERS} exact>
          <OrdersPage />
        </Route>

        <Route path={routesPath.ADMIN}>
          <AdminPage />
        </Route>

        <Redirect to={routesPath.MAIN} />
      </Switch>
    )
  }

  if (token && !isAdmin) {
    return (
      <Switch>
        <Route path={routesPath.MAIN} exact>
          <div>MAIN_Page</div>
        </Route>

        <Route path={routesPath.TECHNICS} exact>
          <div>TECHNICS_Page</div>
        </Route>

        <Route path={routesPath.CART} exact>
          <div>CART_Page</div>
        </Route>

        <Route path={routesPath.ORDERS} exact>
          <OrdersPage />
        </Route>

        <Redirect to={routesPath.MAIN} />
      </Switch>
    )
  }

  return (
    <Switch>
      <Route path={routesPath.MAIN} exact>
        <div>MAIN_Page</div>
      </Route>

      <Route path={routesPath.TECHNICS} exact>
        <div>TECHNICS_Page</div>
      </Route>

      <Route path={routesPath.CART} exact>
        <div>CART_Page</div>
      </Route>

      <Redirect to={routesPath.MAIN} />
    </Switch>
  )
}

export const useAdminRoutes = () => {
  const state = useSelector(state => state)
  const isAdmin = get(state, 'user.isAdmin', false)
  if (isAdmin) {
    return (
      <Switch>
        <Route path={routesPath.ADMIN} exact>
          <div>Admin main</div>
        </Route>

        <Route path={`${routesPath.ADMIN}${routesPath.TECHNICS}`} exact>
          <div>Admin TECHNICS</div>
        </Route>

        <Route path={`${routesPath.ADMIN}${routesPath.ORDERS}`} exact>
          <div>Admin ORDERS</div>
        </Route>

        <Route path={`${routesPath.ADMIN}${routesPath.USERS}`} exact>
          <div>Admin USERS</div>
        </Route>

        <Redirect to={routesPath.ADMIN} />
      </Switch>
    )
  }
  return null
}
