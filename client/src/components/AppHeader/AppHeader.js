import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'

import { Desktop, Tablet, Mobile } from '../../configs/Responsive'
import Navigation from '../Navigation'
import AppUser from '../AppUser'
import AppCart from '../AppCart'
import AppSidebar from '../AppSidebar'

import styles from './AppHeader.module.css'

const AppHeader = () => {
  return (
    <header className={styles.header}>
      <Mobile>
        <div className={styles.mobile}>
          <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#home">Navbar</Navbar.Brand>
            <div className={styles.menu}>
              <AppSidebar />
            </div>
            <div className={styles.user}>
              <AppUser />
            </div>
            <AppCart />
          </Navbar>

          <Form inline className={styles.search}>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-info">Search</Button>
          </Form>
        </div>
      </Mobile>

      <Tablet>
        <div className={styles.tablet}>
          <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#home">Navbar</Navbar.Brand>
            <Navigation />
            <div className={styles.user}>
              <AppUser />
            </div>
            <AppCart />
          </Navbar>

          <Form inline className={styles.search}>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-info">Search</Button>
          </Form>
        </div>
      </Tablet>

      <Desktop>
        <div className={styles.desktop}>
          <Navbar bg="dark" variant="dark" fixed="top">
            <Navbar.Brand href="#home">Navbar</Navbar.Brand>
            <Navigation />
            <Form inline className={styles.search}>
              <FormControl
                type="text"
                placeholder="Search"
                className="mr-sm-2"
              />
              <Button variant="outline-info">Search</Button>
            </Form>
            <div className={styles.user}>
              <AppUser />
            </div>
            <AppCart />
          </Navbar>
        </div>
      </Desktop>
    </header>
  )
}

export default AppHeader
