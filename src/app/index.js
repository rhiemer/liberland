import React from 'react';
import Root from '../root';
import store from './store';
import i18n from './i18n';
import Routers from './routers';
import TabBar from '../containers/Home/TabBar'

export default class App extends React.Component {

  render() {    
     
     return (      
        <Root i18n={i18n} store={store}>
          <Routers/>             
        </Root>
      );
  }

}
