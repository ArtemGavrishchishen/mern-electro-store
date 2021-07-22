import { GET_TECHNICS } from '../actions/technics.actions'

const handlers = {
  [GET_TECHNICS.SUCCESS]: (state, payload) => [...payload.data.technics],

  [GET_TECHNICS.REQUEST]: (state, payload) => {
    return []
  },

  [GET_TECHNICS.ERROR]: (state, payload) => {
    return []
  },

  DEFAULT: state => state,
}

export const technicsReducers = (state = [], { type, payload }) => {
  const handler = handlers[type] || handlers.DEFAULT

  return handler(state, payload)
}
