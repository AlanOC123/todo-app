import storageTypeCheck from './storageTypeCheck.js';

const storageModule = (function() {

  const storageType = storageTypeCheck('localStorage') ? localStorage : sessionStorage;

  function writeSettingsToStorage(newSettings) {

    const savedSettings = Object.assign({}, newSettings);
    const JSONSettings = JSON.stringify(savedSettings);

    storageType.removeItem('Settings');
    storageType.setItem('Settings', JSONSettings);
  }

  function getSettingsFromStorage() {
    if (!storageType.getItem('Settings')) {
      return false;
    }
    return JSON.parse(storageType.getItem('Settings'))
  }

  function _clearStorage() {
    storageType.clear();
  }

  return {
    writeSettingsToStorage,
    getSettingsFromStorage,
    _clearStorage
  }
})();

export default storageModule;