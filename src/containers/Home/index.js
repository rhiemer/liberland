import React from 'react';
import {View,Text} from 'react-native';
import Routers from './Routers';
import TabBar from './TabBar';

export default class Home extends React.Component {   

  render() {       
    const {history} = {...this.props};    
    return (
       <View>         
          <TabBar history={history} />
          <Routers path="/home" />
          <Text>dddddddddddddddddddd</Text>
          <Text>vvvvvvvvvvvvvvvvv</Text>
       </View> 
    );
    
  }


}

