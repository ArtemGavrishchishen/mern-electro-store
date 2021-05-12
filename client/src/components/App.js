import React from 'react'

import AppHeader from './AppHeader'
import AppFooter from './AppFooter'
import { useRoutes } from '../configs/routes'
import ApiFetchData from './ApiFetchData'

function App() {
  const routes = useRoutes({ isAdmin: true })

  return (
    <>
      <AppHeader />

      <main>
        <h1>MERN ELECTRO STORE</h1>

        {routes}

        <ApiFetchData />
      </main>

      <AppFooter />
    </>
  )
}

export default App
