import events from "../../../shared/events/events";
import eventsManager from "../../../shared/utils/eventsManager";
import storageModule from "../../../shared/utils/storageModule";
import checkSetupCompletion from "../../shared/utils/checkSetupCompletion";

export default function setImage(base64) {
  const settings = storageModule.getSettings();
  settings.picture = base64;
  storageModule.saveSettings(settings);
  eventsManager.emit(events.pictureChanged);
  checkSetupCompletion();
}
