import React from 'react';
import { I18nextProvider } from 'react-i18next';
import Wrapper from '../../../../src/components/wrapper';
import i18n from '../../../../src/framework/i18';

export default ({children}) =>   
    <I18nextProvider i18n={ i18n }>
      <Wrapper i18n={ i18n }>
        {children}
      </Wrapper>
    </I18nextProvider>


