import ElementData from "../../../utils/ElementData";
import { appEvents, appEventsManager } from "../../../events/appEvents";
import appState from "../../../data/appState";
import tasksState from "../../../data/tasksState";
import storageModule from "../../../storageModule";
import themeHandler from "../../../shared/utils/themeHandler";
import dashboard from "../../../dashboard/dashboard";
import signIn from "../../signIn";
import checkInit from "../utils/checkInit";
import userActivated from "../utils/userActivated";
import removeFirstChild from '../../../shared/utils/removeFirstChild';
import switchModule from "../utils/switchModule";

export default function newUserButtons(newUser) {

  const signInPage = document.querySelector('.sign-in');

  const continueButton = new ElementData("button", "continue-creation", {}, [
    "Create User",
  ]).renderElement();

  const backButton = new ElementData("button", "return", {}, [
    "Return to Sign In",
  ]).renderElement();

  const element = new ElementData("div", "create-user-buttons", {}, [
    backButton,
    continueButton,
  ]).renderElement();

  function continueButtonClicked()
  {
    if (!userActivated(newUser)) return;
    appEventsManager.emit(appEvents.userCreated, newUser);
    storageModule.setSessionToken(newUser.id);
    switchModule('dashboard');
    console.log(appState.getCurrentUser());
  }

  function backButtonClicked() {
    if (!userActivated(newUser)) return;
    appEventsManager.emit(appEvents.userCreated, newUser);
    switchModule('select');
  }

  continueButton.onclick = continueButtonClicked;
  backButton.onclick = backButtonClicked;

  return element;
}
