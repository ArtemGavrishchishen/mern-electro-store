import React from 'react'
import Button from 'react-bootstrap/Button'

import { toCurrency } from '../../../helpers'
import styles from './TechnicAbout.module.css'

const TechnicAbout = ({ price }) => {
  return (
    <div className={styles.about}>
      <div className={styles.trade}>
        <div className={styles.price}>{toCurrency(price)}</div>
        <Button className={styles.btn} variant="success">
          Success
        </Button>
      </div>
    </div>
  )
}

export default TechnicAbout
