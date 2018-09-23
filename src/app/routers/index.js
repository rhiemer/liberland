import React from 'react';
import {Switch,Route,Redirect} from 'react-router-native';
import HomePage from '../../pages/Home';
 
export default () =>
  <Switch>
    <Route
      path="/home"
      component={HomePage}/>   
    <Redirect exact from="/" to="/home"/>    
  </Switch>  