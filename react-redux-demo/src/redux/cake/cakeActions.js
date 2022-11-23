import { BUY_CAKE } from './cakeTypes'

// Action objects always have a type field, 
//which is a string you provide that acts as a unique name for the action.
//The type should be a readable name so that anyone who looks at this code understands what it means.


//THIS FUNCTION RETURN AN ACTION--> AN OBJECT WITH TYPE PROPERTY (ACTION CREATOR)
export const buyCake = (number = 1) => {
  return {
    type: BUY_CAKE,
    payload: number
  }
}

//EXPORTING THIS ACTION CREATOR TO BE ABLE TO USE IN OUR COMPONENTS
