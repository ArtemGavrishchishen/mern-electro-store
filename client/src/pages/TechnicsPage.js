import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import Container from 'react-bootstrap/Container'

import AppCategory from '../components/AppCategory'

import { getTechnics } from '../store/actions/technics.actions'

const TechnicsPage = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getTechnics())
  }, [dispatch])

  return (
    <Container fluid>
      <AppCategory />
    </Container>
  )
}

export default TechnicsPage
