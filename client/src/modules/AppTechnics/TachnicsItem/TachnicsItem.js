import React from 'react'
import { useHistory } from 'react-router-dom'
import Image from 'react-bootstrap/Image'

import { ReactComponent as Cart } from './assets/cart.svg'
import { addToCart } from '../../../store/actions/cart.actions'
import { toCurrency } from '../../../helpers'
import routesPath from '../../../configs/routesPath'
import styles from './TachnicsItem.module.css'

const TachnicsItem = ({ item, category, dispatch }) => {
  const history = useHistory()

  const handleClick = id => {
    history.push(`${routesPath.TECHNICS}/${category}/${id}`)
  }

  return (
    <li className={styles.item}>
      <div className={styles.card}>
        <div className={styles.image} onClick={() => handleClick(item._id)}>
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
            onClick={() => dispatch(addToCart(item._id))}
          >
            <Cart />
          </span>
        </div>
      </div>
    </li>
  )
}

export default TachnicsItem
