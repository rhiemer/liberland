import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles'

export default (props) =>
{
    const {mensagem} = props;
    return (
        <View style={styles.mensagem}> 
          <Text>{mensagem}</Text>
        </View>
   );
}
 
  

