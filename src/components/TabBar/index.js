import React from 'react';
import {View,} from 'react-native';
import styles from './style.js';

export default class TabBar extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function    
   

  render() {       
    const {children,renderChildren,...props} = {...this.props};    
    return (
      <View style={[styles.tabs, this.props.style, ]} {...props}>
          {this.props.tabs.map((tab, i) => {     
              return renderChildren(tab,i);
            })}                           
      </View>
    ); 
  }

}
