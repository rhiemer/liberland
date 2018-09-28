import React from 'react';
import Home from '../../containers/Home'
import RedirectPageRote from '../../components/RedirectPageRote'
import {PAGE_DEFAULT_HOME} from './constants';

export default (props) => 
{ 
  const {history} = {...props};  
  return(
    <RedirectPageRote history={history} from="/home" to={PAGE_DEFAULT_HOME}>
       <Home {...props}/>
    </RedirectPageRote> 
  );
} 


