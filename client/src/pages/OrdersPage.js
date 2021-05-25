import React from 'react'
import { useDispatch } from 'react-redux'

import { signOut } from '../store/actions/auth.actions'

const OrdersPage = () => {
  const dispatch = useDispatch()
  return (
    <div>
      <h2>OrdersPage</h2>
      <button
        type="button"
        onClick={() => {
          dispatch(signOut())
        }}
      >
        signOut
      </button>
    </div>
  )
}

export default OrdersPage
