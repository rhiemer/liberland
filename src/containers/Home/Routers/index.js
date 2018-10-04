import React from 'react';
import {Switch,Route,} from 'react-router-native';
import Teste1 from '../../Teste1';
import Mapa from '../../Mapa';

export default ({path}) => 
  <Switch>
    <Route
      exact
      path={`${path}/teste1`}
      component={Mapa}/>       
     <Route
      exact
      path="/home/teste2"
      component={Teste1}/> 
  </Switch>  