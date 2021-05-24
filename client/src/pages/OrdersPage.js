import React from 'react'
import { useDispatch } from 'react-redux'

import { signOut } from '../store/actions/auth.actions'
import { useToken } from '../hooks/token.hook'

const OrdersPage = () => {
  const dispatch = useDispatch()
  const { removeToken } = useToken()
  return (
    <div>
      <h2>OrdersPage</h2>
      <button
        type="button"
        onClick={() => {
          removeToken()
          dispatch(signOut())
        }}
      >
        signOut
      </button>
    </div>
  )
}

export default OrdersPage
