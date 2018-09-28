import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
} from 'react-native';
import TabView from "../../../components/TabViewLink"
import ItemsTabBar from './items'

export default ({history}) => 
  <TabView renderTabBar={() => <ItemsTabBar history={history} />} />
   
