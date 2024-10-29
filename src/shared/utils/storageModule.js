export default (function storageModule() {

  const defaultSettings = {
    version: 1,
    init: false,
    name: null,
    picture: null,
    theme: null,
    tasks: [],
    projects: [],
    stats: {
      overdueTasks: [],
      completeTasks: [],
      totalTasks: [],
      commonTasks: [],
      tasksCompletionRate: '',
      busiestDay: '',
      quietestDay: '',
      highestNumberOfTasks: '',
    }  
  }

  const storageLocation = isLocalStorageAvailable() ? localStorage : sessionStorage;

  function initSettings() {
    const settings = getSettings();
    if (!settings || settings.version !== defaultSettings.version) {
      resetSettings();
    }
  };

  function resetSettings() {
    console.warn('Resetting settings to default...');
    const newSettings = migrateData(getSettings(), defaultSettings);
    saveSettings(newSettings);
  };

  function migrateData(oldSettings, defaultSettings) {
    const newSettings = {...defaultSettings};
    for (const key in oldSettings) {
      if (oldSettings.hasOwnProperty(key) && oldSettings[key]) {
        if (oldSettings[key] instanceof Object) {
          newSettings[key] = { ...defaultSettings[key], ...oldSettings[key] };
        }
      } else {
        newSettings[key] = oldSettings[key];
      }
    }

    return newSettings;
  }

  function isLocalStorageAvailable() {
    try {
      const value = 'test';
      localStorage.setItem('test-value', value);
      localStorage.removeItem('test-value');
      return true;
    } catch (error) {
      console.warn(`Error setting item to local storage ${error}. Falling back to Session Storage`);
      return false;
    }
  }

  function saveSettings(newSettings) {
    if (typeof newSettings !== 'object') {
      console.error(`Settings not valid. Settings: ${newSettings}`);
      return;
    }

    storageLocation.setItem('settings', JSON.stringify(newSettings));
  }

  function getSettings(property) {
    let settings;

    try {
      settings = JSON.parse(storageLocation.getItem('settings')) || null;
    } catch (error) {
      console.error(`Error getting items from storage. Settings: ${settings}`);
      resetSettings();
      return null;
    }

    if (!settings) {
      return null;
    }

    if (!property) {
      return settings;
    }

    return settings.hasOwnProperty(property) ? settings[property] : null;
  };

  function clearSettings() {
    storageLocation.removeItem('settings');
  }

  function clearStorage() {
    storageLocation.clear();
  }

  initSettings();

  return {
    saveSettings,
    getSettings,
    clearSettings,
    clearStorage
  };

})();