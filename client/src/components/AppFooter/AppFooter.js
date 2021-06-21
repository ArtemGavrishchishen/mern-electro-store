import React from 'react'
import Container from 'react-bootstrap/Container'

import styles from './AppFooter.module.css'

const AppFooter = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.top}>
        <Container>AppFooter top</Container>
      </div>
      <div className={styles.bottom}>
        <Container>AppFooter bottom</Container>
      </div>
    </footer>
  )
}

export default AppFooter
