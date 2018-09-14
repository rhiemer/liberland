import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { I18nextProvider, translate } from 'react-i18next';
import i18n from './src/framework/i18';
import {m} from './src/util/messages'


export default class App extends React.Component {
  render() {
    return (
      <I18nextProvider i18n={ i18n }>
        <View style={styles.container}>
          <Text>{m('home.title')}</Text>
          <Text>Open up App.js to start working on your app!</Text>
          <Text>Changes you make will automatically reload.</Text>
          <Text>Shake your phone to open the developer menu.</Text>
        </View>
      </I18nextProvider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
