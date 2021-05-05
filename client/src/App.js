import React, { useCallback, useEffect, useState } from 'react'

import useAPI from './hooks/API.hook'

function App() {
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

  return (
    <div className="App">
      <h1>MERN ELECTRO STORE</h1>
      {state && <h2>{state}</h2>}
    </div>
  )
}

export default App
