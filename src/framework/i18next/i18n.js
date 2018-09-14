import i18n from 'i18next';
import languageDetector from '../../util/language-detector';

i18n
  .use(languageDetector)
  .init({
    fallbackLng: 'pt',
    // the translations
    // realworld load that via xhr or bundle those using webpack    
    resources: {
      pt: {
            home: {
              title: 'Bem Vindo'
            }
      },  
      en: {
        home: {
          title: 'Welcome'
        }
      },
      de: {
        home: {
          title: 'Willkommen'
        }
      },
      // have a initial namespace
      ns: ['translation'],
      defaultNS: 'translation',
      interpolation: {
        escapeValue: false // not needed for react
      }
    }  
  });

export default i18n;