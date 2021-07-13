import React from 'react'

import { useLocalStorage } from '../../helpers'
import AppMultipleSlider from '../AppMultipleSlider'

const AppViewedTechnics = () => {
  const { getItem } = useLocalStorage()
  const technics = getItem('ViewedProducts') || []

  if (technics.length === 0) return null
  return <AppMultipleSlider technics={technics} title="Last viewed products" />
}

export default AppViewedTechnics
