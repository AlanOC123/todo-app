import ElementData from "../../../../shared/utils/ElementData";
import informationDisplay from "./components/informationDisplay";
import componentViewport from "./components/componentViewport";
import projectsPageEventsManager from "../../../shared/events/projectsPageEventsManager";
import projectPageEvents from "../../../shared/events/projectsPageEvents";
import projectsState from "../../../shared/utils/projectsState";

export default function projectCard(projectClass)
{
  const element = new ElementData
  (
    'div',
    'project-card',
    {},
    [
      informationDisplay(projectClass),
      componentViewport(projectClass),
    ]
  ).renderElement();

  function elementClicked(event)
  {
    event.stopPropagation();
    projectsState.setActiveProject(projectClass);
  }

  element.onclick = elementClicked;

  return element;
}