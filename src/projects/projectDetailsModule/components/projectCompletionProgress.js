import projectEvents from "../../shared/events/projectsEvents";
import projectsEventsManager from "../../shared/utils/projectEventsManager";
import projectsState from "../../shared/utils/projectsState";
import projectDetailsCard from "./projectDetailsCard/projectDetailsCard";
import projectDetailsCardDisplay from "./projectDetailsCard/projectDetailsCardDisplay";
import projectDetailsCardLabel from "./projectDetailsCard/projectDetailsCardLabel";

export default function projectCompletionProgress()
{
  const displayElement = projectDetailsCardDisplay();
  const element = projectDetailsCard
  (
    projectDetailsCardLabel('Progress:'),
    displayElement
  );

  function changeText()
  {
    const project = projectsState.getSelectedProject();
    let text = '0%';

    if (project)
    {
      text = `${project.getProjectCompletionProgress() || 0}%`;
    }
    displayElement.textContent = text;
  }

  changeText();
  projectsEventsManager.on(projectEvents.projectUpdated, changeText);
  projectsEventsManager.on(projectEvents.projectChanged, changeText);

  return element;
}