import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

import { apiMiddleware } from './middleware/api.middleware'

import { authReducers } from './reducers/auth.reducers'
import { userReducers } from './reducers/user.reducers'

const rootReducer = combineReducers({
  auth: authReducers,
  user: userReducers,
})

const enhancer = composeWithDevTools(applyMiddleware(thunk, apiMiddleware))

export default createStore(rootReducer, enhancer)
