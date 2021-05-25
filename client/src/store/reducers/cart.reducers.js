import omit from 'lodash/omit'

import { ADD_TO_CART, REMOVE_FROM_CART } from '../actions/cart.actions'

const initialState = {
  ids: [],
  amount: {},
}

const handlers = {
  [ADD_TO_CART]: (state, payload) => ({
    ...state,
    ids: state.ids.includes(payload) ? [...state.ids] : [...state.ids, payload],
    amount: { ...state.amount, [payload]: 1 },
  }),

  [REMOVE_FROM_CART]: (state, payload) => ({
    ...state,
    ids: [...state.ids.filter(id => id !== payload)],
    amount: omit(state.amount, [payload]),
  }),

  DEFAULT: state => state,
}

export const cartReducers = (state = initialState, { type, payload }) => {
  const handler = handlers[type] || handlers.DEFAULT

  return handler(state, payload)
}
