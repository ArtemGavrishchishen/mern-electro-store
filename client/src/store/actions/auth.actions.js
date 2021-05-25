import { apiAction } from '../middleware/api.middleware'
import { asyncActionTypeCreators } from '../helpers'

export const REGISTER = asyncActionTypeCreators('REGISTER')
export const register =
  ({ name, surname, email, password }) =>
  dispatch =>
    dispatch(
      apiAction({
        url: '/auth/register',
        method: 'POST',
        label: REGISTER,
        data: { name, surname, email, password },
        onResponse: response => {
          console.log('apiAction_register_onResponse ', response)
        },
      })
    )

export const SIGN_IN = asyncActionTypeCreators('SIGN_IN')
export const signIn =
  ({ email, password }, onResponse) =>
  dispatch =>
    dispatch(
      apiAction({
        url: '/auth/login',
        method: 'POST',
        label: SIGN_IN,
        data: { email, password },
        onResponse,
      })
    )

export const SIGN_OUT = 'SIGN_OUT'
export const signOut = () => async dispatch => {
  dispatch({
    type: SIGN_OUT,
  })
}
