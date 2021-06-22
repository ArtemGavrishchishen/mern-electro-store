import React from 'react'
import Image from 'react-bootstrap/Image'

import { ReactComponent as Cart } from './assets/cart.svg'
import { toCurrency } from '../../../helpers'
import styles from './TachnicsItem.module.css'

const TachnicsItem = ({ item }) => {
  return (
    <li className={styles.item}>
      <div className={styles.card}>
        <div
          className={styles.image}
          onClick={() => console.log(`go to the product card ${item._id}`)}
        >
          <Image src={item.photo[0].thumbUrl} alt={item.brand} fluid />
        </div>
        <div className={styles.model}>
          <div>{item.brand} </div>
          <div>{item.model}</div>
        </div>
        <div className={styles.prise}>
          <span>{toCurrency(item.price)} </span>
          <span
            className={styles.btn}
            onClick={() => console.log(`buy goods ${item._id}`)}
          >
            <Cart />
          </span>
        </div>
      </div>
    </li>
  )
}

export default TachnicsItem
