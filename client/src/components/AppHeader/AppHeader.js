import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'

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
          <Container fluid>
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
              <FormControl
                type="text"
                placeholder="Search"
                className="mr-sm-2"
              />
              <Button variant="outline-info">Search</Button>
            </Form>
          </Container>
        </div>
      </Mobile>

      <Tablet>
        <div className={styles.tablet}>
          <Container>
            <Navbar bg="dark" variant="dark">
              <Navbar.Brand href="#home">Navbar</Navbar.Brand>
              <Navigation />
              <div className={styles.user}>
                <AppUser />
              </div>
              <AppCart />
            </Navbar>

            <Form inline className={styles.search}>
              <FormControl
                type="text"
                placeholder="Search"
                className="mr-sm-2"
              />
              <Button variant="outline-info">Search</Button>
            </Form>
          </Container>
        </div>
      </Tablet>

      <Desktop>
        <div className={styles.desktop}>
          <Container>
            <Navbar bg="dark" variant="dark">
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
          </Container>
        </div>
      </Desktop>
    </header>
  )
}

export default AppHeader
