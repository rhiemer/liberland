import Expo from 'expo';

// creating a language detection plugin using expo
// http://i18next.com/docs/ownplugin/#languagedetector
 const languageDetector = {
  type: 'languageDetector',
  async: true, // async detection
  detect: (cb) => {
    return Expo.DangerZone.Localization.getCurrentLocaleAsync()
      .then(lng => { cb(lng.replace('_', '-')); })
  },
  init: () => {},
  cacheUserLanguage: () => {}
}

export default languageDetector;