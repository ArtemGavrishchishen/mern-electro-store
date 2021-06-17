import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

import AppSlider from '../../../components/AppSlider'
import AppCategory from '../../../components/AppCategory'

const TechnicsMain = () => {
  return (
    <Container fluid>
      <Row>
        <AppSlider />
      </Row>
      <Row>
        <AppCategory />
      </Row>
    </Container>
  )
}

export default TechnicsMain
