import { apiAction } from '../middleware/api.middleware'
import { asyncActionTypeCreators } from '../helpers'

export const GET_TECHNICS_BY_CART = asyncActionTypeCreators(
  'GET_TECHNICS_BY_CART'
)
export const getTechnicsByCart = (ids, onResponse) => async dispatch =>
  dispatch(
    apiAction({
      url: '/cart',
      method: 'GET',
      data: ids,
      label: GET_TECHNICS_BY_CART,
      onResponse: response => {
        onResponse(response.data)
      },
    })
  )

export const ADD_TO_CART = 'ADD_TO_CART'
export const addToCart = id => dispatch => {
  dispatch({
    type: ADD_TO_CART,
    payload: id,
  })
}

export const REMOVE_FROM_CART = 'REMOVE_FROM_CART'
export const removeFromCart = id => dispatch => {
  dispatch({
    type: REMOVE_FROM_CART,
    payload: id,
  })
}

export const INCREMENT_ITEM_FROM_CART = 'INCREMENT_ITEM_FROM_CART'
export const incrementItemFromCart = id => dispatch => {
  dispatch({
    type: INCREMENT_ITEM_FROM_CART,
    payload: id,
  })
}

export const DECREMENT_ITEM_FROM_CART = 'DECREMENT_ITEM_FROM_CART'
export const decrementItemFromCart = id => dispatch => {
  dispatch({
    type: DECREMENT_ITEM_FROM_CART,
    payload: id,
  })
}
