import ElementData from "../../../shared/utils/ElementData";
import projectsEventsManager from "../../shared/utils/projectEventsManager";
import projectEvents from "../../shared/events/projectsEvents";
import renderProjectCards from "../utils/renderProjectCards";

export default function selectProjectOptions()
{
  const element = new ElementData
  (
    'ul',
    'select-project-options',
    {},
    []
  ).renderElement();

  function updateList()
  {
    renderProjectCards(element);
  }

  updateList();
  projectsEventsManager.on(projectEvents.projectAdded, updateList);
  projectsEventsManager.on(projectEvents.projectDeleted, updateList);

  return element;
}