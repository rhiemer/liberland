import React from 'react';
import {TouchableOpacity,} from 'react-native';
import styles from './style.js';

export default class TouchableOpacityTabBar extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function  

  render() {       
    const {children,...props} = {...this.props};
    return (
      <TouchableOpacity style={[styles.tab,this.props.style,]} {...props} >
          {children}        
      </TouchableOpacity>
    ); 
  }

}
