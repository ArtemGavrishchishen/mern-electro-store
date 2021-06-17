import React from 'react'

import styles from './TachnicsItem.module.css'

const TachnicsItem = ({ item }) => {
  return (
    <li className={styles.item}>
      <div className={styles.image}>
        <img src={item.photo[0].url} alt={item.brand} />
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
