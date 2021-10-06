import React from 'react';
import './App.css';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { auth, createUserProfileDocument} from './firebase/firebase.utils'


import HomePage from './components/pages/homePage/homepage.component';
import CheckOutPage from './components/pages/check-outPage/check-out-page.component';
import ShopPage from './components/pages/shopPage/shop-page.component';
import SignInSignUpPage from './components/pages/sign-in-sign-up/sign-in-sign-up.component';

import Header from './components/header/header.component';

import { setCurrentUser } from './redux/users/user-action'
import {selectCurrentUser} from './redux/users/user.selector'
//import { doc, onSnapshot, getFirestore } from "firebase/firestore"

//const db = getFirestore();

class App extends React.Component {
  unsuscribeFromAuth = null

  componentDidMount() {

    const { setCurrentUser } = this.props
    
    this.unsuscribeFromAuth= auth.onAuthStateChanged(async userAuth => {
      setCurrentUser(userAuth );
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
        <Header/>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route exact path='/checkout' component={CheckOutPage} />
          <Route
            exact
            path='/signin'
            render={() => this.props.currentUser ?
            (<Redirect to='/' />) :
            (<SignInSignUpPage />)} />
        </Switch>
      
      </div>
    );
  }
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user=>dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps,mapDispatchToProps)(App);
