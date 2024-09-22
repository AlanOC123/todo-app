export default (function storageModule() {

  const storageLocation = isLocalStorageAvailable() ? localStorage : sessionStorage;

  function isLocalStorageAvailable() {
    try {
      const value = 'test';
      localStorage.setItem('test-value', value);
      localStorage.removeItem('test-value');
      return true;
    } catch (error) {
      console.warn(`Error setting item to local storage ${error}. Falling back to Session Storage`);
      return false;
    };
  };

  function saveSettings(newSettings) {
    if (typeof newSettings !== 'object') {
      console.error(`Settings not valid. Settings: ${newSettings}`);
      return;
    }
    storageLocation.setItem('settings', JSON.stringify(newSettings));
  };

  function initialiseSettings() {
    const defaultSettings = {
      init: false,
      name: null,
      picture: null,
      theme: null,
      tasks: [
        { 'Sunday': [] },
        { 'Monday': [] },
        { 'Tuesday': [] },
        { 'Wednesday': [] },
        { 'Thursday': [] },
        { 'Friday': [] },
        { 'Saturday': [] },
      ],
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
    };

    saveSettings(defaultSettings);
    return defaultSettings;
  };


  function getSettings(settingProperty = null) {
    const settings = JSON.parse(storageLocation.getItem('settings')) || initialiseSettings();

    if (!settingProperty) {
      return settings;
    };

    const isValidProperty = ['init', 'name', 'picture', 'theme', 'tasks', 'projects'].includes(settingProperty);

    if (isValidProperty) {
      return settings[settingProperty];
    } else {
      const validDay = findTask(settingProperty, settings.tasks);

      if (validDay !== undefined) {
        return validDay;
      };

      const validProject = findProject(settingProperty, settings.projects);

      if (validProject !== undefined) {
        return validProject;
      };

      console.error(`${settingProperty} is not a valid setting.`);
      return undefined;
    };
  };

  function findTask(day, tasks) {
    return tasks.find(task => Object.prototype.hasOwnProperty.call(task, day) );
  };

  function findProject(projectName, projects) {
    return projects.find(project => project.name === projectName );
  };

  function clearSettings() {
    if (storageLocation.getItem('settings')) {
      storageLocation.removeItem('settings');
    };
  };

  function clearStorage() {
    storageLocation.clear();
  };

  return {
    saveSettings,
    getSettings,
    clearSettings,
    clearStorage
  };

})();