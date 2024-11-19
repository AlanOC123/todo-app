import projectsEventsManager from "../../shared/utils/projectEventsManager";
import projectEvents from "../../shared/events/projectsEvents";
import testProjects from "../../shared/utils/testProjects";
import projectViewportComponentCardNameDisplay from "../components/projectViewportComponentCard/projectViewportComponentCardNameDisplay";

export default function changeComponentName(inputElement, component)
{
  if (!inputElement)
  {
    return;
  }

  if(!component)
  {
    inputElement.replaceWith(projectViewportComponentCardNameDisplay(component))
    return;
  }

  component.setComponentName(inputElement.value);
  inputElement.replaceWith(projectViewportComponentCardNameDisplay(component))
}