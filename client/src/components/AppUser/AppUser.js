import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import get from 'lodash/get'
import { ReactComponent as User } from './assets/User.svg'
import { ReactComponent as Orders } from './assets/Orders.svg'

import AppModal from '../AppModal'
import AuthForm from '../AuthForm'

import { ordersNavigation } from '../../configs/navigations'
import styles from './AppUser.module.css'

const AppUser = () => {
  const [show, setShow] = useState(false)
  const state = useSelector(state => state)
  const token = get(state, 'auth.token', null)

  return (
    <>
      <AppModal
        isModal={show}
        title="AuthForm"
        closeModal={() => setShow(false)}
      >
        <AuthForm closeModal={() => setShow(false)} />
      </AppModal>

      {!token && (
        <div className={styles.btn} onClick={() => setShow(true)}>
          <User />
        </div>
      )}

      {token && (
        <Link to={ordersNavigation.path}>
          <div className={styles.btn}>
            <Orders />
          </div>
        </Link>
      )}
    </>
  )
}

export default AppUser
