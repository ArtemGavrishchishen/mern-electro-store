import React from 'react'
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button'

import { ReactComponent as Plus } from './assets/plus.svg'
import { ReactComponent as Remove } from './assets/remove.svg'
import { ReactComponent as TrashBin } from './assets/trash-bin.svg'

import { toCurrency } from '../../helpers'
import styles from './AppCartList.module.css'

const AppCartList = ({
  dispatch,
  technics,
  amount,
  remove,
  incrementItem,
  decrementItem,
  setCountItem,
}) => {
  const handlerChange = (id, count) => {
    if (count && count >= 1 && count <= 99) {
      dispatch(setCountItem(id, count))
    }
  }

  return (
    <div className={styles.list}>
      {technics.map(technic => (
        <div key={technic._id} className={styles.item}>
          <div className={styles.body}>
            <div className={styles.image}>
              <Image
                src={technic.photo[0].thumbUrl}
                alt={technic.brand}
                fluid
              />
            </div>

            <div className={styles.cont}>
              <div className={styles.contTop}>
                <div className={styles.title}>
                  {`${technic.brand} - ${technic.model}`}
                </div>
                <Button
                  className={styles.remove}
                  variant="danger"
                  onClick={() => dispatch(remove(technic._id))}
                >
                  <TrashBin />
                </Button>
              </div>
              <div className={styles.nav}>
                <div className={styles.counter}>
                  <div>
                    <button
                      type="button"
                      className={styles.btn}
                      onClick={() => dispatch(decrementItem(technic._id))}
                    >
                      <Remove />
                    </button>
                    <input
                      className={styles.number}
                      type="number"
                      min={1}
                      max={99}
                      value={amount[technic._id] ? amount[technic._id] : 1}
                      onChange={e => handlerChange(technic._id, e.target.value)}
                    />
                    <button
                      type="button"
                      className={styles.btn}
                      onClick={() => dispatch(incrementItem(technic._id))}
                    >
                      <Plus />
                    </button>
                  </div>
                </div>
                <div className={styles.price}>
                  {toCurrency(technic.price * amount[technic._id])}
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default AppCartList
