import React from 'react';
import { MemoryRouter as Router } from "react-router";

export default ({baseName,children}) =>
 <Router basename={baseName} >
   {children}
 </Router>