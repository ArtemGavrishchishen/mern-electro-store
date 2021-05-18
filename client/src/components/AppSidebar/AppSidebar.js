import React, { useState } from 'react'
import { CSSTransition } from 'react-transition-group'
import { ReactComponent as Menu } from './assets/menu.svg'
import { ReactComponent as Close } from './assets/close.svg'
import Navigation from '../Navigation'

import styles from './AppSidebar.module.css'

const AppSidebar = () => {
  const [show, setShow] = useState(false)
  return (
    <>
      <CSSTransition
        in={show}
        timeout={200}
        classNames={{
          enter: styles.enter,
          enterDone: styles.enterDone,
          exit: styles.exit,
        }}
        unmountOnExit
      >
        <div className={styles.sidebar}>
          <div className={styles.container}>
            <div className={styles.header}>
              <div className={styles.btnClose} onClick={() => setShow(false)}>
                <Close />
              </div>
            </div>
            <Navigation column={true} />
          </div>
        </div>
      </CSSTransition>

      <div className={styles.btn} onClick={() => setShow(true)}>
        <Menu />
      </div>
    </>
  )
}

export default AppSidebar
