import React from 'react'

import AppHeader from './AppHeader'
import AppFooter from './AppFooter'

import { useRoutes } from '../configs/routes'

function App() {
  const routes = useRoutes()

  return (
    <>
      <AppHeader />
      <main>{routes}</main>
      <AppFooter />
    </>
  )
}

export default App
