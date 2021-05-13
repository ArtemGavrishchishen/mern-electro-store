import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

import { authReducers } from './reducers/auth.reducers'

const rootReducer = combineReducers({
  auth: authReducers,
})

const enhancer = composeWithDevTools(applyMiddleware(thunk))

export default createStore(rootReducer, enhancer)
