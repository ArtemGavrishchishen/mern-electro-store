import React from 'react'
import { NavLink } from 'react-router-dom'

import { HeaderNavigations } from '../../configs/navigations'
import styles from './Navigation.module.css'

const Navigation = () => {
  const link = HeaderNavigations({ isAdmin: true })
  return (
    <ul>
      {link.map(({ name, path }) => (
        <li className={styles.item} key={name}>
          <NavLink
            exact
            to={path}
            className={styles.link}
            activeClassName={styles.active}
          >
            {name}
          </NavLink>
        </li>
      ))}
    </ul>
  )
}

export default Navigation
