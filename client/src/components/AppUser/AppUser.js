import React, { useState } from 'react'
import { ReactComponent as User } from './assets/User.svg'

import AppModal from '../AppModal'
import AuthForm from '../AuthForm'

import styles from './AppUser.module.css'

const AppUser = () => {
  //  const [isAuth, setIsAuth] = useState({ isAuthenticated: false })
  const [show, setShow] = useState(false)

  return (
    <>
      <AppModal isModal={show} closeModal={() => setShow(false)}>
        <AuthForm closeModal={() => setShow(false)} />
      </AppModal>

      <div className={styles.btn} onClick={() => setShow(true)}>
        <User />
      </div>
    </>
  )
}

export default AppUser
