import eventsManager from '../../../shared/utils/eventsManager';
import events from '../../../shared/events/events';
import storageModule from '../../../shared/utils/storageModule';
import checkSetupCompletion from '../../shared/utils/checkSetupCompletion'

export default function setName(value) {
  const settings = storageModule.getSettings();
  console.log(settings);
  settings.name = value;
  storageModule.saveSettings(settings);
  eventsManager.emit(events.nameChanged);
  checkSetupCompletion();
}