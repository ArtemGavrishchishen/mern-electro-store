import React, { useState, useEffect } from 'react'
import { useRouteMatch } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import get from 'lodash/get'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

import AppSlider from '../components/AppSlider'
import AppCategory from '../components/AppCategory'

import routesPath from '../configs/routesPath'
import { getTechnics } from '../store/actions/technics.actions'

const TechnicsPage = () => {
  const match = useRouteMatch(`${routesPath.TECHNICS}/:category`)
  const dispatch = useDispatch()

  const [category, setCategory] = useState(null)

  useEffect(() => {
    const params = get(match, 'params.category', null)
    if (params !== category) {
      setCategory(params)
    }
  }, [match])

  useEffect(() => {
    dispatch(getTechnics())
  }, [dispatch])

  if (category === null) {
    return (
      <Container fluid>
        <Row>
          <AppSlider />
        </Row>
        <Row>
          <AppCategory match={match} />
        </Row>
      </Container>
    )
  }
  return null
}

export default TechnicsPage
