import React, { useState } from 'react'
import Select from 'react-select'

import styles from './TechnicsSettingsTop.module.css'

const TechnicsSettingsTop = () => {
  const [selectedType, setSelectedType] = useState({
    value: 'new',
    label: 'new items',
  })

  const options = [
    { value: 'new', label: 'new items' },
    { value: 'cheap', label: 'from cheap to expensive' },
    { value: 'expensive', label: 'from expensive to cheap' },
  ]

  return (
    <div className={styles.container}>
      <div className={styles.settings}>
        <Select
          value={selectedType}
          onChange={e => setSelectedType(e)}
          options={options}
          className={styles.select}
        />
      </div>
    </div>
  )
}

export default TechnicsSettingsTop
