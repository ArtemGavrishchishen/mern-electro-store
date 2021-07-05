import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { useSelector } from 'react-redux'
import get from 'lodash/get'

import routesPath from './routesPath'

// === Pages
import HomePage from '../pages/HomePage'
import AdminPage from '../pages/AdminPage'
import TechnicsPage from '../pages/TechnicsPage'
import OrdersPage from '../pages/OrdersPage'

// === Admin Panel
import AdminAddProductPanel from '../modules/AppAdmin/AdminAddProductPanel'
import AdminTechnicsPanel from '../modules/AppAdmin/AdminTechnicsPanel'
import AdminOrdersPanel from '../modules/AppAdmin/AdminOrdersPanel'
import AdminUsersPanel from '../modules/AppAdmin/AdminUsersPanel'

export const useRoutes = () => {
  const state = useSelector(state => state)
  const token = get(state, 'auth.token', null)
  const isAdmin = get(state, 'user.isAdmin', false)

  if (isAdmin) {
    return (
      <Switch>
        <Route path={routesPath.MAIN} exact>
          <HomePage />
        </Route>

        <Route path={routesPath.TECHNICS}>
          <TechnicsPage />
        </Route>

        {/* <Route path={`${routesPath.TECHNICS}/:category`} exact>
          <TechnicsPage />
        </Route> */}

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
          <HomePage />
        </Route>

        <Route path={routesPath.TECHNICS}>
          <TechnicsPage />
        </Route>

        {/* <Route path={`${routesPath.TECHNICS}/:category`} exact>
          <TechnicsPage />
        </Route> */}

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
        <HomePage />
      </Route>

      <Route path={routesPath.TECHNICS}>
        <TechnicsPage />
      </Route>

      {/* <Route path={`${routesPath.TECHNICS}/:category`} exact>
        <TechnicsPage />
      </Route> */}

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
          <AdminAddProductPanel />
        </Route>

        <Route path={`${routesPath.ADMIN}${routesPath.TECHNICS}`} exact>
          <AdminTechnicsPanel />
        </Route>

        <Route path={`${routesPath.ADMIN}${routesPath.ORDERS}`} exact>
          <AdminOrdersPanel />
        </Route>

        <Route path={`${routesPath.ADMIN}${routesPath.USERS}`} exact>
          <AdminUsersPanel />
        </Route>

        <Redirect to={routesPath.ADMIN} />
      </Switch>
    )
  }
  return null
}
