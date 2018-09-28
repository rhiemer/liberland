import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
} from 'react-native';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import styles from './styles';

export default ({style,...props}) => 
   <ScrollableTabView
      style={[styles.tabBar,style]}
      {...props} >
     <ScrollView>      
        <Text/>
     </ScrollView> 
  </ScrollableTabView>  
