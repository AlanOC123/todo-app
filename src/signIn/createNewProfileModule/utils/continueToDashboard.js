import storageModule from "../../../storageModule";
import { appEvents, appEventsManager } from "../../../events/appEvents";

export default function continueToDashboard(user)
{
  if (!user.getIsInit()) return false;

  storageModule.setUsers(placeholderUser.toObject());

  appEventsManager.emit(appEvents.sessionStarted, user.getID());
};