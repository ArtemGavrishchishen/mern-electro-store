import React, { useEffect } from 'react'
import get from 'lodash/get'
import { useSelector, useDispatch } from 'react-redux'

import AppHeader from './AppHeader'
import AppFooter from './AppFooter'

import { useToken } from '../hooks/token.hook'
import { getUser } from '../store/actions/user.actions'
import { setTokenInStore } from '../store/actions/auth.actions'
import { useRoutes } from '../configs/routes'

function App() {
  const dispatch = useDispatch()
  const state = useSelector(state => state)
  const token = get(state, 'auth.token', null)

  const { getToken } = useToken()
  const tokenLS = getToken()

  useEffect(() => {
    if (!token && tokenLS) {
      dispatch(setTokenInStore(tokenLS))
    }
  }, [tokenLS])

  useEffect(() => {
    if (token) {
      dispatch(getUser())
    }
  }, [token])

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
