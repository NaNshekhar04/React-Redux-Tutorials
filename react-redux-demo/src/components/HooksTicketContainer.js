import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { buyTickets } from '../redux'

function HooksTicketContainer() {
   const numOfTickets =  useSelector(state=>state.tickets.numOfTickets)
   const dispatch = useDispatch()
  return (
    <div>
        <h1>Number of Tickets - {numOfTickets} </h1>
        <button onClick={()=>dispatch(buyTickets())}>buyCakes</button>
    </div>
  )
}

export default HooksTicketContainer