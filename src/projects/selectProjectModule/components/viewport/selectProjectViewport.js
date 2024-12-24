import ElementData from "../../../../shared/utils/ElementData";
import projectsState from "../../../shared/utils/projectsState";
import selectProjectEventsManager from "../../events/selectProjectEventsManager";
import selectProjectEvents from "../../events/selectProjectEvents";
import newProjectCard from "./newProjectCard";

export default function selectProjectViewport()
{
  const element = new ElementData
  (
    'div',
    'select-project-viewport',
    {},
    [
      newProjectCard()
    ]
  ).renderElement();

  function renderViewport()
  {
    const currentProjects = projectsState.getProjects();

    if (currentProjects.length === 0) return; 

    currentProjects.forEach
    (
      project => element.append(project.getProjectCard())
    );
  }

  function projectAdded({ cardElement, addCardElement })
  {
    if (!cardElement || !addCardElement) return;

    element.insertBefore(cardElement, addCardElement);
  }

  function projectDeleted({ cardElement })
  {
    if (!cardElement) return;

    element.removeChild(cardElement);
  }

  renderViewport();
  selectProjectEventsManager.on(selectProjectEvents.projectCardAdded, projectAdded);
  selectProjectEventsManager.on(selectProjectEvents.projectCardDeleted, projectDeleted);

  return element;
}