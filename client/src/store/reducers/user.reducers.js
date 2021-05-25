import { GET_USER } from '../actions/user.actions'
import { SIGN_OUT } from '../actions/auth.actions'

const handlers = {
  [GET_USER.SUCCESS]: (state, payload) => ({ ...payload.data }),

  [GET_USER.REQUEST]: (state, payload) => {
    return {}
  },

  [GET_USER.ERROR]: (state, payload) => {
    return {}
  },

  [SIGN_OUT]: (state, payload) => {
    return {}
  },

  DEFAULT: state => state,
}

export const userReducers = (state = {}, { type, payload }) => {
  const handler = handlers[type] || handlers.DEFAULT

  return handler(state, payload)
}
