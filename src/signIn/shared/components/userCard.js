import ElementData from "../../../utils/ElementData";
import themeHandler from "../../../shared/utils/themeHandler";
import dashboard from "../../../dashboard/dashboard";
import storageModule from "../../../storageModule";
import { appEvents, appEventsManager } from "../../../events/appEvents";

export default function userCard(user) {
  const pictureElement = new ElementData(
    "div",
    "user-card-picture",
    {},
    []
  ).renderElement();

  const nameElement = new ElementData(
    "h3",
    "user-card-name",
    {},
    []
  ).renderElement();

  function setName() {
    nameElement.textContent = user.getName();
  }

  function setPicture() {
    pictureElement.style.backgroundImage = `url(${user.getImage()})`;
  }

  setName();
  setPicture();

  const element = new ElementData(
    "div",
    "user-card",
    {
      id: user.getID(),
    },
    [pictureElement, nameElement]
  ).renderElement();

  function elementHover(event)
  {
    if (!user.getIsInit()) return;

    const options =
    {
      'mouseenter': true,
      'mouseleave': false,
    };

    const action = options[event.type];

    if (typeof action !== 'boolean') return;

    themeHandler.previewTheme(user.getTheme(), action);
  }

  function elementClicked() {
    if (!user.getIsInit())
    {
      console.error('User not initialised', user.toObject());
      return false;
    };

    if (!user.getIsActivated())
    {
      console.error('User not authorised', user.toObject())
      return false;
    };

    storageModule.setSessionToken(encodeURIComponent(user.getID()));

    const signInPage = document.querySelector(".sign-in");
    const parentElement = signInPage.parentElement;

    if (signInPage) parentElement.removeChild(signInPage);
    document.body.append(dashboard());
  }

  element.onmouseenter = elementHover;
  element.onmouseleave = elementHover;
  element.onclick = elementClicked

  return element;
}
