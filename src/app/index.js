import React from 'react';
import Root from '../root';
import i18n from './i18n';
import Routers from './routers';

export default class App extends React.Component {

  render() {    
     return (
        <Root i18n={i18n}>
          <Routers/>             
        </Root>
      );
  }

}
