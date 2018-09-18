import React from 'react';
import {Switch,Route,Redirect} from 'react-router-native';
import App from '../containers/App';
 
export default () =>
  <Switch>
    <Route
      path="/home"
      component={App}/>   
    <Redirect from="/" to="/home"/>    
  </Switch>  