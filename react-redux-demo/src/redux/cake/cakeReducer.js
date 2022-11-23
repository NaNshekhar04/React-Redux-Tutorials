import { BUY_CAKE } from './cakeTypes'

//The reducer receives two arguments,
// the current state and an action object describing what happened. When the Redux app starts up, 
//we don't have any state yet, so we provide the initialState as the default value for this reducer:

// Define an initial state value for the app
const initialState = {
  numOfCakes: 10
}

// Create a "reducer" function that determines what the new state
// should be when something happens in the app
const cakeReducer = (state = initialState, action) => {
  // Reducers usually look at the type of action that happened
  // to decide how to update the state
  switch (action.type) {
    case BUY_CAKE: return {
      ...state,
      // INSTEAD OF REDUCING BY 1 WE REDUCE IT BY ACTION.PAYLOAD FROM THE
      //  ACTION'S PAYLOAD PROPERTY IN ACTION CREATOR FUNCTION
      numOfCakes: state.numOfCakes - action.payload
    }

    default:
      // If the reducer doesn't care about this action type,
      // return the existing state unchanged
      return state
  }
}

export default cakeReducer
