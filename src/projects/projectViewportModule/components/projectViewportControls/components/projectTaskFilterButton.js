import ElementData from "../../../../../shared/utils/ElementData";
import projectsState from "../../../../shared/utils/projectsState";
import selectProjectTaskFilterInput from "./selectProjectTaskFilterInput";

export default function projectTaskFilterButton()
{

  const activeComponent = projectsState.getActiveComponent();
  let buttonText = `Add Tasks Filter`;

  if (activeComponent) buttonText = `Filter By: ${activeComponent.getComponentTaskFilter()}`;

  const element = new ElementData
  (
    'button',
    'project-task-filter-button',
    {},
    [ buttonText ]
  ).renderElement();

  function elementClicked()
  {
    const activeProject = projectsState.getActiveProject();
    const activeComponent = projectsState.getActiveComponent();
    const hasprojectTasks = activeComponent.getComponentTasks().length !== 0;

    if (!activeProject || !activeComponent || !hasprojectTasks) return;

    const inputElement = selectProjectTaskFilterInput()

    element.replaceWith(inputElement);
    inputElement.showPicker();
  }

  element.onclick = elementClicked;

  return element;
}