import ElementData from "../../../../../shared/utils/ElementData";
import projectNameInput from "./projectNameInput";
import projectsState from "../../../../shared/utils/projectsState";

export default function renameProjectButton() {
  const element = new ElementData("button", "change-project-name-button", {}, [
    "Change Project Name",
  ]).renderElement();

  function elementClicked() {
    if (!projectsState.getActiveProject())
    {
      return;
    };

    const nameInputElement = projectNameInput();
    element.replaceWith(nameInputElement);
    nameInputElement.focus();
  }

  element.onclick = elementClicked;

  return element;
}
