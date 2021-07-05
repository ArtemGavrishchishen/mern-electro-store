import React from 'react'
import Slider from 'react-slick'
import { useSelector } from 'react-redux'
import Container from 'react-bootstrap/Container'

import AppViewedTechnicsItem from './AppViewedTechnicsItem'
import { isMobile, Mobile, Tablet, Desktop } from '../../configs/Responsive'
import styles from './AppViewedTechnics.module.css'

function SampleArrow(props) {
  const { className, style, onClick } = props
  return (
    <div
      className={className}
      style={{
        ...style,
        display: 'block',
        background: 'rgba(128, 128, 128, 0.7)',
        borderRadius: '50%',
      }}
      onClick={onClick}
    />
  )
}

const AppViewedTechnics = () => {
  const technics = useSelector(state => state.technics)

  const toLengthSlides = leng => {
    return technics.length >= leng ? leng : technics.length
  }

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: toLengthSlides(7),
    slidesToScroll: 1,
    arrows: !isMobile(),
    nextArrow: <SampleArrow />,
    prevArrow: <SampleArrow />,
    className: styles.slider,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: toLengthSlides(7),
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: toLengthSlides(5),
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: toLengthSlides(4),
        },
      },
    ],
  }

  if (technics.length === 0) return null
  return (
    <Container fluid={isMobile()}>
      <div className={styles.title}>Last viewed products</div>
      <Mobile>
        {technics.length <= 4 && (
          <div className={styles.list}>
            {technics.map(item => (
              <AppViewedTechnicsItem key={item._id} technic={item} />
            ))}
          </div>
        )}
        {technics.length > 4 && (
          <Slider {...settings}>
            {technics.map(item => (
              <AppViewedTechnicsItem key={item._id} technic={item} />
            ))}
          </Slider>
        )}
      </Mobile>

      <Tablet>
        {technics.length <= 5 && (
          <div className={styles.list}>
            {technics.map(item => (
              <AppViewedTechnicsItem key={item._id} technic={item} />
            ))}
          </div>
        )}
        {technics.length > 5 && (
          <Slider {...settings}>
            {technics.map(item => (
              <AppViewedTechnicsItem key={item._id} technic={item} />
            ))}
          </Slider>
        )}
      </Tablet>

      <Desktop>
        {technics.length <= 7 && (
          <div className={styles.list}>
            {technics.map(item => (
              <AppViewedTechnicsItem key={item._id} technic={item} />
            ))}
          </div>
        )}
        {technics.length > 7 && (
          <Slider {...settings}>
            {technics.map(item => (
              <AppViewedTechnicsItem key={item._id} technic={item} />
            ))}
          </Slider>
        )}
      </Desktop>
    </Container>
  )
}

export default AppViewedTechnics
