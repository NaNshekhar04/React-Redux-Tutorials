import { BUY_TICKETS } from "./ticketType";

const initialState = {
    numOfTickets : 15 
}

const ticketsReducer = (state = initialState, action) =>{
    switch (action.type) {
        case BUY_TICKETS: return {
            ...state,
            numOfTickets : state.numOfTickets - 1
        }
    
        default:
            return state

    }
}

export default ticketsReducer
