import React from 'react'
import { connect } from 'react-redux'
import { buyCookies } from '../redux'

function CookieContainer(props) {
    return (
        <div>
            <h1>Number of Cookies -{props.numOfCookies}  </h1>
            <button onClick={props.buyCookies}>Buy Cookies</button>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        numOfCookies: state.Cookie.numOfCookies
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        buyCookies : () => dispatch(buyCookies())
    }
}


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CookieContainer)