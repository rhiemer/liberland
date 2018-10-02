import React from 'react';
import {View,Text} from 'react-native';
import SpaceScreenWidth from '../../components/SpaceScreenWidth';
import Routers from './Routers';
import TabBar from './TabBar';

export default class Home extends React.Component {   

  render() {       
    const {history} = {...this.props};    
    return (
       <View>         
          <TabBar history={history}>
            <Routers path="/home" />
          </TabBar>          
          <SpaceScreenWidth/>       
       </View> 
    );
    
  }


}

