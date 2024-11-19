import ElementData from "../../../shared/utils/ElementData";
import setDisplayHeadingProjectName from "../utils/setDisplayHeadingProjectName";
import projectsEventsManager from "../../shared/utils/projectEventsManager";
import projectEvents from "../../shared/events/projectsEvents";

export default function selectProjectDisplayProjectName()
{
  const element = new ElementData
  (
    'div',
    'select-project-display-project-name',
    {},
    []
  ).renderElement();

  setText();

  function setText()
  {
    setDisplayHeadingProjectName(element);
  };

  projectsEventsManager.on(projectEvents.projectViewportUpdated, setText);

  return element;
};