import React from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { NativeRouter as Router} from 'react-router-native'
import { I18nextProvider } from 'react-i18next';
import styles from './styles'

export default class Root extends React.Component {

  render() {    
    const {children,i18n,store} = {...this.props};
    return (      
        <Router>
          <View style={styles.root} >  
             <Provider store={store}>
                <I18nextProvider i18n={ i18n }>  
                  {children}  
                </I18nextProvider>                  
             </Provider>
          </View> 
       </Router>
    );
  }

}
