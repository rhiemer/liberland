import React from 'react';
import {View} from 'react-native';
import LinkIonicons from "../../../components/TabViewLink/LinkIonicons"
import styles from "../../../components/TabViewLink/styles"

export default class IconsTabBar extends React.Component {  
   render() {
      const {history,style} = {...this.props};  
      const pathname = history && history.location && history.location.pathname;                  
      return <View style={[styles.tabs,style,]}>
               <LinkIonicons to="/home/teste1" nameIcon="ios-people" pathname={pathname} />      
               <LinkIonicons to="/home/teste2" nameIcon="ios-chatboxes" pathname={pathname}  />        
             </View>;
  }
}
