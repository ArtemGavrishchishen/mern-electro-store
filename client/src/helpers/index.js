import { useCallback } from 'react'

export const toCurrency = price => {
  return new Intl.NumberFormat('en-EN', {
    currency: 'USD',
    style: 'currency',
  }).format(price)
}

export const useLocalStorage = () => {
  const setItem = useCallback((storageName, data) => {
    localStorage.setItem(storageName, JSON.stringify(data))
  }, [])

  const removeItem = useCallback(storageName => {
    localStorage.removeItem(storageName)
  }, [])

  const getItem = useCallback(storageName => {
    return JSON.parse(localStorage.getItem(storageName))
  }, [])

  return { setItem, removeItem, getItem }
}
