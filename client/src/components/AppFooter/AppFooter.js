import React from 'react'
import Container from 'react-bootstrap/Container'

import { isMobile } from '../../configs/Responsive'
import styles from './AppFooter.module.css'

const AppFooter = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.top}>
        <Container fluid={isMobile()} className={styles.top}>
          Code design by{' '}
          <a
            href="https://github.com/ArtemGavrishchishen"
            target="_blank"
            rel="noopener noreferrer"
          >
            Artem Havryshchyshen
          </a>
        </Container>
      </div>
      <div className={styles.bottom}>
        <Container fluid={isMobile()}>© 2021 All rights reserved</Container>
      </div>
    </footer>
  )
}

export default AppFooter
