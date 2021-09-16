import React from 'react';
import './App.css';
import HomePage from './components/pages/homePage/homepage.component';
import { Route, Switch } from 'react-router-dom';
import ShopPage from './components/pages/shopPage/shop-page.component';
import Header from './components/header/header.component';
import SignInSignUpPage from './components/pages/sign-in-sign-up/sign-in-sign-up.component';
import {auth, createUserProfileDocument} from './firebase/firebase.utils'
//import { doc, onSnapshot, getFirestore } from "firebase/firestore"

//const db = getFirestore();

class App extends React.Component {
  constructor () {
    super();
    this.state = {
      currentUser: null
    }
  }

  unsuscribeFromAuth = null

  componentDidMount() {
    this.unsuscribeFromAuth= auth.onAuthStateChanged(async userAuth => {
      this.setState({ currentUser: userAuth });
      console.log(this.state)
      await createUserProfileDocument(userAuth);    
    })
  }
  
  componentWillUnmount() {
  this.unsuscribeFromAuth()
}
  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser }/>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/signin' component={SignInSignUpPage} />
        </Switch>
      
      </div>
    );
  }
}

export default App;
