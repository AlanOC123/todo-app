import isNameValid from "./utils/isNameValid";
import setPlaceholderValues from "./utils/setPlaceholderValues";
import formatName from "./utils/formatName";
import firstNameField from "./components/firstNameField";
import lastNameField from "./components/lastNameField";
import enterNameContainer from "./components/enterNameContainer";
import eventsManager from "../../shared/utils/eventsManager";
import events from "../../shared/events/events";

export default (function enterNameModule() {

  const data = {
    firstName: "",
    lastName: "",
  };

  const firstNameInput = firstNameField();
  const lastNameInput = lastNameField();
  setPlaceholderValues(firstNameInput, lastNameInput);

  const firstNameInputField = firstNameInput.querySelector('#first-name');

  const lastNameInputField = lastNameInput.querySelector('#last-name');

  firstNameInputField.addEventListener("blur", () => {
    const value = firstNameInputField.value;
    if (isNameValid(value)) {
      data.firstName = value;
      formatName(data);
    }
  });

  lastNameInputField.addEventListener("blur", () => {
    const value = lastNameInputField.value;
    console.log(value);
    if (isNameValid(value)) {
      data.lastName = value;
      formatName(data);
    }
  });

  eventsManager.on
  (
    events.nameChanged, 
    () => setPlaceholderValues(firstNameInput, lastNameInput)
  )

  return enterNameContainer(firstNameInput, lastNameInput);
})()
