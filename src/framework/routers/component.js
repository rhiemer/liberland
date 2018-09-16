import React from 'react';
import { Match as Route } from "react-router";

export default ({ component: C, props: cProps, ...rest }) =>
  <Route {...rest} component={props => <C {...props} {...cProps} />} />