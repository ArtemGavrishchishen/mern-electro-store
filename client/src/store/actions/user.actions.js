import { apiAction } from '../middleware/api.middleware'
import { asyncActionTypeCreators } from '../helpers'

export const GET_USER = asyncActionTypeCreators('GET_USER')

export const getUser = () => dispatch =>
  dispatch(
    apiAction({
      url: '/users',
      method: 'GET',
      label: GET_USER,
      onResponse: response => {
        console.log('apiAction_getUser_onResponse ', response)
      },
    })
  )
