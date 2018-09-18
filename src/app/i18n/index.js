import i18n from 'i18next';
import {reactI18nextModule } from 'react-i18next';
import detectorLocaleCurrent from '../../framework/detectors/locale/current';
import {LANGUAGE_DEFAULT} from '../constants';
import languages from './languages';

i18n
  .use(detectorLocaleCurrent)
  .use(reactI18nextModule)
  .init({
    fallbackLng:LANGUAGE_DEFAULT,
    resources: {
      ...languages,      
      // have a initial namespace
      ns: ['translation'],
      defaultNS: 'translation',
      interpolation: {
        escapeValue: false // not needed for react
      }
    }  
  });

export default i18n;