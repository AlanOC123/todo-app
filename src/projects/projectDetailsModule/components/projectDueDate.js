import projectEvents from "../../shared/events/projectsEvents";
import projectsEventsManager from "../../shared/utils/projectEventsManager";
import projectsState from "../../shared/utils/projectsState";
import projectDetailsCard from "./projectDetailsCard/projectDetailsCard";
import projectDetailsCardDisplay from "./projectDetailsCard/projectDetailsCardDisplay";
import projectDetailsCardLabel from "./projectDetailsCard/projectDetailsCardLabel";

export default function projectDueDate()
{
  const displayElement = projectDetailsCardDisplay();
  const element = projectDetailsCard
  (
    projectDetailsCardLabel('Due Date:'),
    displayElement
  );

  function changeText()
  {
    const project = projectsState.getSelectedProject();
    let text = '';

    if (project)
    {
      text = project.getProjectDueDate();
    }
    displayElement.textContent = text;
  }

  changeText();
  projectsEventsManager.on(projectEvents.projectUpdated, changeText);
  projectsEventsManager.on(projectEvents.projectChanged, changeText);

  return element;
}