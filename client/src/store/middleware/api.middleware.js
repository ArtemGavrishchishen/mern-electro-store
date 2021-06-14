import axios from 'axios'
import get from 'lodash/get'
import keys from 'lodash/keys'
import omit from 'lodash/omit'

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
    console.log('api', data)
    const dataOrParams = ['GET', 'DELETE'].includes(method) ? 'params' : 'data'
    try {
      const reqParams = {
        url,
        method,
        headers,
        [dataOrParams]: data,
      }

      if (get(data, 'files', null) && data.files) {
        reqParams.transformRequest = [
          function (data, headers) {
            let formData = new FormData()
            headers.common['Content-Type'] = 'multipart/form-data'
            formData.append('files', data.files[0].file)
            const dataKey = keys(omit(data, ['files']))
            dataKey.map(key => formData.append(key, data[key]))
            return formData
          },
        ]
      }

      const response = await axios.request({ ...reqParams })
      const dataResponse = get(response, 'data', null)

      if (dataResponse) {
        dispatch({ type: label.SUCCESS, payload: dataResponse })
        onResponse({ error: null, data: dataResponse })
      }
    } catch (error) {
      const dataError = get(error, 'response.data', null)
      const statusError = get(error, 'response.status', null)

      if (statusError === 401) {
        dispatch({ type: 'SIGN_OUT' })
      }

      if (dataError) {
        dispatch({ type: label.ERROR })
        onResponse({ error: dataError, data: null })
      }
    }
  }
