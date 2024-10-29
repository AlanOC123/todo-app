import storageModule from "../../../shared/utils/storageModule";

export default function checkSetupCompletion() {
  const settings = storageModule.getSettings();
  const setupPropsRemaining = ['name', 'picture', 'theme'].filter(prop => !settings[prop]);
  if (setupPropsRemaining.length === 0) {
    settings.init = true;
    storageModule.saveSettings(settings);
  }
}