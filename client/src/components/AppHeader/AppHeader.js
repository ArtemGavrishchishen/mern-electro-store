import React from 'react'

import Navigation from '../Navigation'
import styles from './AppHeader.module.css'

const AppHeader = () => {
  return (
    <header className={styles.header}>
      <div>AppHeader</div>
      <Navigation />
    </header>
  )
}

export default AppHeader
