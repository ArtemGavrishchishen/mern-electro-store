import React, { useCallback, useEffect, useState } from 'react'

import useAPI from '../hooks/useAPI.hook'

function ApiFetchData() {
  const { request } = useAPI()
  const [state, setState] = useState(null)

  const fetchData = useCallback(async () => {
    try {
      const response = await request('/')
      setState(response.message)
    } catch (error) {
      console.log('fetchData: ', error)
    }
  }, [request])

  useEffect(() => {
    fetchData()
  }, [fetchData])

  return <>{state && <h2>{state}</h2>}</>
}

export default ApiFetchData
