import projectViewportStatusSection from "../components/projectViewportStatusSection";
import projectsState from "../../shared/utils/projectsState";
import projectViewportNoProjectMessage from '../components/projectViewportNoProjectMessage';
import projectViewportComponentCard from "../components/projectViewportComponentCard/projectViewportComponentCard";
import createComponentCard from "../components/projectViewportComponentCard/createComponentCard";

export default function renderProjectViewportDisplay(viewportElement)
{
  viewportElement.classList.remove('empty');
  while(viewportElement.firstChild)
  {
    viewportElement.removeChild(viewportElement.firstChild);
  }
  
  const project = projectsState.getSelectedProject();

  if (!project)
  {
    viewportElement.append(projectViewportNoProjectMessage());
    viewportElement.classList.add('empty');
    return;
  }

  const components = projectsState.getSortedComponents();

  for (const sectionName in components)
  {
    const statusArray = components[sectionName];
    const viewportSection = projectViewportStatusSection(sectionName);
    const componentViewport = viewportSection.children[1];
    statusArray.forEach
    (
      component =>
      {
        componentViewport.append(projectViewportComponentCard(component))
      }
    )
    componentViewport.append(createComponentCard(sectionName))
    viewportElement.append(viewportSection);
  }
}