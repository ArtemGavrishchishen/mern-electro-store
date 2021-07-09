import React, { useEffect, useState } from 'react'
import Image from 'react-bootstrap/Image'

import styles from './TechnicPhoto.module.css'

const TechnicPhoto = ({ photo = [] }) => {
  const [photoList, setPhotoList] = useState([])
  const [isActivePhoto, setActivePhoto] = useState('')

  const handleChangeActivePhoto = id => {
    const active = photoList.find(p => p.isActive)
    if (active.id === id) return

    const newActivePhoto = photoList.map(p =>
      p.id === id ? { ...p, isActive: true } : { ...p, isActive: false }
    )
    setPhotoList(newActivePhoto)
  }

  useEffect(() => {
    if (photo.length !== 0) {
      const list = photo.map((p, i) =>
        i === 0
          ? {
              id: p.imgbbId,
              thumb: p.thumbUrl,
              img: p.displayUrl,
              isActive: true,
            }
          : {
              id: p.imgbbId,
              thumb: p.thumbUrl,
              img: p.displayUrl,
              isActive: false,
            }
      )
      setPhotoList(list)
    }
  }, [photo])

  useEffect(() => {
    const active = photoList.find(p => p.isActive)

    if (active) {
      setActivePhoto(active.img)
    }
  }, [photoList])

  return (
    <div className={styles.container}>
      <div className={styles.thumbnails}>
        <ul className={styles.list}>
          {photoList.map(p => (
            <li
              className={styles.item}
              key={p.id}
              onClick={() => handleChangeActivePhoto(p.id)}
            >
              <img src={p.thumb} alt={p.id} />
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.photo}>
        <Image src={isActivePhoto} alt={isActivePhoto} fluid />
      </div>
    </div>
  )
}

export default TechnicPhoto
