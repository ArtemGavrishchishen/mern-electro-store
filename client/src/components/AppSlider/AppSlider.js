import React, { useState } from 'react'
import Carousel from 'react-bootstrap/Carousel'
import Container from 'react-bootstrap/Container'

import { isMobile } from '../../configs/Responsive'

import apple from './assets/apple.jpeg'
import xiaomi from './assets/xiaomi.jpeg'
import samsung from './assets/samsung.jpeg'

import styles from './AppSlider.module.css'

const AppSlider = () => {
  const [index, setIndex] = useState(0)

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex)
  }

  return (
    <Container fluid={isMobile()}>
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <div
            className={styles.item}
            style={{
              backgroundImage: `url(${apple})`,
            }}
          >
            <div
              style={{
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                width: '100%',
                height: '100%',
              }}
            >
              <Carousel.Caption>
                <h3>Apple sale</h3>
                <p>Buy your dream with our store.</p>
              </Carousel.Caption>
            </div>
          </div>
        </Carousel.Item>

        <Carousel.Item>
          <div
            className={styles.item}
            style={{
              backgroundImage: `url(${samsung})`,
            }}
          >
            <div
              style={{
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                width: '100%',
                height: '100%',
              }}
            >
              <Carousel.Caption>
                <h3>The limited-time offer</h3>
                <p>The best technics by the lowest price.</p>
              </Carousel.Caption>
            </div>
          </div>
        </Carousel.Item>

        <Carousel.Item>
          <div
            className={styles.item}
            style={{
              backgroundImage: `url(${xiaomi})`,
            }}
          >
            <div
              style={{
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                width: '100%',
                height: '100%',
              }}
            >
              <Carousel.Caption>
                <h3>Stay connected</h3>
                <p>Buy mobile phones for years.</p>
              </Carousel.Caption>
            </div>
          </div>
        </Carousel.Item>
      </Carousel>
    </Container>
  )
}

export default AppSlider
