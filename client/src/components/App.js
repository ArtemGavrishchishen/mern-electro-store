import React from 'react'

import AppHeader from './AppHeader'
import AppFooter from './AppFooter'
import AuthForm from './AuthForm'

import { useRoutes } from '../configs/routes'
import ApiFetchData from './ApiFetchData'

function App() {
  const routes = useRoutes({ isAuthenticated: true, isAdmin: false })

  return (
    <>
      <AppHeader />

      <main>
        <h1>MERN ELECTRO STORE</h1>

        {routes}

        <ApiFetchData />

        <AuthForm />
      </main>

      <AppFooter />
    </>
  )
}

export default App
