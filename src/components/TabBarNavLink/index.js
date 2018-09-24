import React from 'react';
import { Link } from "react-router-native";

export default ({to,underlayColor='#f0f4f7',propsTouch,...props}) => 
    <Link
        style={styles.navItem}
        underlayColor={underlayColor}
        to={to}>
            <View style={{flexDirection: 'row'}}>
                {match && <Text>></Text>}
                {children}
            </View>
    </Link>
  


