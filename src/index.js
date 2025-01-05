import "./shared/styles/shared.css";
import appState from "./data/appState";
import storageModule from "./storageModule";
import signIn from "./signIn/signIn";
import dashboard from "./dashboard/dashboard";
import setup from "./setup";
import { appEvents, appEventsManager } from "./events/appEvents";

async function runApp() {
  //storageModule.clearAll();
  const currentUser = storageModule.getActiveUser();
  if (!currentUser) document.body.append(signIn());
  else
  {
    appEventsManager.emit(appEvents.sessionStarted);
    (document.body.append(dashboard()));
  }
}

document.addEventListener("DOMContentLoaded", runApp);
window.addEventListener("beforeunload", () => appEventsManager.emit(appEvents.sessionEnded));
