import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { buyIceCream } from '../redux'

function HooksIceCreamContainer() {
    const numOfIcecreams = useSelector(state =>state.numOfIceCreams)
    const dispatch = useDispatch()
  return (
    <div>
        <h2>Number of Icecreams - {numOfIcecreams}</h2>
        <button onClick={()=>dispatch(buyIceCream())}>Buy Icecream</button>
    </div>
  )
}

export default HooksIceCreamContainer