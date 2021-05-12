import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import routesPath from './routesPath'

export const useRoutes = user => {
  if (user) {
    return (
      <Switch>
        <Route path={routesPath.MAIN} exact>
          <div>MAIN_Page</div>
        </Route>

        <Route path={routesPath.TECHNICS} exact>
          <div>TECHNICS_Page</div>
        </Route>

        {user.isAdmin && (
          <Route path={routesPath.ADMIN} exact>
            <div>ADMIN_Page</div>
          </Route>
        )}

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

      <Redirect to={routesPath.MAIN} />
    </Switch>
  )
}
