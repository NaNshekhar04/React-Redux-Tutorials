import { BUY_CAKE } from './cakeTypes'

// Action objects always have a type field, 
//which is a string you provide that acts as a unique name for the action.
//The type should be a readable name so that anyone who looks at this code understands what it means.


//THIS FUNCTION RETURN AN ACTION--> AN OBJECT WITH TYPE PROPERTY (ACTION CREATOR)
// ACTION PAYLOAD--> THE ACTION CREATOR NOW ACCEPTS A NUMBER AS A PARAMETER
//  & SETTING IT'S DEFAULT VALUE TO 1 TO ENSURE THE EXISTING FUNCTIONALITY DOESN'T BREAK
export const buyCake = (number = 1) => {
  return {
    type: BUY_CAKE,
  
    // ADDING A NEW PROPERTY TO THE ACTION CREATOR CALLED PAYLOAD & THAT IS EQUAL TO NUMBER PARAMETER
    // ALL PAYLOAD DOES IS SENDS ADDITIONAL INFORMATION TO THE REDUCER
    payload: number
  }
}

//EXPORTING THIS ACTION CREATOR TO BE ABLE TO USE IN OUR COMPONENTS
