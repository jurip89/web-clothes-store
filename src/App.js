import React from 'react';
import './App.css';
import HomePage from './components/pages/homePage/homepage.component';
import { Route, Switch } from 'react-router-dom';
import ShopPage from './components/pages/shopPage/shop-page.component';


function App() {
  return (
    <div>
      <Switch>
       <Route exact path='/' component={HomePage }/>
      <Route  path='/shop' component={ShopPage }/> 
      </Switch>
      
    </div>
  );
}

export default App;
