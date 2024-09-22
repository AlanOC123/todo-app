import EventsManager from '../../events/common/EventsManager';
import events from '../../events/common/events';
import storageModule from '../storageModule';

export default function setName(value) {
  const settings = storageModule.getSettings();
  settings.name = value;
  storageModule.saveSettings(settings);
  EventsManager.emit(events.nameChanged);
}