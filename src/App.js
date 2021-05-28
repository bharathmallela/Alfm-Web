import React from 'react'
import './App.css';
import { Route,BrowserRouter as Router,Switch} from 'react-router-dom';
import NavMenu from './components/NavMenu';
import Monitor from './Pages/Monitor'
import Processors from './Pages/Processors'
import Laptop from './Pages/Laptop'
import Hdd from './Pages/Hdd'
import Ssd from './Pages/Ssd'
import Cart from './Pages/Cart'
import Home from './Pages/Home'
import axios from 'axios'
import {CartContext} from './components/CartContext'
axios.defaults.baseURL = 'https://challengerbuildyourpc.com/api/v1/client';





function App() {
//   const store = createStore(rootReducer);


  // const cartFromLocalStorage = JSON.parse(localStorage.getItem('cart')|| '[]')
  // console.log(cartFromLocalStorage.value,'cartlocalstrorage appjs')

  return (
    // <CartContext.Provider value={{key:1,value:2}}>
      // <Provider store={store}>  
        <Router>
          <Switch>
              <Route path='/Processors' component={Processors} />
              <Route path='/Monitor' component={Monitor} />
              <Route path='/Laptop'  component={Laptop} />
              <Route path='/Hdd' component={Hdd} />
              <Route path='/Sdd' component={Ssd} />
              <Route path='/Cart' component={Cart} />
              <Route Exact path='/' component={Home} />
          </Switch>
        </Router>
      // </Provider>
      
          
  );
}

export default App;
