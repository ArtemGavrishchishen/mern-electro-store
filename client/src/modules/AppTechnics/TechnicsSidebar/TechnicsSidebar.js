import React, { useState, useEffect } from 'react'
import queryString from 'query-string'
import get from 'lodash/get'

import AppCheckBox from '../../../components/AppCheckBox'
import styles from './TechnicsSidebar.module.css'

const TechnicsSidebar = ({ params, selected, location, history }) => {
  const [sidebar, setSidebar] = useState({})

  useEffect(() => {
    setSidebar({
      brand: [
        { name: 'brand_1', count: 5 },
        { name: 'brand_2', count: 10 },
        { name: 'brand_3', count: 8 },
        { name: 'brand_4', count: 2 },
      ],
      model: [
        { name: 'model_1', count: 5 },
        { name: 'model_2', count: 10 },
        { name: 'model_3', count: 8 },
        { name: 'model_4', count: 2 },
      ],
    })
  }, [params])

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
