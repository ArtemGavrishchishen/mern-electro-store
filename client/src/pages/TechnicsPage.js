import React, { useState, useEffect } from 'react'
import { useRouteMatch } from 'react-router-dom'
import get from 'lodash/get'

import TechnicsMain from '../modules/AppTechnics/TechnicsMain'
import TechnicsByCategory from '../modules/AppTechnics/TechnicsByCategory'

import routesPath from '../configs/routesPath'

const TechnicsPage = () => {
  const match = useRouteMatch(`${routesPath.TECHNICS}/:category`)

  const [category, setCategory] = useState(null)

  useEffect(() => {
    const params = get(match, 'params.category', null)
    if (params !== category) {
      setCategory(params)
    }
  }, [match])

  if (!category) {
    return <TechnicsMain />
  } else {
    return <TechnicsByCategory category={category} />
  }
}

export default TechnicsPage
