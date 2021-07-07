import React from 'react'

import AppSlider from '../components/AppSlider'
import AppViewedTechnics from '../components/AppViewedTechnics'
import AppTopProducts from '../components/AppTopProducts'
import AppLatestAddedTechnics from '../components/AppLatestAddedTechnics'

const HomePage = () => {
  const styles = { marginBottom: '20px' }
  return (
    <>
      <div style={{ ...styles }}>
        <AppSlider />
      </div>
      <div style={{ ...styles }}>
        <AppViewedTechnics />
      </div>
      <div style={{ ...styles }}>
        <AppTopProducts />
      </div>
      <div style={{ ...styles }}>
        <AppLatestAddedTechnics />
      </div>
    </>
  )
}

export default HomePage
