import { apiAction } from '../middleware/api.middleware'
import { asyncActionTypeCreators } from '../helpers'

export const ADD_TECHNICS = asyncActionTypeCreators('ADD_TECHNICS')

export const addTechnics = value => dispatch =>
  dispatch(
    apiAction({
      url: '/technics',
      method: 'POST',
      label: ADD_TECHNICS,
      data: value,
      onResponse: response => {
        console.log('apiAction_addTechnics_onResponse ', response)
      },
    })
  )
