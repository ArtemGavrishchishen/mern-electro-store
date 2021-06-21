import React from 'react'
import Image from 'react-bootstrap/Image'

import styles from './TachnicsItem.module.css'

const TachnicsItem = ({ item }) => {
  return (
    <li className={styles.item}>
      <div className={styles.image}>
        <Image src={item.photo[0].thumbUrl} alt={item.brand} fluid />
      </div>
      <div className={styles.model}>
        {item.brand} {item.model}
      </div>
      <div className={styles.prise}>{item.price}</div>

      <button type="button" className={styles.btn} onClick={() => {}}>
        Buy
      </button>
    </li>
  )
}

export default TachnicsItem
