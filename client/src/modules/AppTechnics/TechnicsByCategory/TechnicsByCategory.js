import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import TechnicsSidebar from '../TechnicsSidebar'
import TachnicsItem from '../TachnicsItem'

import { TabletAndDesktop, Mobile } from '../../../configs/Responsive'
import { getTechnics } from '../../../store/actions/technics.actions'
import styles from './TechnicsByCategory.module.css'

const TechnicsByCategory = ({ category }) => {
  const technics = useSelector(state => state.technics)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getTechnics(category))
  }, [dispatch])

  return (
    <>
      <div className={styles.container}>
        <Mobile>
          <div className={styles.grid}>
            <ul className={styles.list}>
              {technics.map(item => (
                <TachnicsItem item={item} key={item._id} />
              ))}
            </ul>
          </div>
        </Mobile>
        <TabletAndDesktop>
          <div className={styles.sidebar}>
            <TechnicsSidebar />
          </div>
          <div className={styles.grid}>
            <ul className={styles.list}>
              {technics.map(item => (
                <TachnicsItem item={item} key={item._id} />
              ))}
            </ul>
          </div>
        </TabletAndDesktop>
      </div>
    </>
  )
}

export default TechnicsByCategory
