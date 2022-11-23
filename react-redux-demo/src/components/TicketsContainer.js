import React from 'react'
import { connect } from 'react-redux'
import { buyTickets } from '../redux'

export const TicketsContainer = (props) => {
    return (
        <div>
            <h1>Number of Tickets -{props.numOfTickets} </h1>
            <button onClick={props.buyTickets}>Buy Tickets</button>
        </div>
    )
}

const mapStateToProps = (state) =>{
    return{
        numOfTickets : state.tickets.numOfTickets
    }
}

const mapDispatchToProps = (dispatch) =>{
    return{
        buyTickets : () => dispatch(buyTickets())
    }
}

export default connect(mapStateToProps,mapDispatchToProps) (TicketsContainer)