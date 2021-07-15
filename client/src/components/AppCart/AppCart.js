import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Badge from 'react-bootstrap/Badge'
import { ReactComponent as Cart } from './assets/cart.svg'

import {
  getTechnicsByCart,
  removeFromCart,
  incrementItemFromCart,
  decrementItemFromCart,
} from '../../store/actions/cart.actions'
import AppModal from '../AppModal'
import AppCartList from '../AppCartList'

import styles from './AppCart.module.css'

const AppCart = () => {
  const dispatch = useDispatch()
  const ids = useSelector(state => state.cart.ids)
  const amount = useSelector(state => state.cart.amount)
  const [items, setItems] = useState([])

  const [show, setShow] = useState(false)

  useEffect(() => {
    if (ids.length !== 0) {
      dispatch(
        getTechnicsByCart({ ids: [...ids] }, ({ error, data }) => {
          if (error) {
            return
          }
          setItems([...data])
        })
      )
    } else {
      setItems([])
    }
  }, [ids])

  return (
    <>
      <AppModal isModal={show} title="Cart" closeModal={() => setShow(false)}>
        <div className={styles.cart}>
          {items.length === 0 && <h2>Cart is empty</h2>}
          {items.length !== 0 && (
            <AppCartList
              dispatch={dispatch}
              technics={items}
              amount={amount}
              remove={removeFromCart}
              incrementItem={incrementItemFromCart}
              decrementItem={decrementItemFromCart}
            />
          )}
        </div>
      </AppModal>

      <div className={styles.btn} onClick={() => setShow(true)}>
        <Cart />
        {items.length !== 0 && (
          <Badge className={styles.badge} variant="light">
            {items.length > 9 ? '9+' : items.length}
          </Badge>
        )}
      </div>
    </>
  )
}

export default AppCart
