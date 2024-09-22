import storageModule from "../dataProcessing/storageModule";

export default function isSetUpComplete() {
  const settings = storageModule.getSettings();
  const setupPropsRemaining = ['name', 'picture', 'theme'].filter(prop => !settings[prop]);
  if (setupPropsRemaining.length === 0) {
    settings.init = true;
    storageModule.saveSettings(settings);
  }
}