import React from 'react'
import Image from 'react-bootstrap/Image'

import styles from './AppViewedTechnics.module.css'

const AppViewedTechnicsItem = ({ technic = {} }) => {
  return (
    <div className={styles.item}>
      <div className={styles.card}>
        <div className={styles.image} onClick={() => console.log(technic._id)}>
          <Image src={technic.photo[0].thumbUrl} alt={technic.brand} fluid />
        </div>
        <div className={styles.model}>
          {technic.brand} - {technic.model}
        </div>
      </div>
    </div>
  )
}

export default AppViewedTechnicsItem
