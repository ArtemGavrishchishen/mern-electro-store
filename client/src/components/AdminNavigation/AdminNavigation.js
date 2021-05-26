import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { NavLink } from 'react-router-dom'

import { useAdminNavigations } from '../../configs/navigations'
import styles from './AdminNavigation.module.css'

const AdminNavigation = () => {
  const link = useAdminNavigations()
  return (
    <Navbar bg="dark" variant="dark" className={styles.container}>
      <Nav className={`flex-column ${styles.nav}`}>
        {link.map(({ name, path }) => (
          <Nav.Link as={NavLink} key={name} to={path} exact>
            {name}
          </Nav.Link>
        ))}
      </Nav>
    </Navbar>
  )
}

export default AdminNavigation
