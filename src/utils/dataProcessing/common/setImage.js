import events from '../../events/common/events';
import EventsManager from '../../events/common/EventsManager';
import storageModule from '../storageModule';

export default function setImage(base64) {
  const settings = storageModule.getSettings();
  settings.picture = base64;
  storageModule.saveSettings(settings);
  EventsManager.emit(events.pictureChanged);
};