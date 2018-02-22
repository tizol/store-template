// DEFAULT
import { Router, Route, IndexRedirect, browserHistory } from 'react-router';
import { Meteor } from 'meteor/meteor';
import React from 'react';
import { Roles } from 'meteor/alanning:roles';

// HOME LAYOUT COMPONENTS
import HomeLayoutContainer from '/imports/ui/containers/Home/HomeLayoutContainer.jsx';
import HomePage from '/imports/ui/pages/Home/HomePage.jsx';
import SignUp from '/imports/ui/pages/Home/SignUp.jsx';
import SignIn from '/imports/ui/pages/Home/SignIn.jsx';

//Password
import ForgotPassword from '/imports/ui/pages/Home/ForgotPassword.jsx';
import ResetPassword from '/imports/ui/pages/Home/ResetPassword.jsx';
import ChangePassword from '/imports/ui/pages/Home/ChangePassword.jsx';


//Marketplace
import MarketplacePage from '/imports/ui/pages/Marketplace/MarketplacePage.jsx';
import ProductDetailContainer from '/imports/ui/containers/Marketplace/ProductDetailContainer.jsx';

//Admin

function requireAuth(nextState, replace) {
  if (!Meteor.userId()) {
    replace('/signin');
  }
}

function requireAuthAdmin(nextState, replace) {
  if (!Meteor.userId()) {
    replace('/');
  } else if(Meteor.userId()){
    if(!Roles.userIsInRole(Meteor.userId(), ['admin'])){
      replace('/');
    }
  }
}


export default () => (
  <Router history={browserHistory}>
      <Route component={HomeLayoutContainer}>
        <Route path="/" component={HomePage} />
        <Route path="/signup" component={SignUp} />
        <Route path="/signin" component={SignIn} />
        <Route path="/forgotpassword" component={ForgotPassword} />
        <Route path="/changepassword" component={ChangePassword} />
        <Route path="/resetpassword/:token" component={ResetPassword} />
        <Route path="/marketplace" component={MarketplacePage} />
        <Route path="/product/:id" component={ProductDetailContainer} />
      </Route>
  </Router>
);
