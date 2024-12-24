import ElementData from "../../../../../shared/utils/ElementData";
import projectsState from "../../../../shared/utils/projectsState";
import componentNameInput from "./componentNameInput";

export default function renameProjectComponentButton() {
  const element = new ElementData("button", "change-component-name-button", {}, [
    "Change Component Name",
  ]).renderElement();

  function elementClicked() {
    if (!projectsState.getActiveProject() || !projectsState.getActiveComponent())
    {
      return;
    };
    const nameInputElement = componentNameInput();
    element.replaceWith(nameInputElement);
    nameInputElement.focus();
  }

  element.onclick = elementClicked;

  return element;
}
