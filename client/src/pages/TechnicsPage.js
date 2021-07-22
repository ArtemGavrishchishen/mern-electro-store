import React, { useState, useEffect } from 'react'
import { useRouteMatch } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import get from 'lodash/get'

import AppBreadcrumb from '../components/AppBreadcrumb'
import TechnicsMain from '../modules/AppTechnics/TechnicsMain'
import TechnicsByCategory from '../modules/AppTechnics/TechnicsByCategory'
import TechnicsById from '../modules/AppTechnics/TechnicsById'

import routesPath from '../configs/routesPath'
import { getTechnicsById } from '../store/actions/technics.actions'

const TechnicsPage = () => {
  const dispatch = useDispatch()
  const [itemId, setItemId] = useState(null)
  const [category, setCategory] = useState(null)
  const [technicsById, setTechnicsById] = useState(null)

  const match = useRouteMatch(`${routesPath.TECHNICS}/:category?/:itemId?`)

  useEffect(() => {
    const params = get(match, 'params', null)

    if (params.itemId !== itemId) {
      setItemId(params.itemId)
    }

    if (params.category !== category) {
      setCategory(params.category)
    }
  }, [match])

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
      dispatch(
        getTechnicsById(category, itemId, ({ error, data }) => {
          if (error) {
            return
          }

          setTechnicsById(data.data[0])

          setBreadcrumb([
            ...initBreadcrumb,
            {
              name: category[0].toUpperCase() + category.slice(1),
              route: `${routesPath.TECHNICS}/${category}`,
            },
            {
              name: `${data.data[0].brand} - ${data.data[0].model}`,
              route: `${routesPath.TECHNICS}/${category}/${itemId}`,
            },
          ])
        })
      )
    }
  }, [category, itemId, dispatch])

  if (!category && !itemId) {
    return (
      <>
        <AppBreadcrumb breadcrumb={breadcrumb} />
        <TechnicsMain />
      </>
    )
  }

  if (itemId) {
    return (
      <>
        <AppBreadcrumb breadcrumb={breadcrumb} />
        <TechnicsById technic={technicsById} dispatch={dispatch} />
      </>
    )
  } else if (category) {
  }

  if (category) {
    return (
      <>
        <AppBreadcrumb breadcrumb={breadcrumb} />
        <TechnicsByCategory category={category} />
      </>
    )
  }
  return null
}

export default TechnicsPage
