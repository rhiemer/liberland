import React from 'react';
import { View } from 'react-native';

export default ({children,...props}) =>   
  <View>
    {React.Children.map(children, (c, i) => 
      React.cloneElement(c, {
        ...props
      })
    )}
  </View>
  
