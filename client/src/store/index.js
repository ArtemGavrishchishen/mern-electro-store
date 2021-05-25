import { createStore, combineReducers, applyMiddleware } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

import { apiMiddleware } from './middleware/api.middleware'

import { authReducers } from './reducers/auth.reducers'
import { userReducers } from './reducers/user.reducers'
import { cartReducers } from './reducers/cart.reducers'

const persistConfig = {
  key: 'root',
  storage,
  stateReconciler: autoMergeLevel2,
  whitelist: ['auth', 'user', 'cart'],
}

const rootReducer = combineReducers({
  auth: authReducers,
  user: userReducers,
  cart: cartReducers,
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

const enhancer = composeWithDevTools(applyMiddleware(thunk, apiMiddleware))

export const store = createStore(persistedReducer, enhancer)
export const persistor = persistStore(store)
