import React from 'react';
import { I18nextProvider } from 'react-i18next';
import App from '../../src/containers/App';
import i18n from '../../src/framework/i18';


export default class Root extends React.Component {
  render() {
    return (
      <I18nextProvider i18n={ i18n }>
         <App/>
      </I18nextProvider>
    );
  }
}
