import createUser from "../../../utils/UserFactory";
import userCard from "./userCard";
import createNewProfile from "../../createNewProfileModule/createNewProfile";
import appState from "../../../data/appState";
import ElementData from "../../../utils/ElementData";
import generateID from "../../../shared/utils/generateID";
import placeholderImage from '../../../shared/assets/system_user_image.jpg';
import switchModule from "../../createNewProfileModule/utils/switchModule";
import getFactoryData from "../../../utils/factoryConstructorData";

export default function newUserCard() {
  const version = appState.getCurrentVersion() || 1;

  const newUser = getFactoryData.user();

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
    nameElement.textContent = newUser.name;
  }

  function setPicture() {
    pictureElement.style.backgroundImage = `url(${newUser.image})`;
  }

  setName();
  setPicture();

  const element = new ElementData(
    "div",
    "user-card",
    {
      id: newUser.id,
    },
    [pictureElement, nameElement]
  ).renderElement();

  function elementClicked() {
    switchModule('create', newUser);
  }

  element.onclick = elementClicked;

  return element;
}
