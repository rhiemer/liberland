import React from 'react';
import { Text, View } from 'react-native';
import {m} from '../../../src/util/messages'
import styles from './styles'

export default class App extends React.Component {
  render() {
    return (
        <View style={styles.container}>
          <Text>{m('home.title')}</Text>
          <Text>xxxxxx</Text>
          <Text>Open up App.js to start working on your app!</Text>
          <Text>Changes you make will automatically reload.</Text>
          <Text>Shake your phone to open the developer menu.</Text>
        </View>
    );
  }
}

