import React from 'react'
import get from 'lodash/get'
import Container from 'react-bootstrap/Container'

import { TabletAndDesktop, Mobile } from '../../../configs/Responsive'
import TechnicPhoto from '../TechnicPhoto'
import TechnicAbout from '../TechnicAbout'

import styles from './TechnicsById.module.css'

const TechnicsById = ({ technic }) => {
  console.log(technic)
  if (!technic) return null
  return (
    <Container>
      <h2>{`${technic.brand} - ${technic.model}`}</h2>
      <p className={styles.id}>{`Code: ${technic._id}`}</p>
      <TabletAndDesktop>
        <div className={styles.technic}>
          <TechnicPhoto photo={get(technic, 'photo', [])} />
          <TechnicAbout price={get(technic, 'price', 0)} />
        </div>
      </TabletAndDesktop>
      <Mobile>
        <TechnicPhoto photo={get(technic, 'photo', [])} />
        <TechnicAbout price={get(technic, 'price', 0)} />
      </Mobile>
    </Container>
  )
}

export default TechnicsById
