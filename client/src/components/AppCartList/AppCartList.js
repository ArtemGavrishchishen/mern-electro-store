import React from 'react'

import styles from './AppCartList.module.css'

const AppCartList = ({ technics }) => {
  return (
    <div className={styles.list}>
      {technics.map(item => (
        <div key={item._id} className={styles.item}>
          {item._id}
        </div>
      ))}
    </div>
  )
}

export default AppCartList
