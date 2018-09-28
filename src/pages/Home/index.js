import React from 'react';
import Home from '../../containers/Home'

export default (props) => 
{ 
  const {history} = {...props};
  const pathname = history && history.location && history.location.pathname; 
  if (pathname === "/home")  
    history.push("/home/teste1");
  return(
    <Home {...props}/>
  );
} 


