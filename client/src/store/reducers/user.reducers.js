import { GET_USER } from '../actions/user.actions'

const handlers = {
  [GET_USER.SUCCESS]: (state, payload) => ({ ...payload.data }),
  [GET_USER.ERROR || GET_USER.REQUEST]: (state, payload) => {
    return {}
  },
  DEFAULT: state => state,
}

export const userReducers = (state = {}, { type, payload }) => {
  const handler = handlers[type] || handlers.DEFAULT

  return handler(state, payload)
}
