import React from 'react'
import { useHistory } from 'react-router-dom'
import Slider from 'react-slick'
import Container from 'react-bootstrap/Container'
import Image from 'react-bootstrap/Image'

import {
  isMobile,
  isMobileMini,
  Mobile,
  Tablet,
  Desktop,
} from '../../configs/Responsive'
import routesPath from '../../configs/routesPath'

import styles from './AppMultipleSlider.module.css'

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

const TechnicsItem = ({ technic = {} }) => {
  const history = useHistory()

  const handleClick = (category, id) => {
    history.push(`${routesPath.TECHNICS}/${category}/${id}`)
  }

  return (
    <div className={styles.item}>
      <div className={styles.card}>
        <div
          className={styles.image}
          onClick={() => handleClick(technic.type, technic._id)}
        >
          <Image src={technic.photo[0].thumbUrl} alt={technic.brand} fluid />
        </div>
        <div className={styles.model}>
          {technic.brand} - {technic.model}
        </div>
      </div>
    </div>
  )
}

const AppMultipleSlider = ({ title = '', technics = [] }) => {
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
          slidesToShow: isMobileMini() ? toLengthSlides(3) : toLengthSlides(4),
        },
      },
    ],
  }

  if (technics.length === 0) return null
  return (
    <Container fluid={isMobile()}>
      <div className={styles.title}>{title}</div>
      <Mobile>
        {isMobileMini() ? (
          <>
            {technics.length <= 3 && (
              <div className={styles.list}>
                {technics.map(item => (
                  <TechnicsItem key={item._id} technic={item} />
                ))}
              </div>
            )}
            {technics.length > 3 && (
              <Slider {...settings}>
                {technics.map(item => (
                  <TechnicsItem key={item._id} technic={item} />
                ))}
              </Slider>
            )}
          </>
        ) : (
          <>
            {technics.length <= 4 && (
              <div className={styles.list}>
                {technics.map(item => (
                  <TechnicsItem key={item._id} technic={item} />
                ))}
              </div>
            )}
            {technics.length > 4 && (
              <Slider {...settings}>
                {technics.map(item => (
                  <TechnicsItem key={item._id} technic={item} />
                ))}
              </Slider>
            )}
          </>
        )}
      </Mobile>

      <Tablet>
        {technics.length <= 5 && (
          <div className={styles.list}>
            {technics.map(item => (
              <TechnicsItem key={item._id} technic={item} />
            ))}
          </div>
        )}
        {technics.length > 5 && (
          <Slider {...settings}>
            {technics.map(item => (
              <TechnicsItem key={item._id} technic={item} />
            ))}
          </Slider>
        )}
      </Tablet>

      <Desktop>
        {technics.length <= 7 && (
          <div className={styles.list}>
            {technics.map(item => (
              <TechnicsItem key={item._id} technic={item} />
            ))}
          </div>
        )}
        {technics.length > 7 && (
          <Slider {...settings}>
            {technics.map(item => (
              <TechnicsItem key={item._id} technic={item} />
            ))}
          </Slider>
        )}
      </Desktop>
    </Container>
  )
}

export default AppMultipleSlider
