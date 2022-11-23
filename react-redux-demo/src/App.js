import React from 'react'
import { Provider } from 'react-redux'
import './App.css'
import store from './redux/store'
import CakeContainer from './components/CakeContainer'
// import HooksCakeContainer from './components/HooksCakeContainer'
// import IceCreamContainer from './components/IceCreamContainer'
// import NewCakeContainer from './components/NewCakeContainer'
// import ItemContainer from './components/ItemContainer'
import UsersContainer from './components/UsersContainer'
import CookieContainer from './components/CookieContainer'
import TicketsContainer from './components/TicketsContainer'

function App () {
  return (
    //The <Provider> component makes the Redux store available to any nested components
    // that need to access the Redux store.
    //i.e:- Providing our store to entire Application Tree
    <Provider store={store}>
      <div className='App'>
      <TicketsContainer/>
        <CookieContainer/>
      {/* <CakeContainer /> */}
        {/* <UsersContainer /> */}
        {/* <ItemContainer cake />
        <ItemContainer />
        <NewCakeContainer />
        <CakeContainer />
        <HooksCakeContainer />
        <IceCreamContainer /> */}
      </div>
    </Provider>
  )
}

export default App
