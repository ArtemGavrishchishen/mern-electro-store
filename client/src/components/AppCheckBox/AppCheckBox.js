import React from 'react'

import styles from './AppCheckBox.module.css'

const AppCheckBox = ({
  items = [],
  selected = [],
  name = '',
  title = '',
  handleChange,
}) => {
  if (items.length === 0) return null

  return (
    <>
      <h4>{title}</h4>
      <ul className={styles.list}>
        {items.map(item => (
          <li className={styles.item} key={item.name}>
            <label>
              <input
                type="checkbox"
                name={name}
                value={item.name}
                onChange={handleChange}
                checked={selected.includes(item.name)}
              />
              <span>{item.name}</span>
              <span className={styles.count}> ({item.count})</span>
            </label>
          </li>
        ))}
      </ul>
    </>
  )
}

export default AppCheckBox
