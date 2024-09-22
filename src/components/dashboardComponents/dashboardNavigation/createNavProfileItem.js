import createElement from "../../../utils/classes/createElement";
import ElementData from "../../../utils/classes/ElementData";
import EventsManager from "../../../utils/events/common/EventsManager";
import events from "../../../utils/events/common/events";
import storageModule from "../../../utils/dataProcessing/storageModule";
import setName from '../../../utils/dataProcessing/common/setName';
import placeholderImage from '../../../assets/placeholder-image.jpeg';

export default function createNavProfileItem() {

  function updateProfilePicture() {
    const src = storageModule.getSettings('picture') || placeholderImage;
    profilePicture.style.backgroundImage = `url(${src})`;
  };

  function updateNameTag() {
    nameTag.textContent = storageModule.getSettings('name') || 'No Name Given';
  };

  const nameTagData = new ElementData(
    'p',
    'nav-item-text',
    {
      id: 'name-tag'
    },
    []
  ).createElementData();

  const profilePictureData = new ElementData(
    'div',
    'profile-picture',
    {
      id: 'profile-picture'
    },
    []
  ).createElementData();

  const nameTag = createElement(nameTagData);
  const profilePicture = createElement(profilePictureData);
  updateProfilePicture();
  updateNameTag();

  const containerData = new ElementData(
    'li',
    'nav-profile-item',
    {
      id: 'profile'
    },
    [
      profilePicture,
      nameTag
    ],
  ).createElementData();

  EventsManager.on(events.pictureChanged, updateProfilePicture);
  EventsManager.on(events.nameChanged, updateNameTag);

  return createElement(containerData);
}