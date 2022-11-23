import React from 'react'
import { connect } from 'react-redux'
import { buyCake } from '../redux'

function CakeContainer (props) {
  return (
    <div>
      <h2>Number of cakes - {props.numOfCakes} </h2>
      <button onClick={props.buyCake}>Buy Cake</button>
    </div>
  )
}

//STATE FROM REDUX IS MAPPED TO OUR COMPONENT PROPS
//WHEN YOU WANT TO ACCESS REDUX STATE IN YOUR COMPONENT YOU DEFINE THE MAPSTATETOPROPS
// IT GETS REDUX STATE AS A PARAMETER WHICH CAN BE USED TO RETRIVE APPROPRIATE STATE PROPERTIES

const mapStateToProps = state => {
  return {
    numOfCakes: state.cake.numOfCakes
  }
}

//FOR DISPATCHING ACTIONS WE HAVE MAPDISPATCHTOPROPS METHOD THIS METHOD GET THE DISPATCH
//METHOD AS A PARAMETER AND ALLOWS US TO MAP ACTION CREATORS TO PROPS IN OUR COMPONENT 
    //MAP DISPATCH TO PROPS WILL MAP OUR DISPATCH OF THE ACTION CREATOR
    // TO A PROP IN OUR COMPONENT

const mapDispatchToProps = dispatch => {
  return {
     //COMPONENT RECEIVING SECOND ADDITIONAL PROP WHICH WILL BASICALLY DISPATCH THE 
    // BUY CAKE ACTION
    buyCake: () => dispatch(buyCake())
  }
}

//THIS IS ALL POSSIBLE BY USING THE CONNECT METHOD FROM THE REACT-REDUX
//IT IS RESPONSIBLE TO CONNECT REACT COMPONENT TO REDUX STORE!
//EG: IT CONNECTS CAKE CONTAINER TO REDUX STORE !

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CakeContainer)
