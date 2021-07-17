import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import Badge from 'react-bootstrap/Badge'
import Button from 'react-bootstrap/Button'

import { ReactComponent as Cart } from './assets/cart.svg'

import {
  getTechnicsByCart,
  removeFromCart,
  incrementItemFromCart,
  decrementItemFromCart,
  setCountItemFromCart,
} from '../../store/actions/cart.actions'
import AppModal from '../AppModal'
import AppCartList from '../AppCartList'

import { toCurrency } from '../../helpers'
import routesPath from '../../configs/routesPath'
import styles from './AppCart.module.css'

const AppCart = () => {
  const dispatch = useDispatch()
  const history = useHistory()
  const ids = useSelector(state => state.cart.ids)
  const amount = useSelector(state => state.cart.amount)
  const [items, setItems] = useState([])
  const [price, setPrice] = useState(0)

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

  useEffect(() => {
    const total = items.reduce(
      (acc, current) =>
        acc +
        current.price * (amount[current._id] >= 1 ? amount[current._id] : 0),
      0
    )
    setPrice(total)
  }, [items, amount])

  const handleSubmit = () => {
    history.push(routesPath.CHECKOUT)
    setShow(false)
  }

  return (
    <>
      <AppModal isModal={show} title="Cart" closeModal={() => setShow(false)}>
        <div className={styles.cart}>
          {items.length === 0 && (
            <h2 className={styles.empty}>Cart is empty</h2>
          )}
          {items.length !== 0 && (
            <>
              <AppCartList
                dispatch={dispatch}
                technics={items}
                amount={amount}
                remove={removeFromCart}
                incrementItem={incrementItemFromCart}
                decrementItem={decrementItemFromCart}
                setCountItem={setCountItemFromCart}
              />
              <div className={styles.footer}>
                <div className={styles.total}>
                  <span>Total: </span> {toCurrency(price)}
                </div>
                <Button
                  variant="success"
                  className={styles.buy}
                  onClick={handleSubmit}
                >
                  <span>Сheckout</span>
                </Button>
              </div>
            </>
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
