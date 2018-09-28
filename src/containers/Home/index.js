import React from 'react';
import {View,Text} from 'react-native';
import Routers from './Routers';
import TabBar from './TabBar';

export default class Home extends React.Component {   

  render() {       
    const {history} = {...this.props};  
    console.log('push'+JSON.stringify(this.props)); 
    return (
       <View>         
          <TabBar history={this.props.history} />
          <Routers/>
          <Text>dddddddddddddddddddd</Text>
          <Text>vvvvvvvvvvvvvvvvv</Text>
       </View> 
    );
    
  }


}

