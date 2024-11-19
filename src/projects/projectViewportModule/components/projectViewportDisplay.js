import ElementData from "../../../shared/utils/ElementData";
import projectEvents from "../../shared/events/projectsEvents";
import projectsEventsManager from "../../shared/utils/projectEventsManager";
import renderProjectViewportDisplay from '../utils/renderProjectViewportDisplay';

export default function projectViewportDisplay()
{
  const element = new ElementData
  (
    'div',
    'project-viewport-display',
    {},
    []
  ).renderElement();

  function renderViewport()
  {
    renderProjectViewportDisplay(element);
  }

  renderViewport();
  projectsEventsManager.on(projectEvents.projectChanged, renderViewport);
  return element;
}