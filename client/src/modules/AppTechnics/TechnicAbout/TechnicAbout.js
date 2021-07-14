import React from 'react'
import Button from 'react-bootstrap/Button'

import { ReactComponent as Cart } from './assets/cart.svg'
import { ReactComponent as Like } from './assets/like.svg'

import { Mobile, TabletAndDesktop } from '../../../configs/Responsive'
import { toCurrency } from '../../../helpers'
import styles from './TechnicAbout.module.css'

const TechnicAbout = ({ price, isCheck = false, handlerBuy }) => {
  return (
    <div className={styles.about}>
      <div className={styles.trade}>
        <TabletAndDesktop>
          <div className={styles.price}>{toCurrency(price)}</div>
          <Button className={styles.btn} variant="success" onClick={handlerBuy}>
            <Cart />
            <span>Buy</span>
          </Button>
          <div className={`${styles.like} ${isCheck ? styles.check : null}`}>
            <Like />
          </div>
        </TabletAndDesktop>

        <Mobile>
          <div className={styles.cont}>
            <div className={styles.price}>{toCurrency(price)}</div>
            <div className={`${styles.like} ${isCheck ? styles.check : null}`}>
              <Like />
            </div>
          </div>
          <Button className={styles.btn} variant="success" onClick={handlerBuy}>
            <Cart />
            <span>Buy</span>
          </Button>
        </Mobile>
      </div>

      <div className={styles.payment}>
        <div className={styles.title}>Payment</div>
        <div className={styles.body}>
          We currently accepts Visa, MasterCard, Discover, American Express. (We
          do not accept PayPal.)
        </div>
      </div>
      <div className={styles.warranty}>
        <div className={styles.title}>Warranty</div>
        <div className={styles.body}>
          Some products sold directly by Technics may be eligible for repair by
          a third-party repair service provider authorised by select
          manufacturers to repair their products.
        </div>
      </div>
      <div className={styles.delivery}>
        <div className={styles.title}>Delivery</div>
        <div className={styles.body}>
          We offer guaranteed delivery on certain delivery speeds and select
          products. When guaranteed delivery is available on an order, we'll
          state this on the checkout page, with the associated delivery date and
          cost.
        </div>
      </div>
    </div>
  )
}

export default TechnicAbout
