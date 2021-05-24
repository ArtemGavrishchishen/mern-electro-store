import { useCallback } from 'react'

const storageName = 'userToken'

export const useToken = () => {
  const setToken = useCallback(jwtToken => {
    localStorage.setItem(storageName, JSON.stringify(jwtToken))
  }, [])

  const removeToken = useCallback(() => {
    localStorage.removeItem(storageName)
  }, [])

  const getToken = useCallback(() => {
    const data = JSON.parse(localStorage.getItem(storageName))
    return data
  }, [])

  return { setToken, removeToken, getToken }
}
