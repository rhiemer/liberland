import React from 'react';
import {View,} from 'react-native';
import styles from './style.js';

export default class TabBar extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function    
   

  render() {       
    const {children,renderChildren,...props} = {...this.props};
    const renderChildren = renderChildren.bind(this);
    return (
      <View style={[styles.tabs, this.props.style, ]} {...props}>
          {this.props.tabs.map((tab, i) => {     
              return renderChildren(tab,i);
            })}                           
      </View>
    ); 
  }

}
