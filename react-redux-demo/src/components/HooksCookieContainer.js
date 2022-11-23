import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { buyCookies } from '../redux'

function HooksCookieContainer() {
  const numOfCookies = useSelector(state=>state.Cookie.numOfCookies)
  const dispatch = useDispatch()
  return (
    <div>
        <h1>Number of cookies - {numOfCookies}</h1>
        <button onClick={dispatch(buyCookies())}>Buy cookies</button>
    </div>
  )
}

export default HooksCookieContainer