// Now that we have a reducer function, 
// we can create a store instance by calling the Redux library createStore API.

import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import logger from 'redux-logger'
import thunk from 'redux-thunk'

import rootReducer from './rootReducer'

// We pass the reducer function to createStore, 
// which uses the reducer function to generate the initial state,
//  and to calculate any future updates.

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(logger, thunk))
)

export default store
