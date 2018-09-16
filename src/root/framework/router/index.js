import React from 'react';
import { Router } from "../../../framework/router";
import { Routers } from "../routers";
import {BASE_NAME} from "../../constants";

export default ({children}) =>
  <Router basename={BASE_NAME} >
    <Routers>
      {children}
    </Routers> 
    {children}
  </Router> 