import React from 'react';
import {Switch,Route,} from 'react-router-native';
import Teste1 from '../../Teste1';
import Teste2 from '../../Teste2';
 
export default () =>
  <Switch>
    <Route
      exact
      path="/home/teste1"
      component={Teste1}/>       
     <Route
      exact
      path="/home/teste2"
      component={Teste2}/> 
  </Switch>  