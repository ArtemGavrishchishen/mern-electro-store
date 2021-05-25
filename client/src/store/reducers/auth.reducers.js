import { SIGN_IN, SIGN_OUT } from '../actions/auth.actions'

const initialState = {
  token: null,
}

const handlers = {
  [SIGN_IN.SUCCESS]: (state, payload) => ({
    ...state,
    token: payload.token,
  }),

  [SIGN_IN.ERROR]: (state, payload) => {
    return {
      ...state,
      token: null,
    }
  },

  [SIGN_IN.REQUEST]: (state, payload) => {
    return {
      ...state,
      token: null,
    }
  },

  [SIGN_OUT]: (state, payload) => {
    return {
      ...state,
      token: null,
    }
  },

  DEFAULT: state => state,
}

export const authReducers = (state = initialState, { type, payload }) => {
  const handler = handlers[type] || handlers.DEFAULT

  return handler(state, payload)
}
