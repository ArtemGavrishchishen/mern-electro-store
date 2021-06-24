import React, { useState, useEffect } from 'react'
import { useRouteMatch } from 'react-router-dom'
import get from 'lodash/get'

import AppBreadcrumb from '../components/AppBreadcrumb'
import TechnicsMain from '../modules/AppTechnics/TechnicsMain'
import TechnicsByCategory from '../modules/AppTechnics/TechnicsByCategory'

import routesPath from '../configs/routesPath'

const TechnicsPage = () => {
  const [category, setCategory] = useState(null)
  const [itemId, setItemId] = useState(null)

  const match = useRouteMatch(`${routesPath.TECHNICS}/:category`)
  const matchItem = useRouteMatch(`${routesPath.TECHNICS}/${category}/:itemId`)

  useEffect(() => {
    const params = get(match, 'params.category', null)
    if (params !== category) {
      setCategory(params)
    }
  }, [match])

  useEffect(() => {
    const id = get(matchItem, 'params.itemId', null)
    if (id !== itemId) {
      setItemId(id)
    }
  }, [matchItem])

  const initBreadcrumb = [
    { name: 'Home', route: routesPath.MAIN },
    { name: 'Technics', route: routesPath.TECHNICS },
  ]
  const [breadcrumb, setBreadcrumb] = useState(initBreadcrumb)

  useEffect(() => {
    if (!category) {
      setBreadcrumb([...initBreadcrumb])
    } else if (!itemId) {
      setBreadcrumb([
        ...initBreadcrumb,
        {
          name: category[0].toUpperCase() + category.slice(1),
          route: `${routesPath.TECHNICS}/${category}`,
        },
      ])
    } else {
      setBreadcrumb([
        ...initBreadcrumb,
        {
          name: category[0].toUpperCase() + category.slice(1),
          route: `${routesPath.TECHNICS}/${category}`,
        },
        { name: itemId, route: `${routesPath.TECHNICS}/${category}/${itemId}` },
      ])
    }
  }, [category, itemId])

  if (itemId) {
    return (
      <>
        <AppBreadcrumb breadcrumb={breadcrumb} />
        {itemId}
      </>
    )
  }
  if (!category) {
    return (
      <>
        <AppBreadcrumb breadcrumb={breadcrumb} />
        <TechnicsMain />
      </>
    )
  } else {
    return (
      <>
        <AppBreadcrumb breadcrumb={breadcrumb} />
        <TechnicsByCategory category={category} />
      </>
    )
  }
}

export default TechnicsPage
