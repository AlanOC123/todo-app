import EventsManager from "../../events/common/EventsManager";
import events from "../../events/common/events";
import storageModule from "../storageModule";

export default function setTheme(theme) {
  const settings = storageModule.getSettings();
  settings.theme = theme;
  storageModule.saveSettings(settings);
  EventsManager.emit(events.themeChanged);
}