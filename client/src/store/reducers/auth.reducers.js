import { SIGN_IN, SIGN_OUT } from '../actions/auth.actions'

const initialState = {
  token: null,
  isAuthenticated: false,
}

const handlers = {
  [SIGN_IN]: (state, payload) => ({
    ...state,
    token: payload,
    isAuthenticated: true,
  }),
  [SIGN_OUT]: (state, payload) => {
    return {
      ...state,
      token: null,
      isAuthenticated: false,
    }
  },
  DEFAULT: state => state,
}

export const authReducers = (state = initialState, { type, payload }) => {
  const handler = handlers[type] || handlers.DEFAULT

  return handler(state, payload)
}
