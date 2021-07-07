import React from 'react'
import { useSelector } from 'react-redux'

import AppMultipleSlider from '../AppMultipleSlider'

const AppViewedTechnics = () => {
  const technics = useSelector(state => state.technics)

  if (technics.length === 0) return null
  return <AppMultipleSlider technics={technics} title="Last viewed products" />
}

export default AppViewedTechnics
