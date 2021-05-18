import React, { useState, useEffect } from 'react'
import Badge from 'react-bootstrap/Badge'
import { ReactComponent as Cart } from './assets/cart.svg'

import AppModal from '../AppModal'

import styles from './AppCart.module.css'

const AppCart = () => {
  const [show, setShow] = useState(false)
  const [items, setItems] = useState([])

  useEffect(() => {
    setItems([])
  }, [])

  return (
    <>
      <AppModal isModal={show} closeModal={() => setShow(false)}>
        <div className={styles.cart}>
          {items.length === 0 && <h2>Cart is empty</h2>}

          {items.length !== 0 &&
            items.map(item => <div key={item.name}>{item.name}</div>)}
        </div>
      </AppModal>

      <div className={styles.btn} onClick={() => setShow(true)}>
        <Cart />
        {items.length !== 0 && (
          <Badge className={styles.badge} variant="light">
            {items.length}
          </Badge>
        )}
      </div>
    </>
  )
}

export default AppCart
