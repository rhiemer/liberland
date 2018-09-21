import React from 'react';
import { Route } from "react-router-native";
import {Wrapper} from '../../components/wrapper'

export default ({ children, props: cProps, ...rest }) =>
  <Route {...rest} render={<Wrapper {...cProps} >{children}</Wrapper>} />