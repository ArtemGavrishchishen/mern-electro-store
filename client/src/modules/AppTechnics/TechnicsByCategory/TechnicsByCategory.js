import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useLocation, useHistory } from 'react-router-dom'
import queryString from 'query-string'
import get from 'lodash/get'
import ReactPaginate from 'react-paginate'

import TechnicsSettingsTop from '../TechnicsSettingsTop'
import TechnicsSidebar from '../TechnicsSidebar'
import TachnicsItem from '../TachnicsItem'

import { TabletAndDesktop, Mobile } from '../../../configs/Responsive'
import { getTechnics } from '../../../store/actions/technics.actions'
import styles from './TechnicsByCategory.module.css'

const TechnicsByCategory = ({ category }) => {
  const technics = useSelector(state => state.technics)
  const [sidebar, setSidebar] = useState({})
  const [selected, setSelected] = useState({})
  const [currentPage, setCurrentPage] = useState(0)
  const [pageCount, setPageCount] = useState(1)

  const dispatch = useDispatch()
  const location = useLocation()
  const history = useHistory()

  useEffect(() => {
    const parsed = queryString.parse(location.search, { arrayFormat: 'comma' })
    if (parsed.page) {
      setCurrentPage(+parsed.page)
    }

    setSelected(parsed)
  }, [location])

  useEffect(() => {
    const query = { ...selected, page: currentPage + 1 }
    dispatch(
      getTechnics(category, query, ({ error, data }) => {
        if (error) return
        const sidebar = get(data, 'data.sidebar', null)
        setSidebar(sidebar)
        setPageCount(10)
      })
    )
  }, [dispatch, selected, currentPage])

  const handleChangePage = page => {
    const parsed = queryString.parse(location.search, { arrayFormat: 'comma' })

    if (page > 0) {
      parsed.page = page
      setCurrentPage(page)
    }

    const stringified = queryString.stringify(parsed, { arrayFormat: 'comma' })

    history.push({
      pathname: location.pathname,
      search: stringified,
    })
  }

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
                <TachnicsItem
                  dispatch={dispatch}
                  item={item}
                  category={category}
                  key={item._id}
                />
              ))}
            </ul>
          </div>
        </Mobile>
        <TabletAndDesktop>
          <div className={styles.sidebar}>
            <div className={styles.sidebarContent}>
              <TechnicsSidebar
                sidebar={sidebar}
                selected={selected}
                location={location}
                history={history}
              />
            </div>
          </div>
          <div className={styles.grid}>
            <ul className={styles.list}>
              {technics.map(item => (
                <TachnicsItem
                  dispatch={dispatch}
                  item={item}
                  category={category}
                  key={item._id}
                />
              ))}
            </ul>

            <ReactPaginate
              initialPage={currentPage - 1}
              forcePage={currentPage - 1}
              containerClassName={styles.paginate}
              pageClassName={styles.items}
              breakClassName={styles.break}
              activeClassName={styles.active}
              pageCount={pageCount}
              pageRangeDisplayed={3}
              marginPagesDisplayed={1}
              onPageChange={p => handleChangePage(p.selected + 1)}
            />
          </div>
        </TabletAndDesktop>
      </div>
    </>
  )
}

export default TechnicsByCategory
