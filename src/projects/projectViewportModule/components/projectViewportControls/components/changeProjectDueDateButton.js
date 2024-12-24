import ElementData from "../../../../../shared/utils/ElementData";
import projectDueDateInput from "./projectDueDateInput";
import projectsState from "../../../../shared/utils/projectsState";

export default function changeProjectDueDateButton() {
  const element = new ElementData("button", "change-project-due-date-button", {}, [
    "Change Project Due Date",
  ]).renderElement();

  function elementClicked() {
    if (!projectsState.getActiveProject())
    {
      return;
    };

    const dueDateInputElement = projectDueDateInput();
    element.replaceWith(dueDateInputElement);
    dueDateInputElement.focus();
  }

  element.onclick = elementClicked;

  return element;
}
