import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import routesPath from './routesPath'

export const useRoutes = ({ isAuthenticated = false, isAdmin = false }) => {
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

      {(isAuthenticated || !isAdmin) && (
        <Route path={routesPath.ORDERS} exact>
          <div>ORDERS_Page</div>
        </Route>
      )}

      {isAdmin && (
        <>
          <Route path={routesPath.ORDERS} exact>
            <div>ORDERS_Page</div>
          </Route>

          <Route path={routesPath.ADMIN} exact>
            <div>ADMIN_Page</div>
          </Route>
        </>
      )}

      <Redirect to={routesPath.MAIN} />
    </Switch>
  )
}
