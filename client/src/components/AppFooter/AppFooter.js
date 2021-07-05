import React from 'react'
import Container from 'react-bootstrap/Container'

import { isMobile } from '../../configs/Responsive'
import styles from './AppFooter.module.css'

const AppFooter = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.top}>
        <Container fluid={isMobile()}>AppFooter top</Container>
      </div>
      <div className={styles.bottom}>
        <Container fluid={isMobile()}>AppFooter bottom</Container>
      </div>
    </footer>
  )
}

export default AppFooter
