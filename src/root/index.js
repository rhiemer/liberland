import React from 'react';
import { View } from 'react-native';
import App from '../containers/App';
import I18 from './framework/i18';
import styles from './styles'

export default class Root extends React.Component {
  render() {    
    return (
      <View style={styles.container} >
        <I18>
          <App/>
        </I18>
      </View>
    );
  }

}
