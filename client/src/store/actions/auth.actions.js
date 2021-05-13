import useAPI from '../../hooks/useAPI.hook'

export const SIGN_IN = 'login'
export const signIn =
  ({ email, password }) =>
  async dispatch => {
    try {
      const { request } = useAPI()
      const response = await request('login', 'GET', { email, password })

      dispatch({
        type: SIGN_IN,
        payload: response,
      })
    } catch (error) {
      console.log(error)
    }
  }

export const SIGN_OUT = 'logout'
export const signOut = () => async dispatch => {
  dispatch({
    type: SIGN_OUT,
  })
}
