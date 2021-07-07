import React from 'react'
import { useSelector } from 'react-redux'

import AppMultipleSlider from '../AppMultipleSlider'

const AppTopProducts = () => {
  const technics = useSelector(state => state.technics)

  if (technics.length === 0) return null
  return <AppMultipleSlider technics={technics} title="Top technics" />
}

export default AppTopProducts
