export const ADD_TO_CART = 'ADD_TO_CART'
export const addToCart = id => async dispatch => {
  dispatch({
    type: ADD_TO_CART,
    payload: id,
  })
}

export const REMOVE_FROM_CART = 'REMOVE_FROM_CART'
export const removeFromCart = id => async dispatch => {
  dispatch({
    type: REMOVE_FROM_CART,
    payload: id,
  })
}

export const INCREMENT_ITEM_FROM_CART = 'INCREMENT_ITEM_FROM_CART'
export const incrementItemFromCart = id => async dispatch => {
  dispatch({
    type: INCREMENT_ITEM_FROM_CART,
    payload: id,
  })
}

export const DECREMENT_ITEM_FROM_CART = 'DECREMENT_ITEM_FROM_CART'
export const decrementItemFromCart = id => async dispatch => {
  dispatch({
    type: DECREMENT_ITEM_FROM_CART,
    payload: id,
  })
}
