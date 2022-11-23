import React, { useState } from 'react'
import { connect } from 'react-redux'
import { buyCake } from '../redux'

//BEFORE THIS WE COULD ONLY BUY 1 CAKE AT A TIME NOW WE WILL ADD AN INPUT ELEMENT 
// WERE WE SPECIFY THE NUMBER OF CAKES TO BUY

function NewCakeContainer (props) {
  const [number, setNumber] = useState(1)
  return (
    <div>
      <h2>Number of cakes - {props.numOfCakes} </h2>

    {/* ADDING AN INPUT FIELD WHICH SPECIFIES HOW MANY CAKES TO BUY  
    FOR THIS WE WOULD BE NEEDING A STATE VARIABLE*/}

      <input type='text' value={number} onChange={e => setNumber(e.target.value)} />
      
      {/* IN THE BUY CAKE HANDLER WE NOW NEED TO PASS IN THE INPUT VALUE AS A PARAMETER */}
      <button onClick={() => props.buyCake(number)}>Buy X Cakes</button>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    numOfCakes: state.cake.numOfCakes
  }
}

const mapDispatchToProps = dispatch => {
  return {
    // NOW BUYCAKE WILL ACCEPT A NUMBER AS A PARAMETER FOR SPECIFYING HOW MANY CAKES TO BUY 
    // THE "buyCake" CORRESPONDS TO THE ACTION CREATOR WE HAVE DEFINED [GO TO ACTION CREATOR] 
    buyCake: number => dispatch(buyCake(number))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewCakeContainer)
