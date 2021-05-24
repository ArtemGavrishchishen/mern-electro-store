import axios from 'axios'
import get from 'lodash/get'

const API = 'API'
export const apiAction = ({
  url = '',
  method = 'GET',
  label = {},
  data = null,
  headers = {},
  onResponse = () => {},
}) => {
  return {
    type: API,
    payload: {
      url,
      method,
      label,
      data,
      headers,
      onResponse,
    },
  }
}

export const apiMiddleware =
  ({ dispatch, getState }) =>
  next =>
  async action => {
    next(action)

    if (action.type !== API) return next(action)
    const store = getState()
    const token = get(store, 'auth.token', null)

    const { url, method, label, data, headers, onResponse } = action.payload
    dispatch({ type: label.REQUEST })

    axios.defaults.baseURL = process.env.BASE_URL || '/api'
    axios.defaults.headers.common['Content-Type'] = 'application/json'
    if (token) {
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
    }

    const dataOrParams = ['GET', 'DELETE'].includes(method) ? 'params' : 'data'
    try {
      const response = await axios.request({
        url,
        method,
        headers,
        [dataOrParams]: data,
      })
      const dataResponse = get(response, 'data', null)

      if (dataResponse) {
        dispatch({ type: label.SUCCESS, payload: dataResponse })
        onResponse({ error: null, data: dataResponse })
      }
    } catch (error) {
      const dataError = get(error, 'response.data', null)
      if (dataError) {
        dispatch({ type: label.ERROR })
        onResponse({ error: dataError, data: null })
      }
    }
  }
