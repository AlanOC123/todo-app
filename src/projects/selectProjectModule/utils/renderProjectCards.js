import projectsState from "../../shared/utils/projectsState";
import testProjects from "../../shared/utils/testProjects";
import addProjectCard from '../components/addProjectCard';

export default function renderProjectCards(element)
{
  while(element.firstChild)
  {
    element.removeChild(element.firstChild);
  }

  const currentProject = projectsState.getSelectedProject();

  testProjects.forEach
  (
    project =>
    {
      const card = project.getCardElement();

      if (project === currentProject)
      {
        card.classList.add('project-active');
      } else
      {
        card.classList.remove('project-active');
      }
      element.append(project.getCardElement());
    } 
  )

  if (element.children.length < 5)
  {
    element.append(addProjectCard());
  } 
}