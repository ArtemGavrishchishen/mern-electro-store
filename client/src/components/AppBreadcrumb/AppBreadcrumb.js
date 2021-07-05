import React from 'react'
import { Link } from 'react-router-dom'
import Breadcrumb from 'react-bootstrap/Breadcrumb'
import Container from 'react-bootstrap/Container'

import { isMobile } from '../../configs/Responsive'
import styles from './AppBreadcrumb.module.css'

const AppBreadcrumb = ({ breadcrumb }) => {
  return (
    <div className={styles.breadcrumb}>
      <Container fluid={isMobile()}>
        <Breadcrumb>
          {breadcrumb.map((item, index, arr) => (
            <Breadcrumb.Item
              key={item.name}
              linkProps={{ to: item.route }}
              linkAs={Link}
              active={index + 1 === arr.length}
            >
              {item.name}
            </Breadcrumb.Item>
          ))}
        </Breadcrumb>
      </Container>
    </div>
  )
}

export default AppBreadcrumb
