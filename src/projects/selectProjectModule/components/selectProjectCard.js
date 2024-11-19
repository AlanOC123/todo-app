import ElementData from "../../../shared/utils/ElementData";
import selectProjectCardNameDisplay from "./selectProjectCardNameDisplay";
import projectsState from "../../shared/utils/projectsState";

export default function selectProjectCard(project)
{
  const element = new ElementData
  (
    'li',
    'select-project-card',
    {
      'data-id': project.getProjectID(),
    },
    [
      selectProjectCardNameDisplay(project.getProjectName()),
    ]
  ).renderElement();

  function cardClicked()
  {
    projectsState.setSelectedProject(project);

    const activeCard = document.querySelector('.project-active');

    if (activeCard)
    {
      if (activeCard !== element)
      {
        activeCard.classList.remove('project-active');
      } else {
        return;
      }
    };

    element.classList.add('project-active');
  }

  element.onclick = cardClicked;

  return element;
}