import eventsManager from "../../../shared/utils/eventsManager";
import events from "../../../shared/events/events";
import storageModule from "../../../shared/utils/storageModule";
import checkSetupCompletion from "../../shared/utils/checkSetupCompletion";

export default function setTheme(theme) {
  const settings = storageModule.getSettings();
  settings.theme = theme.id;
  storageModule.saveSettings(settings);
  eventsManager.emit(events.themeChanged);
  checkSetupCompletion();
}