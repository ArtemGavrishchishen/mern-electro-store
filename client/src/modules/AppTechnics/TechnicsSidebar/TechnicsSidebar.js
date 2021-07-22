import React from 'react'
import queryString from 'query-string'
import get from 'lodash/get'

import AppCheckBox from '../../../components/AppCheckBox'
import styles from './TechnicsSidebar.module.css'

const TechnicsSidebar = ({ sidebar, selected, location, history }) => {
  const toggleCheckFromItems = (items, value) => {
    if (Array.isArray(items)) {
      return items.includes(value)
        ? items.filter(item => item !== value)
        : [...items, value]
    }
    if (!Array.isArray(items)) {
      return items === value ? [] : [items, value]
    }
    return items
  }

  const handleCheckBoxChange = ({ target }) => {
    const parsed = queryString.parse(location.search, { arrayFormat: 'comma' })

    if (!parsed[target.name]) {
      parsed[target.name] = target.value
    } else {
      parsed[target.name] = toggleCheckFromItems(
        parsed[target.name],
        target.value
      )
    }

    const stringified = queryString.stringify(parsed, { arrayFormat: 'comma' })

    history.push({
      pathname: location.pathname,
      search: stringified,
    })
  }

  return (
    <div className={styles.container}>
      <AppCheckBox
        name="brand"
        title="Brand"
        items={get(sidebar, 'brand', [])}
        selected={get(selected, 'brand', [])}
        handleChange={e => handleCheckBoxChange(e)}
      />

      <AppCheckBox
        name="model"
        title="Model"
        items={get(sidebar, 'model', [])}
        selected={get(selected, 'model', [])}
        handleChange={e => handleCheckBoxChange(e)}
      />
    </div>
  )
}

export default TechnicsSidebar
