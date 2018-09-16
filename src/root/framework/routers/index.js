import React from 'react';
import { View } from 'react-native';
import {Route} from '../../../framework/routers/component';

export default ({children,...props }) =>
   <View>
      <Route path="*"        
        component={children}
        props={props}/>       
   </View>