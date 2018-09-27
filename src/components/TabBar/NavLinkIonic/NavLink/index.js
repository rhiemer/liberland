import React from 'react';
import { Link } from "react-router-native";
import styles from './style.js';

export default ({to,style,styleRow,underlayColor='#f0f4f7',children,...props}) => 
    <Link
        style={[styles.tab,style]}
        underlayColor={underlayColor}
        to={to}>
           <View style={[styles.row,styleRow]}>                
               {children}
           </View>
    </Link>
  


