import React from 'react'
import { useHistory } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import mobile from './assets/mobile.png'
import tablet from './assets/tablet.png'
import notebook from './assets/notebook.png'
import tv from './assets/tv.png'
import other from './assets/other.png'

import routesPath from '../../configs/routesPath'
import { types } from '../../configs/category'
import styles from './AppCategory.module.css'

const AppCategory = ({ match }) => {
  const history = useHistory()

  const categotyImg = [
    { src: mobile, id: types.MOBILE, name: 'Mobile' },
    { src: tablet, id: types.TABLETS, name: 'Tablet' },
    { src: notebook, id: types.NOTEBOOKS, name: 'Notebook' },
    { src: tv, id: types.TV, name: 'TV' },
    { src: other, id: types.OTHER, name: 'Other' },
  ]

  const handleClick = category => {
    history.push(`${routesPath.TECHNICS}/${category}`)
  }

  return (
    <Container>
      <Row>
        {categotyImg.map(category => (
          <Col key={category.id}>
            <div
              className={styles.container}
              onClick={() => handleClick(category.id)}
            >
              <div className={styles.images}>
                <img
                  src={category.src}
                  alt={category.id}
                  key={category.id}
                  width="150px"
                />
              </div>
              <div className={styles.title}>{category.name}</div>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  )
}

export default AppCategory
