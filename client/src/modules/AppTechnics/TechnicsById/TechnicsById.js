import React, { useEffect } from 'react'
import get from 'lodash/get'
import Container from 'react-bootstrap/Container'

import { addToCart } from '../../../store/actions/cart.actions'
import { useLocalStorage } from '../../../helpers'
import { TabletAndDesktop, Mobile } from '../../../configs/Responsive'
import TechnicPhoto from '../TechnicPhoto'
import TechnicAbout from '../TechnicAbout'
import AppViewedTechnics from '../../../components/AppViewedTechnics'

import styles from './TechnicsById.module.css'

const TechnicsById = ({ technic, dispatch }) => {
  if (!technic) return null

  const { setItem, removeItem, getItem } = useLocalStorage()

  useEffect(() => {
    const viewed = getItem('ViewedProducts') || []

    if (viewed.length === 0) {
      setItem('ViewedProducts', [{ viewedDate: Date.now(), ...technic }])
    } else {
      removeItem('ViewedProducts')

      const withoutTechnic = viewed.filter(item => item._id !== technic._id)

      const viewedTechnics = [
        { viewedDate: Date.now(), ...technic },
        ...withoutTechnic,
      ].sort(function (a, b) {
        if (a.viewedDate < b.viewedDate) {
          return 1
        }
        if (a.viewedDate > b.viewedDate) {
          return -1
        }
        return 0
      })
      if (viewedTechnics.length > 10) {
        setItem('ViewedProducts', [...viewedTechnics.slice(0, 10)])
      } else {
        setItem('ViewedProducts', [...viewedTechnics])
      }
    }
  }, [technic])

  return (
    <Container>
      <h2>{`${technic.brand} - ${technic.model}`}</h2>
      <p className={styles.id}>{`Code: ${technic._id}`}</p>
      <TabletAndDesktop>
        <div className={styles.technic}>
          <TechnicPhoto photo={get(technic, 'photo', [])} />
          <TechnicAbout
            price={get(technic, 'price', 0)}
            handlerBuy={() => dispatch(addToCart(technic._id))}
          />
        </div>
      </TabletAndDesktop>
      <Mobile>
        <TechnicPhoto photo={get(technic, 'photo', [])} />
        <TechnicAbout
          price={get(technic, 'price', 0)}
          handlerBuy={() => dispatch(addToCart(technic._id))}
        />
      </Mobile>
      <div className={styles.viewed}>
        <AppViewedTechnics />
      </div>
    </Container>
  )
}

export default TechnicsById
