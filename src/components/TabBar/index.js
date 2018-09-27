import React from 'react';
import {View,} from 'react-native';
import styles from './style';

export default class TabBar extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function    
   

  render() {       
    const {children,style,...props} = {...this.props};    
    return (
      <View style={[styles.tabs,style,]} {...props}>          
         {children}          
      </View>
    ); 
  }

}
