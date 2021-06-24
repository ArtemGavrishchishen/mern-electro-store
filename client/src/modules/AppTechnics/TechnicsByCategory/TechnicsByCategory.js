import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import ReactPaginate from 'react-paginate'

import TechnicsSettingsTop from '../TechnicsSettingsTop'
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
      <TabletAndDesktop>
        <div className={styles.top}>
          <TechnicsSettingsTop />
        </div>
      </TabletAndDesktop>
      <div className={styles.container}>
        <Mobile>
          <div className={styles.grid}>
            <ul className={styles.list}>
              {technics.map(item => (
                <TachnicsItem item={item} category={category} key={item._id} />
              ))}
            </ul>
          </div>
        </Mobile>
        <TabletAndDesktop>
          <div className={styles.sidebar}>
            <div className={styles.sidebarContent}>
              <TechnicsSidebar />
            </div>
          </div>
          <div className={styles.grid}>
            <ul className={styles.list}>
              {technics.map(item => (
                <TachnicsItem item={item} category={category} key={item._id} />
              ))}
            </ul>
            <ReactPaginate
              initialPage={0}
              containerClassName={styles.paginate}
              pageClassName={styles.items}
              breakClassName={styles.break}
              activeClassName={styles.active}
              pageCount={450}
              pageRangeDisplayed={3}
              marginPagesDisplayed={1}
              onPageChange={p => console.log(p)}
            />
          </div>
        </TabletAndDesktop>
      </div>
    </>
  )
}

export default TechnicsByCategory
