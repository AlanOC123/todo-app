import createElement from "../../../utils/classes/createElement";
import ElementData from "../../../utils/classes/ElementData";
import EventsManager from "../../../utils/events/common/EventsManager";
import events from "../../../utils/events/common/events";
import isNameValid from '../../../utils/validation/isNameValid';
import storageModule from "../../../utils/dataProcessing/storageModule";
import setName from "../../../utils/dataProcessing/common/setName";
import isSetUpComplete from "../../../utils/validation/isSetUpComplete";

export default function settingsNameEntry() {

  const data = {
    firstName: '',
    lastName: ''
  };

  const firstNameLabelData = new ElementData(
    'label',
    'name-entry-label',
    {
      htmlFor: 'name-entry-input',
    },
    ['First Name']
  ).createElementData();

  const firstNameInputData = new ElementData(
    'input',
    'name-entry-input',
    {
      id: 'name-entry-input',
      name: 'name-entry-input',
      type: 'text',
      minlength: '3',
      maxlength: '20',
      placeholder: 'Type Name'
    },
    []
  ).createElementData();

  const firstNameInput = createElement(firstNameInputData);

  firstNameInput.addEventListener('blur', () => {
    if (isNameValid(firstNameInput.value)) {
      data.firstName = firstNameInput.value;
      updateName();
    };
  });

  const firstNameContainerData = new ElementData(
    'div',
    'name-container',
    {},
    [
      createElement(firstNameLabelData),
      firstNameInput
    ]
  ).createElementData();

  const lastNameLabelData = new ElementData(
    'label',
    'name-entry-label',
    {
      htmlFor: 'name-entry-input',
    },
    ['Last Name']
  ).createElementData();

  const lastNameInputData = new ElementData(
    'input',
    'name-entry-input',
    {
      id: 'name-entry-input',
      name: 'name-entry-input',
      type: 'text',
      minlength: '3',
      maxlength: '20',
      placeholder: 'Type Name'
    },
    []
  ).createElementData();

  const lastNameInput = createElement(lastNameInputData);

  lastNameInput.addEventListener('blur', () => {
    if (isNameValid(lastNameInput.value)) {
      data.lastName = lastNameInput.value;
      updateName();
    };
  });

  const lastNameContainerData = new ElementData(
    'div',
    'name-container',
    {},
    [
      createElement(lastNameLabelData),
      lastNameInput
    ]
  ).createElementData();

  const containerData = new ElementData(
    'div',
    'name-entry',
    {},
    [
      createElement(firstNameContainerData),
      createElement(lastNameContainerData)
    ]
  ).createElementData();

  function updateName() {
    const name = `${data.firstName} ${data.lastName}`.trim();
    setName(name);
    isSetUpComplete();
  };

  return createElement(containerData);
}