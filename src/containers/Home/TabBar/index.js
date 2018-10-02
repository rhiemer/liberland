import React from 'react';
import TabView from "../../../components/TabViewLink"
import ItemsTabBar from './items'

export default ({children,history}) => 
  <TabView renderTabBar={() => <ItemsTabBar history={history} />} component={children} />
  
   
