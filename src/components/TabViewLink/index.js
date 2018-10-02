import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
} from 'react-native';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import styles from './styles';


export default ({component,style,...props}) => 
{ 
  const _children =component || <Text/>;
  return(
    <ScrollableTabView
        style={[styles.tabBar,style]}
        {...props} >
      <ScrollView>      
        {_children}
      </ScrollView> 
    </ScrollableTabView> 
  );
} 

