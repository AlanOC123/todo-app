import storageModule from "../../../shared/utils/storageModule";

export default function setPlaceholderValues(firstNameElement, lastNameElement) 
{
  firstNameElement = firstNameElement.querySelector('#first-name');
  lastNameElement = lastNameElement.querySelector('#last-name');
  let currentUserName = storageModule.getSettings('name');
  let firstName;
  let lastName;

  if (currentUserName) {
    currentUserName = currentUserName.split(' ');
    firstName = currentUserName[0];
    lastName = currentUserName[1];
  };

  firstNameElement.placeholder = firstName || 'Type Name';
  lastNameElement.placeholder = lastName || 'Type Name';
}