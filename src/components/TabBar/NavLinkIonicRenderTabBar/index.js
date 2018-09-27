import React from 'react';
import { View } from "react-router-native";
import NavLinkIonic from '../NavLinkIonic'

export default ({tabs,to,ref,propsTouch,activeTab,...props}) =>   
    <View>
        {tabs.map((tab, i) => {      
           return <NavLinkIonic key={tab} nameIcon={tab} active={activeTab === i} {...props} />            
        })}    
    </View>  
