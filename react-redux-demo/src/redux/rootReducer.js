import { combineReducers } from 'redux'
import cakeReducer from './cake/cakeReducer'
import CookieReducer from './cookies/CookieReducer'
import iceCreamReducer from './iceCream/iceCreamReducer'
import userReducer from './user/userReducer'
import  ticketsReducer  from './tickets/ticketsReducer'

const rootReducer = combineReducers({
  cake: cakeReducer,
  iceCream: iceCreamReducer,
  user: userReducer,
  Cookie: CookieReducer,
  tickets : ticketsReducer
})

export default rootReducer
